"use client";
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import PageHeader from '../components/pageHeader';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaPhone, FaUserMd, FaGraduationCap } from 'react-icons/fa';
import Head from 'next/head';

const Contact = () => {

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .min(2, 'Name must be at least 2 characters'),

        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),

        number: Yup.string()
            .required('Phone number is required')
            .matches(/^[0-9]{10,15}$/, 'Enter a valid phone number (10–15 digits)'),

        Gender: Yup.string()
            .required('Gender is required'),

        message: Yup.string()
            .required('Message is required')
            .min(10, 'Message must be at least 10 characters'),
    });

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const response = await fetch("https://ytchealthcare.com/contactInfo.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            const result = await response.json();

            if (result.status === "success") {
                alert("Message sent successfully!");
                resetForm();
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div>
            <Head>
                <link rel="canonical" href="https://ytchealthcare.com/contact-us/" />
            </Head>
            <Header />
            <div className="px-5 mt-5">
                <PageHeader title="Contact Us" img="/images/ct1.webp" />
            </div>
            <div className='p-5 my-5'>
                <div className="mx-auto p-6 md:px-15 md:pt-15 bg-white border rounded-md">
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Left Column */}
                        <div>
                            <h1 className="text-4xl font-bold text-[#1b1b3a] mb-2">Send Us Your Query!</h1>
                            <p className="text-md font-semibold text-[#68747a] mb-4">
                                We are always ready to help, lets solve staffing shortages together.
                            </p>
                            <p className="text-[#68747a] text-md leading-relaxed mb-6">
                                YTC Healthcare stands prominent in the healthcare staffing industry. Our primary mission is to bridge the gap between healthcare professionals and employers. Need Nurses, PSWs, Cooks/Dietary Aides, Physicians, or other healthcare staffing support? YTC Healthcare offers reliable, cost-effective assistance with 24/7 support and immediate fill. We are here to meet all of your staffing needs.
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-800">
                                {/* Business Address */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#08243c] text-white p-3 rounded-full">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553 4.553a9 9 0 11-12.728 0L9 10m6 0V5a3 3 0 00-6 0v5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1 ">Business Address</h4>
                                        <p className='text-[#68747a]'>2960 Drew Rd #156, Mississauga, ON L4T 0A5, Canada</p>
                                        <p className='text-[#68747a]'>744 South St, Philadelphia, PA 19147</p>
                                    </div>
                                </div>

                                {/* Contact Us */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#08243c] text-white p-3 rounded-full">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2 8l10 6 10-6M2 8v8a2 2 0 002 2h16a2 2 0 002-2V8M2 8l10 6 10-6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Contact Us</h4>
                                        <p className='text-[#68747a]'>Call Us: +1 365 737 4000</p>
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#08243c] text-white p-3 rounded-full">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0l4 4m-4-4l4-4m8-2a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h16z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Email Address</h4>
                                        <p className='text-[#68747a]'>info@ytchealthcare.com</p>
                                    </div>
                                </div>

                                {/* Office Hours */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#08243c] text-white p-3 rounded-full">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Office Hours</h4>
                                        <p className='text-[#68747a]'>9.00 am – 5.30 pm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-7 pt-10 mt-5">
                                <span className="text-gray-600">Follow Us:</span>
                                <a href="https://www.facebook.com/ytchealthcare" target="_blank" className="text-sm text-gray-800 hover:underline">Facebook</a>
                                <a href="https://www.instagram.com/ytchealthcare/" target="_blank" className="text-sm text-gray-800 hover:underline">Instagram</a>
                                <a href="https://www.linkedin.com/company/ytchealthcare/" target="_blank" className="text-sm text-gray-800 hover:underline">LinkedIn</a>
                            </div>
                        </div>

                        {/* Right Column (Form) */}
                        <Formik
                            initialValues={{ name: '', email: '', number: '', message: '', Gender: '' }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className="contact-form-items">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="checkout-form-list group ">
                                            <label>
                                                Your name <span className="required">*</span>
                                            </label>
                                            <Field type="text" name="name" placeholder="Name" className="" />
                                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>
                                        <div className="checkout-form-list group ">
                                            <label>
                                                Your Email <span className="required">*</span>
                                            </label>
                                            <Field type="email" name="email" placeholder="Email" className="" />
                                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>
                                        <div className="checkout-form-list group ">
                                            <label>
                                                Phone Number <span className="required">*</span>
                                            </label>
                                            <Field type="text" name="number" placeholder="Phone Number" />
                                            <ErrorMessage name="number" component="div" className="error text-red-500 text-sm mt-1" />
                                        </div>
                                        <div className="checkout-form-list">
                                            <label>
                                                Gender <span className="required">*</span>
                                            </label>
                                            <Field as="select" name="Gender" className="select">
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </Field>
                                            <ErrorMessage name="Gender" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>

                                    </div>
                                    <div className=" group my-5 ">
                                        <label>
                                            Message <span className="required">*</span>
                                        </label>
                                        <Field as="textarea" name="message" placeholder="Write Message" rows="8" className="w-full px-4 py-3 rounded-md text-black border border-gray-200" />
                                        <ErrorMessage name="message" component="div" className="error text-red-500 text-sm mt-1" />
                                    </div>
                                    <div className="wow fadeInUp" data-wow-delay=".9s">
                                        <button type="submit" className="bg-teal-600 text-white px-6 py-4 rounded-2xl hover:bg-teal-700 transition w-fit" disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>

                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 px-4 md:px-20 py-20 justify-center">

                {/* Card 1 - Contact */}
                <div
                    className="rounded-xl shadow-md text-center p-6 relative md:w-[410px] md:h-[620px]"
                    style={{ backgroundImage: "url('/images/ct2.jpg')", backgroundPosition: "cover", backgroundSize: "100% 100%" }}
                >
                    <div className="relative z-10 flex flex-col items-center justify-end min-h-[500px]">
                        <div className="bg-gray-900 p-5 rounded-lg mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 100"
                                className="w-10 h-10 fill-current text-white"
                            >
                                <path d="M50 10c-22.1 0-40 17.9-40 40 0 8.8 2.8 16.9 7.6 23.5l-5.5 14.5 15.9-4.6c6.3 4.2 13.9 6.6 22 6.6 22.1 0 40-17.9 40-40s-17.9-40-40-40zm21.3 56.6-4.3 4.2c-4.5 4.5-16.4-.4-26.9-11-10.5-10.5-15.2-22.4-11-26.8l4.3-4.3c1.6-1.6 4.3-1.6 6 0l6.3 6.3c2.2 2.2 1.3 6-1.6 6.9-2 .7-3.4 2.9-2.7 4.9 1.1 4.7 7.2 10.5 11.7 11.6 2 .5 4.3-.7 4.9-2.7.9-2.9 4.7-3.8 6.9-1.6l6.3 6.3c1.6 1.7 1.6 4.4.1 6.2z" />
                            </svg>


                        </div>
                        <h3 className="text-2xl mb-2 font-semibold text-[#051B2E]">Get in Touch With Us</h3>
                        <p className="text-md text-[#051B2E]">
                            You can call us Monday to Friday, 9am to 5:30pm and our support team will help you find the best healthcare staffing solution that suits you.
                        </p>
                    </div>
                </div>

                {/* Card 2 - Healthcare Workers */}
                <div
                    className="rounded-xl shadow-md text-center p-6 relative md:w-[410px] md:h-[620px]"
                    style={{ backgroundImage: "url('/images/ct3.jpg')", backgroundPosition: "cover", backgroundSize: "100% 100%" }}
                >
                    <div className="relative z-10 flex flex-col items-center justify-end min-h-[500px]">
                        <div className="bg-gray-900 p-5 rounded-lg mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-10 h-10 fill-current text-white"
                            >
                                <path d="M488.5,119.5c-4.3-4.3-10.7-6.4-14.9-2.1l-110.9,78.9v-89.6c0-12.8-8.5-21.3-21.3-21.3H42.7c-12.8,0-21.3,8.5-21.3,21.3v298.7c0,12.8,8.5,21.3,21.3,21.3h298.7c12.8,0,21.3-8.5,21.3-21.3v-89.6l110.9,76.8c2.1,2.1,4.3,2.1,6.4,2.1c6.4,0,10.7-4.3,10.7-10.7V128C490.7,125.9,490.7,123.7,488.5,119.5z M112.6,236.8c31.1-0.2,56.2-25,56.1-55.3c0-1.1,0-2.3-0.1-3.4l46.3-0.2c0,1.1,0.1,2.3,0.1,3.4c0.3,55.9-45.4,101.5-102.1,101.8L112.6,236.8z M269.9,274.2c-31.1,0-56.3,24.7-56.3,55c0,1.1,0,2.3,0.1,3.4h-46.3c0-1.1-0.1-2.3-0.1-3.4c0-55.9,45.9-101.3,102.6-101.3V274.2z" />
                            </svg>

                        </div>
                        <h3 className="text-2xl mb-2 font-semibold text-[#051B2E]">HealthCare Workers</h3>
                        <p className="text-md text-[#051B2E]">
                            Your Talent Consultancy Healthcare bridges the gap between healthcare facilities and medical professionals.
                        </p>
                    </div>
                </div>

                {/* Card 3 - About YTC */}
                <div
                    className="rounded-xl shadow-md text-center p-6 relative md:w-[410px] md:h-[620px]"
                    style={{ backgroundImage: "url('/images/ct4.jpg')", backgroundPosition: "cover", backgroundSize: "100% 100%" }}
                >
                    <div className="relative z-10 flex flex-col items-center justify-end min-h-[500px]">
                        <div className="bg-gray-900 p-5 rounded-lg mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1253.96 1825.27"
                                className="w-10 h-10 fill-white"
                            >
                                <path d="M976.89,1100.74c-19,19.34-39.55,75.67-54.81,102.14-46.68,80.98-104.89,92.33-187.72,52.51-38.32-18.42-85.34-56.2-129.02-42.46-62.22,19.57-114.64,77.28-187.28,62.98-73.44-14.46-95.77-102-128.54-157.37-4-6.76-8.15-14.13-14.16-19.32v725.96l325.25-327.01c15.51-12.75,35.19-13.23,51.51-1.5,95.76,95.55,190.86,191.73,285.75,288.04,11.04,11.2,27.27,29.99,38.99,38.97,1.01.78,1.26,1.93,3,1.5v-725.96c-1.68-.37-2.01.54-2.97,1.52Z" />
                                <path d="M1242.49,570.93c-33.49-45.78-94.19-78.32-112.45-135.46-18.09-56.63,5.76-111.85,9.7-167.72.95-13.41,2.08-33.62-9.07-42.9-21.92-18.23-110.26-22.7-143.81-32.09-89.66-25.09-96.2-93.01-137.73-162.16-9.45-15.72-19.81-32.68-40.54-30.22-27.91,3.32-80.7,38-109.17,50.75-94.02,42.12-134.51,1.97-215.18-36.38-13.25-6.29-35.65-17.21-50.27-14.25-14.45,2.93-30.59,33.32-37.22,45.75-36.37,68.24-48.09,124.9-132.38,147.51-36.58,9.82-108.82,10.95-137.23,28.68-18.3,11.43-12.88,42.51-10.5,61.15,11.09,86.91,36.73,137.98-30.12,211.19-20.98,22.97-78.43,68.9-85.67,96.26-4.26,16.07,8.38,31.58,18.18,43.22,34.96,41.51,88.5,73.8,105.7,128.21,15.51,49.06-1.91,101.42-8.09,150.42-4.49,35.57-9.27,57.39,29.81,68.83,55.12,16.14,118.62,8.3,168.2,42.69,39.1,27.12,55.98,74.44,76.92,115.02,8.62,16.73,26.19,55.4,47.2,56.78,24.95,1.65,88.81-39.15,115.04-50.85,97.52-43.53,136.71-.63,219.84,37.71,15.05,6.94,38.92,19.3,54.26,8.58,25.36-17.72,53.31-96.03,73.6-126.34,51.13-76.4,115.85-62.77,194.28-80.58,14.46-3.28,36.15-7.91,41.74-23.23,10.52-28.86-11.95-104.62-13.81-139.73-5.03-94.72,48.68-118.86,104-179,22.75-24.74,37.75-40.44,14.77-71.84ZM316.7,800.36c-155.52-230.64.68-548.19,277.23-563.8,302.48-17.08,494.65,319.58,320.2,569.39-145.39,208.21-455.64,204.69-597.43-5.59Z" />
                            </svg>

                        </div>
                        <h3 className="text-2xl mb-2 font-semibold text-[#051B2E]">About YTC Healthcare</h3>
                        <p className="text-md text-[#051B2E]">
                            Your Talent Consultancy Healthcare has been proudly providing healthcare staffing solutions in the healthcare industry.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;