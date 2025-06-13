"use client";
import Image from "next/image";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function SalaryGuideSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdfs/pdf-salary-guide.pdf";
    link.download = "Healthcare-Salary-Guide-2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("https://ytchealthcare.com/salaryGuideForm.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (result.status === "success") {
        handleDownload();
        resetForm();
        setIsOpen(false);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }


  };

  return (
    <section className="bg-white pt-4 md:pb-16 px-6 md:px-16 relative">
      <div className="salary-guide-inner max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="lg:mt-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-teal-800 leading-tight mb-4">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-800 text-md">{item}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsOpen(true)}
            className="bg-teal-700 cursor-pointer hover:bg-teal-800 text-white font-semibold py-3 px-6 rounded-md text-lg shadow-md transition duration-300"
          >
            Get Your Free Digital Copy Now.
          </button>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/Salary-Guide-banner-06.webp"
            alt="2025 Healthcare Salary Guide"
            className="w-full rounded-md"
            width={750}
            height={50}
          />
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 px-4 bg-black/50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold text-teal-800 mb-4">Get Your Free Copy</h3>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <Field
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-teal-700 text-white py-2 rounded-md hover:bg-teal-800 transition"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit & Download PDF"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </section>
  );
}
