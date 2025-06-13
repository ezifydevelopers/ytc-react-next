'use client';

import { CalendarDays, User } from "lucide-react";
import blogs from "@/app/components/blogs.json";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NewsSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const allPosts = Object.values(blogs).map(post => {
      if (post.image) {
        return { ...post, image: post.image };
      }

      const sectionWithImage = post.content?.find(section => section.image);
      if (sectionWithImage) {
        return { ...post, image: sectionWithImage.image };
      }

      for (const section of post.content || []) {
        const subsectionWithImage = section.subsections?.find(sub => sub.image);
        if (subsectionWithImage) {
          return { ...post, image: subsectionWithImage.image };
        }
      }

      return { ...post, image: "/images/news-1.webp" };
    });

    setPosts(allPosts);
  }, []);

  if (posts.length === 0) {
    return <div className="text-center py-8">Loading posts...</div>;
  }

  return (
    <section className="md:py-16 max-w-[1360px] mx-auto px-4 md:px-8 lg:px-16 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-sm text-gray-500">Read Our Latest News</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Featured News and Insights
        </h2>
        <p className="text-gray-600">
          Stay updated with the latest healthcare industry news and medical advancements from within the healthcare
          sector and around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {posts.slice(0, 3).map((post, index) => {
          const slug = Object.keys(blogs).find(key => blogs[key].id === post.id);

          return (
            <Link href={`/blog/${slug}`} passHref>
              <div key={index} className="overflow-hidden bg-white transition duration-300">
                <div className="">
                  <Image
                    src={post.image}
                    alt={post.title || "YTC Healthcare"}
                    width={292}
                    height={370}
                    className="object-cover rounded-xl w-full h-full"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-3">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4 text-[#359C8F]" /> {post.author || "YTC Healthcare"}
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4 text-[#359C8F]" /> {post.date || "No date"}
                    </span>
                  </div>
                  {/* <Link href={`/blog/${slug}`} passHref>
                    <h3 className="text-gray-900 font-semibold text-lg leading-tight line-clamp-2 mb-2">
                      {post.title}
                    </h3>
                  </Link> */}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}


