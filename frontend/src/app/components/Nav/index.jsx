"use client"

import "./style.scss"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FaSearch, FaShoppingBag, FaUser, FaBars, FaMoon, FaSun } from 'react-icons/fa'

function ThemeSwitcher() {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem('theme')
        if (saved === 'dark') {
            setDark(true)
            document.body.classList.add('dark-theme')
        } else {
            setDark(false)
            document.body.classList.remove('dark-theme')
        }
    }, [])

    const toggleTheme = () => {
        if (dark) {
            document.body.classList.remove('dark-theme')
            localStorage.setItem('theme', 'light')
            setDark(false)
        } else {
            document.body.classList.add('dark-theme')
            localStorage.setItem('theme', 'dark')
            setDark(true)
        }
    }

    return (
        <button className="theme-switcher-btn" onClick={toggleTheme} title="Switch theme">
            {dark ? <FaSun /> : <FaMoon />}
        </button>
    )
}

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="nav-wrapper">
            <div className="nav-top">
                <div className="container">
                    <div className="nav-top-content">
                        <div className="logo">
                            <span className="star">★</span>
                            <span className="brand-text">XIVV.SHOP</span>
                        </div>
                        <div className="search-bar">
                            <FaSearch className="search-icon" />
                            <input type="text" placeholder="Search products..." />
                        </div>
                        <div className="nav-actions">
                            <Link href="/auth/login" className="auth-link">
                                <FaUser />
                                <span>Sign In</span>
                            </Link>
                            <Link href="/cart" className="cart-link">
                                <FaShoppingBag />
                                <span className="cart-count">0</span>
                            </Link>
                            <ThemeSwitcher />
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav-bottom">
                <div className="container">
                    <div className="nav-bottom-content">
                        <button className="mobile-menu-btn" onClick={toggleMenu}>
                            <FaBars />
                        </button>
                        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                            <Link href="/">Home</Link>
                            <Link href="/categories/cycling">Cycling</Link>
                            <Link href="/categories/tourism">Tourism</Link>
                            <Link href="/categories/swimming">Swimming</Link>
                            <Link href="/categories/winter-sports">Winter Sports</Link>
                            <Link href="/about">About Us</Link>
                            <Link href="/news">News</Link>
                            <Link href="/sale" className="sale-link">Sale</Link>
                            <Link href="/contacts">Contacts</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav