"use client";
import { useState } from "react";

import Footer from "../components/footer";
import Header from "../components/header";
import Head from 'next/head';
import Modal from "../components/ui/Modal";
import ContactForm from "../components/ui/ContactForm";

const SalaryGuide = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(true); // show modal on initial load

    const handleFormSubmit = () => {
        setFormSubmitted(true);
        setShowModal(false);
    };

    return (
        <div>
            <Head>
                <link rel="canonical" href="https://ytchealthcare.com/salary-guide/" />
            </Head>
            <Header />

            {/* Modal with form */}
                <Modal onClose={() => setShowModal(false)}>
                    <ContactForm onSuccess={handleFormSubmit} />
                </Modal>

                <div className="min-h-screen p-4 max-w-7xl mx-auto flex justify-center items-center">
                    <iframe
                        src="/pdfs/pdf-salary-guide.pdf"
                        className="w-full h-[80vh] border rounded"
                        title="Salary Guide PDF"
                    ></iframe>
                </div>

            <Footer />
        </div>
    );
};

export default SalaryGuide;
