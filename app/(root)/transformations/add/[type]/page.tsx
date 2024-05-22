import Header from '@/components/shared/header'
import TransformationForm from '@/components/transformation/form'
import { transformationTypes } from '@/constants'
import { createUser, getUserById } from '@/lib/actions/user.action'
import { useAuth } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function AddTransformationTypePage({ params : { type }} : SearchParamProps) {

    const transformation = transformationTypes[type]
    const { userId } = auth()
    if(!userId) redirect('/sign-in')
        
    const user = await getUserById(userId)

    return (
        <>
            <Header
                title={transformation?.title}
                subtitle={transformation?.subTitle}
            />
            <section className='mt-10'>
                <TransformationForm 
                    action='Add'
                    userId={user?._id}
                    type={transformation?.type as TransformationTypeKey}
                    creditBalance={user?.creditBalance}
                />
            </section>
        </>
    )
}
