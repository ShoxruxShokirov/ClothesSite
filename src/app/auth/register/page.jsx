"use client"
import Link from "next/link";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useState, useRef } from "react"
import { auth, storage } from "@/firebase/config"
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { FaUpload } from 'react-icons/fa'
import { setSessionCookie } from "@/utils/cookies"

export const dynamic = "force-static";

function Register() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
    })
    const [photoFile, setPhotoFile] = useState(null)
    const [photoPreview, setPhotoPreview] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const fileInputRef = useRef(null)
    const router = useRouter()
    
    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handlePhotoChange(e) {
        const file = e.target.files[0]
        if (file) {
            setPhotoFile(file)
            const reader = new FileReader()
            reader.onload = () => {
                setPhotoPreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    // Function to resize image before upload
    function resizeImage(file, maxWidth = 800, maxHeight = 800, quality = 0.8) {
        return new Promise((resolve) => {
            // Create an image object
            const img = new Image()
            img.src = URL.createObjectURL(file)
            
            img.onload = () => {
                // Create a canvas element
                const canvas = document.createElement('canvas')
                let width = img.width
                let height = img.height
                
                // Calculate new dimensions while maintaining aspect ratio
                if (width > height) {
                    if (width > maxWidth) {
                        height = Math.round(height * maxWidth / width)
                        width = maxWidth
                    }
                } else {
                    if (height > maxHeight) {
                        width = Math.round(width * maxHeight / height)
                        height = maxHeight
                    }
                }
                
                // Set canvas dimensions to the resized image dimensions
                canvas.width = width
                canvas.height = height
                
                // Draw the resized image on the canvas
                const ctx = canvas.getContext('2d')
                ctx.drawImage(img, 0, 0, width, height)
                
                // Convert the canvas to a Blob
                canvas.toBlob((blob) => {
                    // Clean up the object URL
                    URL.revokeObjectURL(img.src)
                    resolve(blob)
                }, file.type, quality)
            }
        })
    }

    function triggerFileInput() {
        fileInputRef.current.click()
    }

    async function submitForm(e) {
        e.preventDefault()
        setIsLoading(true)

        try {
            // Validate all fields
            for (let key in formData) {
                if (formData[key] === "") {
                    toast.error(`Please fill in ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`, { theme: "dark" })
                    setIsLoading(false)
                    return
                }
            }

            if (formData.password !== formData.password2) {
                toast.error("Passwords do not match", { theme: "dark" })
                setIsLoading(false)
                return
            }

            // Create user
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
            const user = userCredential.user

            // Set display name (concatenate first and last name)
            const displayName = `${formData.firstName} ${formData.lastName}`
            
            // Upload photo if provided
            let photoURL = null
            if (photoFile) {
                // Resize the image before upload
                const resizedImage = await resizeImage(photoFile)
                
                const storageRef = ref(storage, `profile_photos/${user.uid}`)
                const uploadTask = uploadBytesResumable(storageRef, resizedImage)
                
                // Wait for upload to complete
                await new Promise((resolve, reject) => {
                    uploadTask.on(
                        'state_changed',
                        (snapshot) => {
                            // Optional: track upload progress
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                            console.log('Upload is ' + progress + '% done')
                        },
                        (error) => {
                            console.error('Upload error:', error)
                            reject(error)
                        },
                        async () => {
                            // Upload completed successfully, get download URL
                            photoURL = await getDownloadURL(uploadTask.snapshot.ref)
                            resolve()
                        }
                    )
                })
            }

            // Update user profile with display name and photo URL
            await updateProfile(user, {
                displayName,
                photoURL: photoURL || null
            })

            // Store user data in cookies for session
            const userData = {
                displayName,
                email: formData.email,
                photoURL: photoURL || null,
                emailVerified: user.emailVerified
            }

            setSessionCookie(user.uid, userData)
            toast.success("Account created successfully!", { theme: "dark" })
            router.push('/')
        } catch (error) {
            console.error("Registration error:", error)
            toast.error(error.message, { theme: "dark" })
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <div className="auth-container auth-signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={submitForm}>
                <div className="photo-upload-container">
                    <div 
                        className="photo-preview" 
                        onClick={triggerFileInput}
                        style={{ 
                            backgroundImage: photoPreview ? `url(${photoPreview})` : 'none',
                            cursor: 'pointer'
                        }}
                    >
                        {!photoPreview && (
                            <div className="upload-icon">
                                <FaUpload />
                                <span>Upload Photo</span>
                            </div>
                        )}
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handlePhotoChange}
                        accept="image/*"
                        style={{ display: 'none' }}
                    />
                </div>
                
                <div className="form-field">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="password2">Password confirmation</label>
                    <input
                        id="password2"
                        type="password"
                        placeholder="Password confirmation"
                        name="password2"
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? "Creating Account..." : "Create Account"}
                    </button>
                </div>
            </form>
            <p>
                <small>
                    Already have an account? <Link href="/auth/login">Login</Link>
                </small>
            </p>
        </div>
    )
}

export default Register;