"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import blogs from "@/app/components/blogs.json";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import BlogPageHeader from "@/app/components/blogs/BlogPageHeader";
import RelativePosts from "@/app/components/blogs/RelativePosts";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import Head from 'next/head';

const PostComponent = () => {
  const params = useParams();
  const slug = params.slug;

  const [post, setPost] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  useEffect(() => {
    const content = blogs[slug];
    if (!content) {
      console.warn("Content not found for slug:", slug);
    }
    setPost(content);
  }, [slug]);

  if (!post) {
    return <div className="text-center text-red-600">Service Not Found</div>;
  }

  

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const renderContent = (content) => {
    if (typeof content === 'string') return content;
    if (content?.text) return content.text;
    if (content?.title) return content.title;
    return JSON.stringify(content);
  };

  return (
    <div className="single-post">
      <Head>
        <link rel="canonical" href={`https://ytchealthcare.com/blog/${slug}`} />
      </Head>
      <Header />
      <div className="mx-auto px-8 py-8">
        <div className="mt-[0px]">
          <div className="mb-8">
            <BlogPageHeader src="/images/post-1.webp" title={post.title || ''} />
          </div>

          <div className="flex flex-wrap justify-between gap-8 max-w-[1360px] mx-auto ">
            <div className="w-full md:w-[840px]">
              <div className="mb-5">
                <div className="flex gap-14 items-center text-[16px] text-[#051B2E]">
                  <span className="flex gap-2">
                    <svg className="w-[23px] h-[23px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                      <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8 .4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" />
                    </svg>
                    {post.author}
                  </span>
                  <span className="flex gap-2">
                    <svg className="w-[23px] h-[23px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z" />
                    </svg>
                    {post.date}
                  </span>
                </div>
              </div>

              <article className="prose lg:prose-xl max-w-none">
                {post.content.map((section, index) => (
                  <section key={index} className="mb-8">
                    {section.section && (
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        {renderContent(section.section)}
                      </h2>
                    )}

                    {section.image && (
                      <Image
                        src={section.image}
                        width={840}
                        height={517}
                        alt={section.imageAlt || `Section ${index + 1} image`}
                        className="my-4"
                      />
                    )}

                    {section.text && (
                      <p className="text-[15px] text-[#68747A]">
                        {renderContent(section.text)}
                      </p>
                    )}

                    {section.subsections?.map((subsection, subIndex) => (
                      <div key={subIndex} className="mt-4">
                        {subsection.section && (
                          <p className="text-[15px] text-[#68747A] font-medium">
                            {renderContent(subsection.section)}
                          </p>
                        )}

                        {subsection.text && (
                          <p className="text-[15px] text-[#68747A] mt-2">
                            {renderContent(subsection.text)}
                          </p>
                        )}

                        {subsection.image && (
                          <Image
                            src={subsection.image}
                            width={840}
                            height={517}
                            alt={subsection.imageAlt || `Subsection ${subIndex + 1} image`}
                            className="md:p-8 my-4"
                          />
                        )}

                        {subsection.title && (
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            {renderContent(subsection.title)}
                          </h2>
                        )}

                        {subsection.description && (
                          <p className="text-[15px] text-[#68747A] mt-2">
                            {renderContent(subsection.description)}
                          </p>
                        )}

                        {subsection.description && (
                          <p className="text-[15px] text-[#68747A] mt-2">
                            {renderContent(subsection.text)}
                          </p>
                        )}

                        {subsection.list_title && (
                          <div className="my-4">
                            <p className="text-[15px] text-[#68747A] font-medium">
                              {renderContent(subsection.list_title)}
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                              {subsection.list_items?.map((item, itemIndex) => (
                                <li className="text-[15px] text-[#68747A]" key={itemIndex}>
                                  {renderContent(item)}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {subsection.list_title && (
                          <div className="my-4">
                            <p className="text-[15px] text-[#68747A] font-medium">
                              {renderContent(subsection.list_title)}
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                              {subsection.list_items?.map((item, itemIndex) => (
                                <li className="text-[15px] text-[#68747A]" key={itemIndex}>
                                  {renderContent(item)}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {subsection.question && (
                          <div className="border border-[#DADEE2] px-8 py-5 rounded-2xl mt-8">
                            <h4
                              className="text-[20px] font-semibold text-[#202838] cursor-pointer flex justify-between items-center"
                              onClick={() => toggleQuestion(subIndex)}
                            >
                              {subsection.question}
                              <span className="text-2xl font-normal">
                                {activeQuestion === subIndex ? '−' : '+'}
                              </span>
                            </h4>
                            <AnimatePresence>
                              {activeQuestion === subIndex && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <p className="text-[15px] text-[#68747A] py-2">
                                    {subsection.answer}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )}

                        {subsection.quote && (
                          <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-[15px] text-[#68747A]">
                            {renderContent(subsection.quote)}
                          </blockquote>
                        )}
                      </div>
                    ))}
                  </section>
                ))}



                {post.citations && post.citations.length > 0 && (
                  <div className="text-sm text-gray-500 mt-12 pt-4 border-t">
                    {post.citations.map((citation, index) => (
                      <p key={index}>
                        {index + 1}. {citation.source}, {citation.year}
                        {citation.url && (
                          <a
                            href={citation.url}
                            className="ml-2 text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            [source]
                          </a>
                        )}
                      </p>
                    ))}
                  </div>
                )}
              </article>
            </div>

            <div className="w-full md:w-[390px]">
              <RelativePosts />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostComponent;