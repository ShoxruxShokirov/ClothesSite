"use client"
import Link from "next/link";
import { useState, useRef } from "react"
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { FaUpload } from 'react-icons/fa'
import { setSessionCookie } from "@/utils/cookies"

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
            // Вместо Firebase просто сохраняем фиктивного пользователя в cookie
            const displayName = `${formData.firstName} ${formData.lastName}`
            const userData = {
                displayName,
                email: formData.email,
                photoURL: photoPreview || null,
                emailVerified: true
            }
            setSessionCookie(formData.email, userData)
            toast.success("Account created successfully! (no Firebase)", { theme: "dark" })
            router.push('/')
        } catch (error) {
            toast.error("Registration error!", { theme: "dark" })
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