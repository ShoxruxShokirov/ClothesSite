"use client"

import "../assets/styles/initial.scss"
import "../assets/styles/fouc-fix.css"
import 'react-toastify/dist/ReactToastify.css'
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import ThemeProvider from './providers/ThemeProvider'
import { useAuth } from "@/hooks/useAuth"
import { ToastContainer } from 'react-toastify'
import LoadingBar from './components/LoadingBar'
import { useEffect, useState, useReducer } from 'react'
import { globalReducer } from '../store/globalHelper'
import { context, initialData } from '../store'
import { Inter } from "next/font/google"
import { AnimatePresence } from "framer-motion"
import "./globals.scss"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  const { user, loading } = useAuth()
  const [isReady, setIsReady] = useState(false)
  const [store, dispatch] = useReducer(globalReducer, initialData)
  store.setStore = dispatch

  // const [store, setStore] = useState(initialData)
  // store.setStore = setStore

  useEffect(() => {
    setIsReady(true)
  }, [])

  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Nft-Project</title>
      </head>
      <body>
        <AnimatePresence mode="wait">
          <context.Provider value={store}>
            <ThemeProvider>
              <div className={`fouc-fix page-container ${isReady ? 'ready' : ''}`}>
                <LoadingBar />
                <Nav user={user} />
                 <main className="content-wrap">
                  {children}
                </main>
                <Footer />
                <ToastContainer />
              </div>
            </ThemeProvider>
          </context.Provider>
        </AnimatePresence>
      </body>
    </html>
  )
}
