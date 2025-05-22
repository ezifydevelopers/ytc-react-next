export default function SalaryGuideSection() {
    return (
      <section className="bg-white pt-4 pb-16 px-6 md:px-16">
        <div className="salary-guide-inner max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="mt-24">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-800 leading-tight mb-4">
              HEALTHCARE<br />
              SALARY GUIDE FOR<br />
              CANADA & THE U.S.
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Find out what to pay and how to hire the best healthcare
              and social services talent for 2025.
            </p>
  
            <ul className="space-y-3 mb-6">
              {[
                "Salary ranges for key healthcare roles",
                "In-demand healthcare jobs to watch in 2025",
                "Market trends across Canada and the U.S.",
                "Made for HR teams, recruiters, and healthcare managers",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-800 text-md">{item}</span>
                </li>
              ))}
            </ul>
  
            <button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-6 rounded-md text-lg shadow-md transition duration-300">
              Get Your Free Digital Copy Now.
            </button>
          </div>
  
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/images/Salary-Guide-banner-06.webp" 
              alt="2025 Healthcare Salary Guide"
            //   className="w-full max-w-xl shadow-xl rounded-md"
            />
          </div>
        </div>
      </section>
    );
  }
  