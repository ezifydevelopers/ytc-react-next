import BlogPageHeader from "../components/blogs/BlogPageHeader";
import Footer from "../components/footer";
import Header from "../components/header";
import JobDetailCard from "../components/JobDetailCard";
import Head from 'next/head';

export default function JobDetail() {
    return (
        <div className="">
            <Head>
                <link rel="canonical" href="https://ytchealthcare.com/job-openings/" />
            </Head>
            <Header />
            <div className="mt-[30px]">
                <BlogPageHeader title="Jobs Opening" src="/images/about-us.jpg" />
            </div>
            <div className="px-8">
                <JobDetailCard />
                </div>
            <Footer />
        </div>
    );
}
