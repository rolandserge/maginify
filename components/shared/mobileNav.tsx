"use client"

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/constants'
import { Button } from '../ui/button'
  

export default function MobileNav() {

    const pathname = usePathname()
    
    return (
        <header className='header'>
            <Link href="/" className='flex items-center gap-2 md:py-2'>
                <Image
                    src="/assets/images/logo-text.svg"
                    width={180} height={28}
                    alt='maginify logo'
                />
            </Link>

            <nav className='flex gap-2'>
                <SignedIn>
                    <UserButton afterSignOutUrl='/' />

                    <Sheet>
                        <SheetTrigger>
                            <Image
                             src="/assets/icons/menu.svg"
                             width={32} height={32}
                             alt='menu illustration'
                             className='cursor-pointer'
                            />
                        </SheetTrigger>
                        <SheetContent className='sheet-content sm:w-64'>
                            <>
                                <Image
                                    src="/assets/images/logo-text.svg"
                                    width={152} height={23}
                                    alt='maginify logo'
                                />

                                <ul className='hearder-nav_elements'>
                                    {navLinks.slice(0, 6).map((link) => {
                                        const isActive = link.route === pathname

                                        return (
                                            <li 
                                                key={link.route}
                                                className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                                            >
                                                <Link 
                                                    className='sidebar-link cursor-pointer' 
                                                    href={link.route}
                                                >
                                                    <Image
                                                        src={link.icon}
                                                        width={24} height={24}
                                                        alt='logo link'
                                                    />
                                                    {link.label}
                                                </Link>
                                            </li>
                                        )
                                    }
                                    )}
                                </ul>
                            </>
                        </SheetContent>
                    </Sheet>
                </SignedIn>

                <SignedOut>
                        <Button asChild className='button bg-purple-gradient bg-cover'>
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </SignedOut>
            </nav>
        </header>
    )
}
