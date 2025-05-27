'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ post }) {
    if (!post) return null;

    return (
        <div className="flex justify-between healthcarebox p-6 flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 max-w-[1295px] mx-auto">
            {/* Left Side: Image with Overlay */}
            <div className="md:w-[41%] relative">
                <div className="">
                    <Image
                        src={post.image}
                        alt={post.title || "Blog post image"}
                        width={502}
                        height={398}
                        className=" rounded-2xl"
                    />
                </div>
            </div>

            {/* Right Side: Content */}
            <div className="md:w-[56%] p-6 flex flex-col">
                <div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2 gap-6">
                        <p className='flex items-center gap-4 text-[#2D9D8F] text-[15px]'> <span className='border border-[#E5E7EB] rounded-full p-[5px]'><svg className='bi bi-person-fill' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#359C8F" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg></span> By {post.author || "YTC Healthcare"}</p>
                        <p className='flex items-center gap-4 text-[#2D9D8F] text-[15px]'><span className='border border-[#E5E7EB] rounded-full p-[7px]'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#359C8F" className="bi bi-tag-fill" viewBox="0 0 16 16">
                            <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        </svg></span> {post.date || new Date().toLocaleDateString()}</p>
                    </div>

                    <h2 className="text-[26px] font-semibold text-[#359C8F] mb-3 border-t pt-9 mt-5 mb-6 border-[#D3D5D6]">
                        {post.title || "Fill Healthcare Staffing Gaps with Expert Medical Professionals"}
                    </h2>

                    <p className="text-gray-700 text-sm">
                        {post.content?.[0]?.text ||
                            "Hospitals, clinics, and long-term care facilities face persistent staffing shortages. Understaffed healthcare facilities can compromise patient care..."}
                    </p>
                </div>

                <div className="mt-4">
                    <Link href={`/blog/${post.slug || 'post'}`} passHref>
                        <button className="bg-[#359C8F] text-white font-semibold mt-2 px-6 py-4 rounded-xl hover:bg-teal-700 transition-all">
                            Continue Reading →
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}