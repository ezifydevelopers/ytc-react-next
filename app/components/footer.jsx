"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import ContactForm from './ui/ContactForm';

const Footer = () => {
    return (
        <div>
            <div className="footer-main bg-[#0B2436] mx-[15px] text-white rounded-br-[30px] rounded-bl-[30px]">
                <footer className=" footer-inner px-6 md:py-[75px] py-[30px]">
                    <Image src="/images/footer-logo.png" alt="Logo" width={220} height={60} />
                    <div className=" mx-auto lg:flex lg:gap-5 lg:justify-between">
                        <div className='lg:w-[30%]'>
                            <h3 className="text-lg font-semibold md:my-[40px] my-[20px]">Contact With Us!</h3>
                            <a href="mailto:info@ytchealthcare.com" className="flex items-start gap-3 mb-5 text-white hover:underline">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-[27px] h-[24px]" viewBox="0 0 576 512">
                                        <path d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.7 0-32 14.3-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.7-14.3-32-32-32zm256-96H224c-17.7 0-32 14.3-32 32v32h96c33.2 0 60.6 25.4 63.7 57.8l.3-.2V416h192c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.3 28.7-64 64-64h224V32c0-17.7-14.3-32-32-32H96C78.3 0 64 14.3 64 32v192h96v-32z" />
                                    </svg>
                                </span>
                                <span>info@ytchealthcare.com</span>
                            </a>

                            <div className="flex items-start gap-3 mb-5">
                                <MdLocationOn className="text-3xl" />
                                <a href='https://www.google.com/search?q=2960+Drew+Rd+%23156%2C+Mississauga%2C+ON+L4T+0A5%2C+Canada+ytc+healthcare&rlz=1C1VDKB_enCA1105CA1105&oq=2960+Drew+Rd+%23156%2C+Mississauga%2C+ON+L4T+0A5%2C+Canada+ytc+healthcare&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQIRgK0gEINTAzOGowajeoAgiwAgHxBYf0nnl4CvwR&sourceid=chrome&ie=UTF-8'> 2960 Drew Rd #156, Mississauga, ON L4T 0A5, Canada</a>
                            </div>
                            <div className="flex items-start gap-3 mb-5">
                                <MdLocationOn className="text-3xl" />
                                <a href='https://www.google.com/search?q=your+talent+consultancy+philadelphia&sca_esv=ef108326c3cb304c&rlz=1C1VDKB_enCA1105CA1105&ei=h_BKaPamIdye5NoP8MqTwQE&oq=your+talent+consultancy+phi&gs_lp=Egxnd3Mtd2l6LXNlcnAiG3lvdXIgdGFsZW50IGNvbnN1bHRhbmN5IHBoaSoCCAMyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABSLQaULUCWM4LcAF4AZABAJgBhwGgAdYDqgEDMC40uAEDyAEA-AEBmAIFoAL3A8ICChAAGLADGNYEGEfCAg0QABiwAxjWBBhHGMkDwgIOEAAYgAQYsAMYkgMYigXCAg0QABiABBiwAxhDGIoFwgIOEC4YgAQYxwEYjgUYrwHCAgUQABiABMICBhAAGBYYHsICAhAmwgILEAAYgAQYhgMYigXCAgUQABjvBcICHRAuGIAEGMcBGI4FGK8BGJcFGNwEGN4EGOAE2AEBwgIIEAAYogQYiQXCAggQABiABBiiBJgDAIgGAZAGCLoGBggBEAEYFJIHAzEuNKAHixuyBwMwLjS4B_EDwgcHMC4xLjMuMcgHHQ&sclient=gws-wiz-serp'>744 South St, Philadelphia, PA 19147</a>
                            </div>

                            <div className="flex items-center gap-3 text-white bg-gray-700 w-fit px-4 py-2 rounded-full md:mb-8">
                                <FaPhoneAlt />
                                <span className="font-semibold">Emergency 24h: +1 365 737 4000</span>
                            </div>
                            <div className='flex flex-col md:w-70 w-full'>
                                <a href="tel:+13657374000">
                                    <button className="bg-teal-600 cursor-pointer hover:bg-teal-700 px-10 py-5 mt-5 rounded-md text-sm text-white flex gap-2">
                                        <FaPhoneAlt />  Canada - +1 (365) 737-4000
                                    </button>
                                </a>
                                <a href="tel:+14122182885">
                                    <button className="bg-teal-600 cursor-pointer hover:bg-teal-700 px-10 py-5 mt-5 rounded-md text-sm text-white flex gap-2">
                                        <FaPhoneAlt />  USA - +1 412-218-2885
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className='lg:w-[15%]'>
                            <h3 className="text-lg font-semibold md:mt-[50px] mt-[25px] md:mb-[40px] mb-[10px]">Services</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li><Link href="/healthcare-staffing/">Healthcare Workers</Link></li>
                                <li><Link href="/homecare-staffing-services/">Home Care Services</Link></li>
                                <li><Link href="/special-care-staffing-services/">Special Care Services</Link></li>
                                <li><Link href="/healthcare-facilities/">Healthcare Facilities</Link></li>
                            </ul>
                        </div>

                        <div className='lg:w-[15%]'>
                            <h3 className="text-lg font-semibold md:mt-[50px] mt-[25px] md:mb-[40px] mb-[10px]">Quick Links</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about-us/">About Us</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/contact-us/">Contact Us</Link></li>
                            </ul>

                            <div className="flex gap-4 mt-6">
                                <a href="https://www.facebook.com/ytchealthcare" className="bg-gray-700 p-3 rounded-full hover:bg-teal-600">
                                    <FaFacebookF />
                                </a>
                                <a href="https://www.instagram.com/ytchealthcare/" className="bg-gray-700 p-3 rounded-full hover:bg-teal-600">
                                    <FaInstagram />
                                </a>
                                <a href="https://www.linkedin.com/company/ytchealthcare/" className="bg-gray-700 p-3 rounded-full hover:bg-teal-600">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        {/* form */}
                        <div className='lg:w-[40%] md:mt-14 mt-7'>
                            <ContactForm className="text-left" />
                        </div>
                    </div>
                </footer>
            </div>
            <div className="text-center text-gray-400 mt-10 text-sm">
                © Copyright 2025 Your Talent Consultancy Healthcare. All Rights Reserved.
            </div>
        </div>
    );
};

export default Footer;