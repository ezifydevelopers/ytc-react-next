'use client'
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ContactForm from "../ui/ContactForm";

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

    const handleSubmit = async(values, { resetForm }) => {
        try {
            const response = await fetch("https://ytchealthcare.com/messageForm.php", {
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
                <ContactForm />
            </div>
            
        </section>
    );
}
