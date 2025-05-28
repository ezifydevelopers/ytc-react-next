import BlogCard from "../components/blogs/BlogCard";
import Footer from "../components/footer";
import Header from "../components/header";
import PageHeader from "../components/pageHeader";
import blogs from "@/app/components/blogs.json"


export default function Blog() {

    const blogPosts = Object.entries(blogs).map(([slug, postData]) => ({
        slug,
        ...postData
    }));

    return (
        <div className="">
            <Header />
            <div className="mt-5 px-7">
                <PageHeader img="/images/blog-bg.webp" title="Blogs" description="Here, you’ll discover all the insights into YTC Healthcare Staffing Services and explore career opportunities in healthcare across the industry!" />
            </div>
            <div className="flex flex-col mt-20 mb-20 md:mb-40 gap-16 px-7">
                {blogPosts.map(post => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
            <Footer />
        </div>
    )
}