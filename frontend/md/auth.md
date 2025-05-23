# Firebase Authentication Guide for Next.js

## Step 1: Project Setup

1. Create a new Firebase project:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add Project" and follow the setup wizard
   - Give your project a name and click "Continue"
   - Disable Google Analytics (optional) and click "Create Project"

2. Register your web app:
   - Click the web icon (`</>`) on the project overview page
   - Register app with a nickname (e.g., "next-auth-app")
   - Click "Register app"
   - Copy the Firebase configuration object (we'll use it later)

3. Enable Authentication methods:
   - In Firebase Console, go to "Authentication" → "Sign-in method"
   - Enable "Email/Password" and "Google" providers
   - Save changes

4. Install required packages in your Next.js project:
   ```bash
   npm install firebase react-toastify
   ```

## Step 2: Firebase Configuration

Create a new file `src/firebase/config.js`:

```js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication
export const auth = getAuth(app)
```

## Step 3: Create Authentication Components

### Auth Container Component
Create `src/app/components/Auth/index.jsx`:

```jsx
"use client"
import "./style.scss"
import { useState } from "react"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

function Auth() {
    const [isRegistered, setIsRegistered] = useState(false)
    const toggleRegistered = (e) => {
        e.preventDefault()
        setIsRegistered(!isRegistered)
    }
    return (
        <div className="auth-container">
            {isRegistered ? <SignIn /> : <SignUp />}

            <div className="toggle-auth-btn-container">
                {
                    !isRegistered
                        ?
                        <p>
                            Already have an account? 
                            <a href="#" onClick={toggleRegistered} className="toggle-auth-btn">Sign in</a>
                        </p>
                        :
                        <p>
                            Don't have an account? 
                            <a href="#" onClick={toggleRegistered} className="toggle-auth-btn">Sign up</a>
                        </p>
                }
            </div>
        </div>
    )
}

export default Auth
```

### Sign Up Component
Create `src/app/components/Auth/SignUp.jsx`:

```jsx
"use client"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { toast } from "react-toastify"
import { auth } from "@/firebase/config"

function SignUp() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    })

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function submitForm(e) {
        e.preventDefault()

        for (let key in formData) {
            if (formData[key] === "") {
                toast.error("Please fill in all fields", { theme: "dark" })
                return
            }
        }

        if (formData.password !== formData.password2) {
            toast.error("Passwords do not match", { theme: "dark" })
            return
        }

        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user
                toast.success("Account created successfully!", { theme: "dark" })
            })
            .catch((error) => {
                toast.error(error.message, { theme: "dark" })
            })
    }

    return (
        <div className="auth-signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={submitForm}>
                <div className="form-field">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Username"
                        name="username"
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
                    <button type="submit">Create account</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
```

### Sign In Component
Create `src/app/components/Auth/SignIn.jsx`:

```jsx
"use client"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { toast } from "react-toastify"
import { auth } from "@/firebase/config"

function SignIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function submitForm(e) {
        e.preventDefault()

        for (let key in formData) {
            if (formData[key] === "") {
                toast.error("Please fill in all fields", { theme: "dark" })
                return
            }
        }

        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user
                toast.success("Signed in successfully!", { theme: "dark" })
            })
            .catch((error) => {
                toast.error(error.message, { theme: "dark" })
            })
    }

    return (
        <div className="auth-signin-container">
            <h1>Sign In</h1>
            <form onSubmit={submitForm}>
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
                    <button type="submit">Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
```

## Step 4: Add Authentication State Management

Create a new file `src/hooks/useAuth.js`:

```jsx
"use client"
import { useState, useEffect } from 'react'
import { auth } from '@/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return { user, loading }
}
```

## Step 5: Protect Routes

Create a middleware file `src/middleware.js`:

```js
import { NextResponse } from 'next/server'
import { auth } from '@/firebase/config'

export function middleware(request) {
  const session = request.cookies.get('session')

  // If the user is not logged in and trying to access a protected route
  if (!session && request.nextUrl.pathname.startsWith('/protected')) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/protected/:path*']
}
```

## Step 6: Add Logout Functionality

Create a new component `src/app/components/Logout.jsx`:

```jsx
"use client"
import { auth } from '@/firebase/config'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

function Logout() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await auth.signOut()
      toast.success('Logged out successfully', { theme: 'dark' })
      router.push('/auth')
    } catch (error) {
      toast.error(error.message, { theme: 'dark' })
    }
  }

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  )
}

export default Logout
```

## Step 7: Add Toast Notifications

Add the ToastContainer to your root layout `src/app/layout.jsx`:

```jsx
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
```

## Step 8: Add Google Sign In

Create a new file `src/app/components/Auth/GoogleSignIn.jsx`:

```jsx
"use client"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "@/firebase/config"
import { toast } from "react-toastify"  

function GoogleSignIn() {
    const handleGoogleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            toast.success("Signed in with Google successfully!", { theme: "dark" })
        } catch (error) {
            toast.error(error.message, { theme: "dark" })
        }
    }
    return (
        <button onClick={handleGoogleSignIn} className="google-btn">
            <FcGoogle /> Sign in with Google
        </button>
    )
}
export default GoogleSignIn
```

## Common Issues & Solutions

1. **Firebase Configuration Error**
   - Double-check your environment variables in `.env.local`
   - Ensure all values are copied correctly from Firebase Console

2. **Authentication Errors**
   - Check if email/password meet Firebase requirements
   - Password must be at least 6 characters
   - Ensure email format is valid

3. **Next.js Specific Issues**
   - Make sure to use "use client" directive in client components
   - Handle loading states during authentication
   - Use proper Next.js routing with `useRouter`

## Best Practices

1. Always use environment variables for Firebase configuration
2. Handle loading states during authentication
3. Provide clear error messages using toast notifications
4. Implement proper form validation
5. Never store sensitive information in client-side code
6. Use TypeScript for better type safety
7. Implement proper error boundaries
8. Use proper Next.js 13+ app directory structure

## Additional Resources

- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Toastify Documentation](https://fkhadra.github.io/react-toastify/)

```bash
npm install firebase react-toastify
```

And follow this article:

https://medium.com/@olenkadark/building-a-real-time-chat-app-with-vue-js-3-and-firebase-cb9537961e62
