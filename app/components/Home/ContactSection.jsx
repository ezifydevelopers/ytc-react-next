'use client'
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
};

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    service: Yup.string().required('Please select a service'),
    message: Yup.string().required('Message is required'),
});

export default function ContactSection() {

    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm(); // optional
    };

    return (
        <section className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-xl my-10 mb-5 md:mx-12 mx-5">
            {/* Left Side - Image with Overlay */}
            <div className="relative hidden lg:block md:w-[61.11%] w-[100%] border">
                <Image
                    src="/images/contact-section.webp"
                    alt="Contact Banner"
                    className="object-cover w-full md:h-full h-[600px]"
                    fill
                />
                <div className="absolute inset-0 bg-opacity-50 text-white p-10 flex flex-col justify-end">
                    <div>
                        <p className="text-[20px]">Take care of your health and that of your family today</p>
                        <h2 className="md:text-[45px] text-[30px] border-b border-[#6E7377] pb-7 font-bold mt-2 leading-snug">Exclusive Rewards Await with<br />Your First Staffing Hire.</h2>
                    </div>

                    <div className="mt-5 flex flex-col md:flex-row justify-between md:items-center">
                        <div className="space-y-2 text-sm">
                            <h3 className="text-lg font-semibold mb-2">Business Address</h3>
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-1" />
                                <p>2960 Drew Rd #156, Mississauga, ON L4T 0A5, Canada</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-1" />
                                <p>744 South St, Philadelphia, PA 19147, United States</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    <p>info@ytchealthcare.com</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    <p>+1 365 737 4000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-[#062d4d] lg:w-[38.89%] w-[100%] text-white p-10 flex flex-col justify-center">
                <div className="mx-auto w-full text-center">
                    <h2 className="text-2xl font-bold mb-2">We Are Ready When You Are!</h2>
                    <p className="text-sm text-white mb-6">
                        By submitting this form you are agreeing to our Privacy Policy. We guarantee not to disclose your information.
                    </p>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form className="space-y-4 flex flex-wrap gap-4">
                            {/* Name */}
                            <div className="md:w-[48%] w-full">
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="w-full h-[60px] outline-0 px-4 py-3 rounded-md text-black bg-white"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Email */}
                            <div className="md:w-[48%] w-full">
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full h-[60px] outline-0 px-4 py-3 rounded-md text-black bg-white"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Phone */}
                            <div className="md:w-[48%] w-full">
                                <Field
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    className="w-full h-[60px] outline-0 px-4 py-3 rounded-md text-black bg-white"
                                />
                                <ErrorMessage
                                    name="phone"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Service */}
                            <div className="md:w-[48%] w-full">
                                <Field
                                    as="select"
                                    name="service"
                                    className="w-full h-[60px] outline-0 px-4 py-3 rounded-md text-black bg-white"
                                >
                                    <option value="">Select Service</option>
                                    <option value="Staffing">Staffing</option>
                                    <option value="Consulting">Consulting</option>
                                </Field>
                                <ErrorMessage
                                    name="service"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Message */}
                            <div className="w-full">
                                <Field
                                    as="textarea"
                                    name="message"
                                    rows="8"
                                    placeholder="Message"
                                    className="w-full outline-0 px-4 py-3 rounded-md text-black bg-white"
                                />
                                <ErrorMessage
                                    name="message"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Submit */}
                            <div className="w-full">
                                <button
                                    type="submit"
                                    className="mt-4 bg-[#359c8f] hover:bg-teal-600 px-14 py-3 rounded-md font-semibold text-white"
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </section>
    );
}
