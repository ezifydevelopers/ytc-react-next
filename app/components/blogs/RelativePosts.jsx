"use client"
import { useEffect, useState } from "react"
import blogs from "@/app/components/blogs.json"
import Image from "next/image"
import Link from "next/link"

const RelativePosts = () => {
    const [relativePostData, setRelativePostData] = useState([])

    useEffect(() => {
        const postsArray = Object.entries(blogs)
            .sort((a, b) => new Date(b[1].date) - new Date(a[1].date))
            .slice(0, 3)
            .map(([slug, post]) => ({ ...post, slug }))
        
        setRelativePostData(postsArray)
    }, [])

    return (
        <div className="w-full md:w-[390px] h-[510px] bg-white rounded-2xl shadow-sm p-3 md border border-[#DADEE2]">
            <h2 className="text-[22px] font-bold text-white mb-6 bg-[#359C8F] rounded-xl py-[18] px-6">Latest Posts</h2>
            <div className="space-y-6">
                <div className="border-b border-gray-100 pb-6 px-6 last:border-0 last:pb-0 ">
                    {relativePostData.map((item, index) => {
                        return (
                            <div key={index} className={`flex py-3 ${index < relativePostData.length - 1 ? 'border-b border-[#D7D7D7]' : ''}`}>
                                <div className="w-[30%]">
                                    <Image 
                                        src={item.image} 
                                        width={76} 
                                        height={82} 
                                        className="w-[76px] h-[82px] rounded-xl" 
                                        alt={item.title}
                                    />
                                </div>
                                <div className="w-[70%]">
                                    <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                                    <Link 
                                        href={`/blog/${item.slug}`} 
                                        passHref 
                                        className="text-[17px] hover:text-[#359C8F] transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RelativePosts