'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ post }) {
    if (!post) return null;

    return (
        <div className="flex flex-col lg:flex-row gap-6 bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 max-w-[1295px] mx-auto p-4 sm:p-6">
            {/* Left Side: Image */}
            <div className="w-full lg:w-[41%] relative">
                <Image
                    src={post.image}
                    alt={post.title || "Blog post image"}
                    width={502}
                    height={398}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-[56%] flex flex-col justify-between">
                <div>
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#2D9D8F] mb-4">
                        <div className="flex items-center gap-2">
                            <span className="border border-[#E5E7EB] rounded-full p-[6px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#359C8F" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                            </span>
                            <span className="text-[15px]">By {post.author || "YTC Healthcare"}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="border border-[#E5E7EB] rounded-full p-[6px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#359C8F" className="bi bi-tag-fill" viewBox="0 0 16 16">
                                    <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                </svg>
                            </span>
                            <span className="text-[15px]">{post.date || new Date().toLocaleDateString()}</span>
                        </div>
                    </div>

                    {/* Title - Now as a Link */}
                    <Link href={`/blog/${post.slug || 'post'}`} className="block">
                        <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#359C8F] border-t pt-6 mt-4 mb-4 border-[#D3D5D6] leading-snug hover:underline">
                            {post.title || "Fill Healthcare Staffing Gaps with Expert Medical Professionals"}
                        </h2>
                    </Link>

                    {/* Content Preview */}
                    <p className="text-gray-700 text-sm leading-relaxed">
                        {post.content?.[0]?.text ||
                            "Hospitals, clinics, and long-term care facilities face persistent staffing shortages. Understaffed healthcare facilities can compromise patient care..."}
                    </p>
                </div>

                {/* Button */}
                <div className="mt-6">
                    <Link href={`/blog/${post.slug || 'post'}`} passHref>
                        <button className="bg-[#359C8F] cursor-pointer text-white font-semibold px-8 py-4 rounded-xl hover:bg-teal-700 transition-all text-sm sm:text-base">
                            Continue Reading →
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}