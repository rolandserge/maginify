"use client"

import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation'
import Image from 'next/image'

  
export default function InsufficientCreditModal() {

    const router = useRouter()

    return (
        <AlertDialog defaultOpen>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="flex-between">
                        <p className='p-16-semibold text-dark-400'>Insufficient Credits</p>
                        <AlertDialogCancel
                            className='borer-0 p-0 hover:bg-transparent'
                            onClick={() => router.push('/profile')}
                        >
                            <Image
                                src="/assets/icons/close.svg"
                                alt='credits coins'
                                height={24} width={24}
                                className='cursor-pointer'
                            />
                        </AlertDialogCancel>
                    </div>

                    <Image
                        src="/assets/images/stacked-coins.png"
                        alt='credit coins'
                        height={122} width={462}
                    />

                    <AlertDialogTitle className='p-24-bold text-dark-600'>
                        Oops.... Looks like you&#39;ve run of free credits !
                    </AlertDialogTitle>

                    <AlertDialogDescription className='p-16-regular py-3'>
                        No worries, though - you can keep enjoying our services by grabbing more credits
                    </AlertDialogDescription>   
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel 
                        className="button w-full bg-purple-100 text-dark-100"
                        onClick={() => router.push("/profile")}
                    >
                        No, cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        className='button w-full bg-purple-gradient bg-cover'
                        onClick={() => router.push("/credits")}
                    >
                        Yes, Proceed
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
      
  )
}
