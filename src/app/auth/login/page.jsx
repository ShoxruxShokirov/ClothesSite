"use client"
import { useState, Suspense } from "react"
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { toast } from "react-toastify"
import { auth } from "@/firebase/config"
import Link from "next/link"
import "../style.scss"
import { useRouter } from 'next/navigation'
import { FcGoogle } from "react-icons/fc";
import { setSessionCookie } from "@/utils/cookies"
import { FaEnvelope, FaLock } from "react-icons/fa";


function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    function submitForm(e) {
        e.preventDefault()
        setIsLoading(true);
        for (let key in formData) {
            if (formData[key] === "") {
                toast.error("Please fill in all fields", { theme: "dark" })
                setIsLoading(false);
                return
            }
        }
        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user
                const userData = {
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    emailVerified: user.emailVerified
                }
                setSessionCookie(user.uid, userData)
                toast.success("Signed in successfully!", { theme: "dark" })
                router.push('/')
            })
            .catch((error) => {
                toast.error(error.message, { theme: "dark" })
                router.push('/auth/login')
            })
            .finally(() => setIsLoading(false));
    }

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    async function handleGoogleSignIn() {
        try {
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            
            // Store additional user data in cookies
            const userData = {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                emailVerified: user.emailVerified
            }
            
            setSessionCookie(user.uid, userData)
            toast.success("Signed in with Google successfully!", { theme: "dark" })
            router.push('/')
        } catch (error) {
            toast.error(error.message, { theme: "dark" })
        }
    }

    return (
        <div className="auth-container auth-signin-container">
            <h1>Sign In</h1>
            <form onSubmit={submitForm}>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <span className="input-icon"><FaEnvelope /></span>
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
                    <span className="input-icon"><FaLock /></span>
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
                    <button type="submit" className="register-btn" disabled={isLoading}>
                        {isLoading ? "Signing in..." : "Sign in"}
                    </button>
                </div>
                <div className="form-field">
                    <button id="google-btn" type="button" className="google-btn" onClick={handleGoogleSignIn} disabled={isLoading}>
                        <FcGoogle /> Sign in with Google
                    </button>
                </div>
            </form>

            <p>
                <small>
                    Don't have an account? <Link href="/auth/register">Register</Link>
                </small>
            </p>
        </div>
    )
}

export default function LoginPage() {
    return (
        <Suspense>
            <Login />
        </Suspense>
    )
}