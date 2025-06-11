import React from 'react'
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

const ContactForm = ({ className }) => {

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
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div>
            {/* Right Side - Form */}
            <div className={`${className} mx-auto w-full text-center`}>
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
                                className="mt-4 bg-[#359c8f] w-[220px] hover:bg-teal-600 cursor-pointer px-14 py-4 rounded-md font-semibold text-white"
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

export default ContactForm