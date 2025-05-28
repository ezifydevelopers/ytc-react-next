import BlogPageHeader from "../components/blogs/BlogPageHeader";
import Footer from "../components/footer";
import Header from "../components/header";
import JobDetailCard from "../components/JobDetailCard";

export default function JobDetail() {
    return (
        <div className="">
            <Header />
            <div className="mt-[30px]">
                <BlogPageHeader title="Jobs Opening" src="/images/about-us.jpg" />
            </div>
            <div className="px-8"><JobDetailCard /></div>
            <Footer />
        </div>
    );
}
