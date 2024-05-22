"use client"

import { transformationTypes } from '@/constants'
import { IImage } from '@/lib/database/models/image.model'
import { CldImage } from 'next-cloudinary'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Search from './search'

interface CollectionProps {
    hasSearch: boolean;
    images: IImage[];
    totalPages: number;
    page: number;
}

export default function Collection({ hasSearch = false, images, totalPages = 1, page} : CollectionProps) {

    return (
        <>
            <div className='collection-heading'>
                <h2 className='h2-bold text-dark-600'>Edits</h2>
                { hasSearch && <Search />}
            </div>

            {images.length > 0 ? (
                <div className='collection-list'>
                    {images.map((image, index: number) => (
                        <Card
                            key={index}
                            image={image}
                        />
                    ))}
                </div>
            ) : (
                <div className="collection-empty">
                    <p className="p-20-semibold">Empty List</p>
                </div>
            )}
        </>
    )
}


const Card = ({ image }: { image: IImage }) => {

    return (
        <li>
            <Link
                className='collection-card'
                href={`/transformations/${image?._id}`}
            >
                <CldImage
                    src={image.publicId}
                    alt={image.title}
                    width={image.width}
                    height={image.height}
                    {...image.config}
                    loading='lazy'
                    sizes='(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw'
                    className='h-52 w-full rounded-[10px] object-cover'
                />
            </Link>
            <div className='flex-between'>
                <p className='p-20-semibold mr-3 line-clamp-1 text-dark-600'>
                    {image.title}
                </p>
                <Image
                    src={`/assets/icons/${transformationTypes[image.transformationType as TransformationTypeKey].icon}`}
                    alt={image.title}
                    width={24} height={24}
                />
            </div>
        </li>
    )
}