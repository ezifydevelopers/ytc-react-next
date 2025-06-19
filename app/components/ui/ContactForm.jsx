'use client';
import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RecaptchaWrapper = dynamic(() => import('./RecaptchaWrapper'), { ssr: false });

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

const ContactForm = ({ className, onSuccess }) => {

    const handleSubmit = async (values, { resetForm }) => {
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
                if (onSuccess) {
                    onSuccess(); // Notify parent (SalaryGuide) that form is submitted
                }
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again later.");
        }
    };

    const recaptchaRef = useRef();

    // const handleSubmit = async (values, { resetForm }) => {
    //     try {
    //         if (!recaptchaRef.current) {
    //             alert("reCAPTCHA not ready. Please try again.");
    //             return;
    //         }
    
    //         // Get the captcha value from the visible checkbox
    //         const token = recaptchaRef.current.getValue();
    
    //         if (!token) {
    //             alert("Please complete the reCAPTCHA.");
    //             return;
    //         }
    
    //         // Step 1: Verify reCAPTCHA token on your backend
    //         const verifyResponse = await fetch('/api/verify-recaptcha', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ token }),
    //         });
    
    //         if (!verifyResponse.ok) {
    //             const text = await verifyResponse.text();
    //             console.error("reCAPTCHA verification failed:", text);
    //             throw new Error("Verification request failed");
    //         }
    
    //         const verifyResult = await verifyResponse.json();
    
    //         if (!verifyResult.success) {
    //             console.error("reCAPTCHA verifyResult:", verifyResult);
    //             alert("reCAPTCHA verification failed. Please try again.");
    //             return;
    //         }
    
    //         // Step 2: Send form data
    //         const payload = {
    //             ...values,
    //             'g-recaptcha-response': token,
    //         };
    
    //         const response = await fetch('https://ytchealthcare.com/messageForm.php', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(payload),
    //         });
    
    //         if (!response.ok) {
    //             const text = await response.text();
    //             console.error("PHP server error:", text);
    //             throw new Error("PHP server responded with error");
    //         }
    
    //         const result = await response.json();
    
    //         if (result.status === 'success') {
    //             alert('Message sent successfully!');
    //             resetForm();
    //             recaptchaRef.current.reset(); // reset the checkbox
    //             if (onSuccess) onSuccess();
    //         } else {
    //             console.error("Form submission failed:", result);
    //             alert('Failed to send message. Please try again.');
    //         }
    //     } catch (error) {
    //         console.error("Catch block error:", error);
    //         alert('An error occurred. Please try again later.');
    //     }
    // };

    return (
        <div>
            {/* Right Side - Form */}
            <div className={`${className} mx-auto w-full text-center `}>
                <p className="text-2xl font-bold mb-2">We Are Ready When You Are!</p>
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
                                <option value="Lookingforhealthcarestaff">Looking for healthcare staff</option>
                                <option value="LookingforJob">Looking for Job</option>
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
                        {/* <RecaptchaWrapper ref={recaptchaRef} /> */}
                        {/* Submit */}
                        <div className="w-full">
                            <button
                                type="submit"
                                className="mt-0 bg-[#359c8f] w-[220px] hover:bg-teal-600 cursor-pointer px-14 py-4 rounded-md font-semibold text-white"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default ContactForm;