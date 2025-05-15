import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const Footer = () => {
    return (
        <>
            <footer className="bg-[#0B2436] text-white py-[75px] px-6 mx-[15px] rounded-br-[30px] rounded-bl-[30px]">
                <Image src="/images/footer-logo.png" alt="Logo" width={220} height={60} />
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <h3 className="text-lg font-semibold mt-[50px] mb-[40px]">Contact With Us!</h3>
                        <div className="flex items-start gap-3 mb-5">
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill='white' className='w-[27px] h-[24px]' viewBox="0 0 576 512"><path d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.7 0-32 14.3-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.7-14.3-32-32-32zm256-96H224c-17.7 0-32 14.3-32 32v32h96c33.2 0 60.6 25.4 63.7 57.8l.3-.2V416h192c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.3 28.7-64 64-64h224V32c0-17.7-14.3-32-32-32H96C78.3 0 64 14.3 64 32v192h96v-32z" /></svg></span>
                            <span> info@ytchealthcare.com</span>
                        </div>
                        <div className="flex items-start gap-3 mb-5">
                            <MdLocationOn className="text-3xl mt-1" />
                            <span>2960 Drew Rd #156, Mississauga, ON L4T 0A5, Canada</span>
                        </div>
                        <div className="flex items-start gap-3 mb-5">
                            <MdLocationOn className="text-3xl mt-1" />
                            <span>744 South St, Philadelphia, PA 19147</span>
                        </div>

                        <div className="flex items-center gap-3 text-white bg-gray-700 w-fit px-4 py-2 rounded-full mb-8">
                            <FaPhoneAlt />
                            <span className="font-semibold">Emergency 24h: +1 365 737 4000</span>
                        </div>

                        <button className="bg-teal-600 hover:bg-teal-700 px-16 py-5 mt-5 rounded-md text-sm text-white">
                            Request An Appointment →
                        </button>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mt-[50px] mb-[40px]">Services</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li><Link href="#">Healthcare Workers</Link></li>
                            <li><Link href="#">Home Care Services</Link></li>
                            <li><Link href="#">Special Care Services</Link></li>
                            <li><Link href="#">Healthcare Facilities</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mt-[50px] mb-[40px]">Quick Links</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-teal-600">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-teal-600">
                                <FaInstagram />
                            </a>
                            <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-teal-600">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Bottom Bar */}
            <div className="text-center text-gray-400 mt-10 text-sm">
                © Copyright 2025 Your Talent Consultancy Healthcare. All Rights Reserved.
            </div>
        </>
    );
};

export default Footer;
