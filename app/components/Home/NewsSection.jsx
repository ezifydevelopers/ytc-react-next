import { CalendarDays, User } from "lucide-react";

const blogPosts = [
  {
    title: "What Are Unregulated Care Providers? A Guide for Canadian Employers",
    image: "/images/news-1.webp",
    tag: "WHAT IS THE ROLE OF A PEDIATRIC NURSE IN PHILADELPHIA'S CLINICS?",
    author: "YTC Healthcare",
    date: "May 16, 2025",
  },
  {
    title: "How Philadelphia Clinics Can Cut Costs Without Cutting Quality Staff",
    image: "/images/news-2.webp",
    tag: "HOW PHILADELPHIA CLINICS CAN CUT COSTS WITHOUT CUTTING QUALITY STAFF",
    author: "YTC Healthcare",
    date: "May 15, 2025",
  },
  {
    title: "What Is the Role of a Pediatric Nurse in Philadelphia’s Clinics?",
    image: "/images/news-3.webp",
    tag: "WHAT IS THE ROLE OF A PEDIATRIC NURSE IN PHILADELPHIA'S CLINICS?",
    author: "YTC Healthcare",
    date: "May 9, 2025",
  },
  {
    title: "Building a Stronger Care Workforce: How YTC Healthcare Supports Elder Care in Philadelphia",
    image: "/images/news-4.webp",
    tag: "BUILDING A STRONGER CARE WORKFORCE: HOW YTC HEALTHCARE SUPPORTS ELDER CARE IN PHILADELPHIA",
    author: "YTC Healthcare",
    date: "May 1, 2025",
  },
  {
    title: "How to Choose the Right CNA Agency in Philadelphia: A Comprehensive Overview",
    image: "/images/news-5.webp",
    tag: "HOW TO CHOOSE THE RIGHT CNA AGENCY IN PHILADELPHIA: A COMPREHENSIVE OVERVIEW",
    author: "YTC Healthcare",
    date: "April 28, 2025",
  },
  {
    title: "The Importance of Cultural Competency in Healthcare Staffing",
    image: "/images/news-6.webp",
    tag: "THE IMPORTANCE OF CULTURAL COMPETENCY IN HEALTHCARE STAFFING",
    author: "YTC Healthcare",
    date: "April 22, 2025",
  },
];

export default function NewsSection() {
  return (
    <section className="py-16 max-w-[1230px] mx-auto px-4 md:px-8 lg:px-16 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-sm text-gray-500">Read Our Latest News</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Featured News and Insights</h2>
        <p className="text-gray-600">
          Stay updated with the latest healthcare industry news and medical advancements from within the healthcare
          sector and around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="overflow-hidden bg-white transition duration-300">
            <div className="relative h-70">
              <img src={post.image} alt={post.title} className="object-cover w-full h-full rounded-xl" />
            </div>
            <div className="p-4">
              <div className="flex items-center text-black text-l mb-2 space-x-3">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" /> {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" /> {post.date}
                </span>
              </div>
              <p className="text-gray-900 font-bold text-[22px]">{post.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
