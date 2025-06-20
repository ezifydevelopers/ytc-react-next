import blogs from "@/app/components/blogs.json";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import BlogPageHeader from "@/app/components/blogs/BlogPageHeader";
import RelativePosts from "@/app/components/blogs/RelativePosts";
import Image from "next/image";
import Link from "next/link";
import Faqs from "@/app/components/Services/servicesFaqs";

export async function generateStaticParams() {
  const slugs = Object.keys(blogs);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    alternates: {
      canonical: `https://ytchealthcare.com/blog/${slug}`,
    },
  };
}

const PostComponent = async ({ params }) => {
  const awaitedParams = await params;
  const slug = awaitedParams.slug;
  const content = blogs[slug];

  if (!content) {
    return (
      <div className="single-post">
        <Header />
        <div className="mx-auto px-8 py-8 text-center">
          <h1>Content not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  if (slug === 'tags') {
    return (
      <div className="single-post">
        <Header />
        <div className="mx-auto py-8">
          <h1 className="text-2xl font-bold mb-8">Blog Tags</h1>
          <div className="flex flex-wrap gap-2">
            {Array.isArray(content) ? (
              content.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-4 py-2 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))
            ) : (
              <p>No tags available</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const renderContent = (content) => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    if (content?.text) return content.text;
    if (content?.title) return content.title;
    return JSON.stringify(content);
  };

  return (
    <div className="single-post">
      <Header />
      <div className="mx-auto px-1 py-8">
        <div className="mt-[0px]">
          <div className="mb-8">
            <BlogPageHeader
              src="/images/post-1.webp"
              title={content?.title || 'Untitled Post'}
            />
          </div>

          <div className="flex flex-wrap px-8 justify-between gap-8 max-w-[1360px] mx-auto">
            <div className="w-full md:w-[840px]">
              {content.author && content.date && (
                <div className="mb-5">
                  <div className="flex gap-14 items-center text-[16px] text-[#051B2E]">
                    <span className="flex gap-2">
                      <svg className="w-[23px] h-[23px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8 .4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" />
                      </svg>
                      {content.author}
                    </span>
                    <span className="flex gap-2">
                      <svg className="w-[23px] h-[23px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z" />
                      </svg>
                      {content.date}
                    </span>
                  </div>
                </div>
              )}

              <article className="prose lg:prose-xl max-w-none">
                {Array.isArray(content.content) && content.content.map((section, index) => (
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
                      <p className="text-[15px] text-[#68747A]" dangerouslySetInnerHTML={{ __html: renderContent(section.text) }} />
                    )}
                    {section.table && (
                      <table className="min-w-full border border-gray-300">
                        <thead className="bg-gray-200">
                          <tr>
                            <th className="text-left px-4 py-2 border">Phase</th>
                            <th className="text-left px-4 py-2 border">Common Staffing Challenges</th>
                            <th className="text-left px-4 py-2 border">Impact on Care Homes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-100">
                              <td className="px-4 py-2 border">{row.phase}</td>
                              <td className="px-4 py-2 border">{row.commonStaffingChallenges}</td>
                              <td className="px-4 py-2 border">{row.impactOnCareHomes}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                    {Array.isArray(section.subsections) && section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="mt-4">
                        {subsection.section && (
                          <p className="text-[15px] text-[#68747A] font-medium" dangerouslySetInnerHTML={{ __html: renderContent(subsection.section) }} />
                        )}
                        {subsection.title && (
                          <h3 className="text-2xl font-bold text-[#68747A] font-medium">
                            {renderContent(subsection.title)}
                          </h3>
                        )}
                        {subsection.text && (
                          <div className="text-[16px] text-[#68747A] mt-2" dangerouslySetInnerHTML={{ __html: renderContent(subsection.text) }} />
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

                        {subsection.list_title && Array.isArray(subsection.list_items) && (
                          <div className="my-4">
                            <p className="text-[15px] text-[#68747A] font-medium">
                              {renderContent(subsection.list_title)}
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                              {subsection.list_items.map((item, itemIndex) => (
                                <li className="text-[15px] text-[#68747A]" key={itemIndex}>
                                  {renderContent(item)}
                                </li>
                              ))}
                            </ul>
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

                {content.subsections && (
                  <Faqs data={content.subsections} />
                )}

                {Array.isArray(content.citations) && content.citations.length > 0 && (
                  <div className="text-sm text-gray-500 mt-12 pt-4 border-t">
                    {content.citations.map((citation, index) => (
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