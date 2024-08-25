import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()
    return (
        <>
            <nav style={{ padding: '1rem', zIndex: '1000' }}>
                <ul style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '5rem', backgroundColor: 'green', padding: '0.8rem', borderRadius: '15px' }}>
                    <Link legacyBehavior href='/Home'><a>Home</a></Link>
                    <Link legacyBehavior href="/about"><a>about</a></Link>
                    <Link legacyBehavior href="/contact"><a>contact</a></Link>
                    <Link legacyBehavior href="/products"><a>products</a></Link>
                    <Link legacyBehavior scroll href="/blog"><a>blog</a></Link>
                    {
                        !session && (
                            <Link legacyBehavior scroll href="/api/auth/signin">
                            
                                <a onClick={(e) => {
                                    e.preventDefault()
                                    signIn('github')
                                }}>Sign In</a></Link>
                        )
                    }
                    {
                        session && (
                            <Link legacyBehavior scroll href="/api/auth/signout">
                            
                                <a onClick={(e) => {
                                    e.preventDefault()
                                    signOut()
                                }}>Sign Out</a></Link>
                        )
                    }
                </ul>
            </nav>

        </>
    )
}

export default Navbar
