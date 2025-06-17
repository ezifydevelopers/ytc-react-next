"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, ChevronDown, CreditCard, PlusCircle } from 'lucide-react'
import ContactForm from './ui/ContactForm'
import Modal from './ui/Modal'
import { FaPhoneAlt } from 'react-icons/fa';

const linkMap = {
    // Healthcare Workers
    'Nurses': '/service/nurses/',
    'Physicians': '/service/physician/',
    'Social Service Workers': '/service/social-service-workers/',
    'Personal Support Workers (PSWs)': '/service/personal-support-workers/',
    'Development Support Workers (DSWs)': '/service/developmental-support-workers/',
    'Child Care Workers': '/service/child-care-solutions/',

    // Homecare Services
    '24 hours home care': '/service/24-hour-home-care/',
    'In-Home Nursing Care': '/service/in-home-nursing-care/',
    'Personal Care': '/service/personal-care/',
    'Senior Care': '/service/senior-care-staffing/',

    // Special Care Services
    "Alzheimer's Care Services": '/service/alzheimers-care-staffing/',
    'Dementia Care Services': '/service/dementia-care/',
    'Acquired Brain Injury Care': '/service/acquired-brain-injury-care/',
    'ALS Patient': '/service/expert-staff-for-als-care/',

    // Healthcare Facilities
    'Hospitals': '/service/healthcare-staff-for-hospitals/',
    'Clinics': '/service/staff-for-clinics/',
    'Child Care Centers': '/service/staff-for-childcare-centers/',
    'Dental Facilities': '/service/staff-for-dental-facilities/',
};

const Header = () => {
    const [isSticky, setIsSticky] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (e) => {
        e.preventDefault(); // Prevent the link from navigating
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <div className="">
            <div className="bg-[#009689] px-4 py-2 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2 text-white text-sm md:text-base">
                <div className="flex justify-between w-full px-2 lg:hidden md:flex-row items-start md:items-center gap-2 md:gap-6">
                    <a href="tel:+13657374000" className="flex items-center gap-2 hover:underline">
                        <FaPhoneAlt className="text-white" />
                        <span>Canada</span>
                    </a>
                    <a href="tel:+14122182885" className="flex items-center gap-2 hover:underline">
                        <FaPhoneAlt className="text-white" />
                        <span>USA</span>
                    </a>
                </div>

                {/* Optional: show address on desktop only */}
                <div className="bg-[#009689] w-full hidden lg:flex px-8 py-1 lg:flex-row flex-col md:justify-between items-center">
                    <div className='flex'>
                        <div className="text-white text-[13px] lg:text-[14px] items-center hidden lg:flex gap-2"><span className='p-0 m-0'><svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className="text-3xl mt-0" height="25px" width="23px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg></span>2960 Drew Rd #156, Mississauga, ON L4T 0A5, Canada</div>
                        <a href="tel:+13657374000" className='flex items-center gap-2 text-white md:mx-5 text-[14px]'>
                            <FaPhoneAlt />  Canada - +1 (365) 737-4000
                        </a>
                    </div>
                    <div className='flex'>
                        <div className="text-white text-[13px] lg:text-[14px] hidden lg:flex gap-2 items-center"><span><svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className="text-3xl mt-0" height="25px" width="23px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg></span>744 South St, Philadelphia, PA 19147</div>
                        <a href="tel:+14122182885" className='flex items-center gap-2 text-white md:mx-5 text-[14px]'>
                            <FaPhoneAlt />  USA - +1 412-218-2885
                        </a>
                    </div>
                </div>
            </div>


            <div className='relative w-[100%] flex'>
                {/* Default Header - animates up when sticky */}
                <header className={`w-full flex items-center justify-between px-4 sm:px-6 py-4 bg-white shadow z-30 transition-all duration-500 ease-in-out ${isSticky ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                    <div className="flex items-center space-x-4 w-full md:w-[12%]">
                        <Image
                            src="/images/logo.webp"
                            alt="Your Talent Consultancy Logo"
                            width={180}
                            height={74}
                            className="h-auto w-[150px] sm:w-[180px] cursor-pointer"
                            onClick={() => window.location.href = '/'}
                        />
                        {/* Mobile menu button */}
                        <div className="ml-auto md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className='hidden md:flex md:w-[88%] md:flex-col md:gap-[30px]'>
                        {/* <div className="hidden md:flex justify-end gap-4 lg:gap-[40px] text-sm text-gray-600">
                        <div className="flex items-center">
                            <span className="inline-flex text-[13px] lg:text-[15px] items-center gap-2 lg:gap-3">
                                <span>
                                    <CreditCard className="h-5 w-5" />
                                </span>
                                <span className="hidden lg:inline">Quebec Branch Agency Permit Number - YTC-AP-2202698</span>
                                <span className="lg:hidden">QC Permit: YTC-AP-2202698</span>
                            </span>
                        </div>
                        <div className="flex items-center">
                            <span className="inline-flex text-[13px] lg:text-[15px] items-center gap-2 lg:gap-3">
                                <span>
                                    <CreditCard className="h-5 w-5" />
                                </span>
                                <span className="hidden lg:inline">Ontario Branch Agency Permit Number - THA-0000002579</span>
                                <span className="lg:hidden">ON Permit: THA-0000002579</span>
                            </span>
                        </div>
                        <div className="flex flex-col items-end gap-[25px]">
                            <button className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-rose-500 text-white text-3xl lg:text-4xl font-bold flex items-center justify-center">
                                <PlusCircle className="h-6 w-6" />
                            </button>
                        </div>
                    </div> */}

                        <div className='flex justify-between'>
                            <nav className="hidden md:flex items-center space-x-3 lg:space-x-6 font-[500] text-[16px] lg:text-[19px] w-[90%] justify-center">
                                <Link href="/" className="text-teal-600 hover:text-teal-800 transition-colors">Home</Link>

                                {/* Services Dropdown */}
                                <div className="group">
                                    <button className="flex items-center space-x-1 py-[26px] hover:text-teal-600 transition-colors cursor-pointer">
                                        Services
                                        <ChevronDown className="h-4 w-4 ml-1" />
                                    </button>
                                    <div className="absolute left-0 mt-[-7px] w-full origin-top-right bg-white shadow-lg ring-1 ring-[#DADEE2] ring-opacity-5 focus:outline-none hidden group-hover:flex transition-opacity duration-300 z-50">
                                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                                            <div className="p-4 lg:p-10">
                                                <a href={'/healthcare-staffing/'}><h3 className="px-4 py-2 text-md border-b md:border-r md:border-b-0 border-[#DBDFE2] font-semibold text-gray-700">Healthcare Workers</h3></a>
                                                {['Nurses', 'Physicians', 'Social Service Workers', 'Personal Support Workers (PSWs)', 'Development Support Workers (DSWs)', 'Child Care Workers'].map((item) => (
                                                    <Link href={linkMap[item] || '/'} key={item} className="flex items-center md:border-r border-[#DBDFE2] gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                        </svg>
                                                        <span>{item}</span>
                                                    </Link>
                                                ))}
                                            </div>

                                            <div className="p-4 lg:p-10">
                                                <a href={'/homecare-staffing-services/'}><h3 className="px-4 py-2 text-md border-b md:border-r md:border-b-0 border-[#DBDFE2] font-semibold text-gray-700">Homecare Services</h3></a>
                                                {['24 hours home care', 'In-Home Nursing Care', 'Personal Care', 'Senior Care'].map((item) => (
                                                    <Link href={linkMap[item] || '/'} key={item} className="flex items-center md:border-r border-[#DBDFE2] gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                        </svg>
                                                        <span>{item}</span>
                                                    </Link>
                                                ))}
                                            </div>


                                            <div className="p-4 lg:p-10">
                                                <a href={'/special-care-staffing-services/'}><h3 className="px-4 py-2 text-md border-b md:border-r md:border-b-0 border-[#DBDFE2] font-semibold text-gray-700">Special Care Services</h3></a>
                                                {['Alzheimer\'s Care Services', 'Dementia Care Services', 'Acquired Brain Injury Care', 'ALS Patient'].map((item) => (
                                                    <Link href={linkMap[item]} key={item} className="flex items-center md:border-r border-[#DBDFE2] gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                        </svg>
                                                        <span>{item}</span>
                                                    </Link>
                                                ))}
                                            </div>

                                            <div className="p-4 lg:p-10">
                                                <a href={'/healthcare-facilities/'}><h3 className="px-4 py-2 text-md font-semibold text-gray-700 border-b md:border-b-0">Healthcare Facilities</h3></a>
                                                {['Hospitals', 'Clinics', 'Child Care Centers', 'Dental Facilities'].map((item) => (
                                                    <Link href={linkMap[item] || '/'} key={item} className="flex items-center gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                        </svg>
                                                        <span>{item}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/about-us" className="hover:text-teal-600 transition-colors">About Us</Link>

                                {/* Resources Dropdown */}
                                <div className="relative group">
                                    <button className="flex items-center py-[26px] cursor-pointor hover:text-teal-600 transition-colors">
                                        Resources
                                        <ChevronDown className="h-4 w-4 ml-1" />
                                    </button>
                                    <div className="absolute left-0 flex w-[300px] mt-[-10px] ml-[-80px] py-5 px-10 origin-top-right bg-white shadow-lg ring-1 ring-[#DADEE2] ring-opacity-5 focus:outline-none hidden group-hover:flex transition-opacity duration-300 z-50">
                                        <div className="py-1 w-full">
                                            <Link href="/blog" className="flex items-center gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                            </svg>Blogs</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Careers Dropdown */}
                                <div className="relative group cursor-pointor">
                                    <button className="flex items-center py-[26px] hover:cursor-pointor hover:text-teal-600 transition-colors">
                                        Careers
                                        <ChevronDown className="h-4 w-4 ml-1" />
                                    </button>
                                    <div className="absolute left-0 flex w-[400px] mt-[-10px] ml-[-80px] py-5 px-10 origin-top-right bg-white shadow-lg ring-1 ring-[#DADEE2] ring-opacity-5 focus:outline-none hidden group-hover:flex transition-opacity duration-300 z-50">
                                        <div className="py-1">
                                            <Link href="/job-openings/" className="flex items-center gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                            </svg>Jobs Openings</Link>
                                            <Link href="/healthcare-careers" className="flex items-center gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                            </svg>Apply Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/contact-us/" className="hover:text-teal-600 transition-colors">Contact Us</Link>
                            </nav>

                            {/* <div className="md:w-[17%] flex justify-end">
                                <Link href="/contact-us/" className='hidden md:block md:w-[206px] mt-5'>
                                    <button className="bg-teal-600 font-[700] w-full cursor-pointer flex justify-center items-center gap-2 h-[51px] hover:bg-teal-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
                                        Get a free quote
                                        <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                            <path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z" />
                                        </svg>
                                    </button>
                                </Link>
                            </div> */}

                            <>
                                <div className="md:w-[17%] flex justify-end">
                                    {/* Changed Link to div and added onClick handler */}
                                    <div onClick={openModal} className='hidden md:block md:w-[206px] mt-5 cursor-pointer'>
                                        <button className="bg-teal-600 w-full cursor-pointer flex justify-center items-center gap-2 h-[51px] hover:bg-teal-700 text-white text-[15px] px-4 py-2 rounded-md transition-colors">
                                            Get a free quote
                                            <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                                <path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
                                    <ContactForm className="text-left" />
                                </Modal> */}
                            </>
                        </div>
                    </div>
                </header>

                {/* Mobile Menu Overlay */}
                <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-[99999] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={toggleMobileMenu}></div>

                {/* Mobile Menu Drawer */}
                <div className={`md:hidden fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-xl z-[9999999] transform transition-transform duration-300 ease-in-out  overflow-y-auto max-h-[calc(100vh-0px)] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-between items-center p-4 border-b">
                        <Image
                            src="/images/logo.webp"
                            alt="Your Talent Consultancy Logo"
                            width={150}
                            height={61}
                            className="h-auto cursor-pointer"
                            onClick={() => window.location.href = '/'}
                        />
                        <button onClick={toggleMobileMenu} className="p-2">
                            <X className="h-6 w-6 text-gray-600" />
                        </button>
                    </div>

                    <nav className="p-4">
                        <Link href="/" className="block py-3 text-lg font-medium border-b border-gray-100 text-teal-600">Home</Link>

                        {/* Mobile Accordion for Services */}
                        <div className="py-3 border-b border-gray-100">
                            <MobileAccordion title="Services">
                                <div className="pl-4 py-2">
                                    <a href={'/healthcare-staffing/'}><h3 className="font-semibold text-gray-700 mb-2">Healthcare Workers</h3></a>
                                    {['Nurses', 'Physicians', 'Social Service Workers', 'Personal Support Workers (PSWs)', 'Development Support Workers (DSWs)', 'Child Care Workers'].map((item) => (
                                        <Link href={linkMap[item] || '/'} key={item} className="block py-2 text-gray-700">
                                            {item}
                                        </Link>
                                    ))}
                                </div>
                                <div className="pl-4 py-2">
                                    <a href={'/homecare-staffing-services/'}><h3 className="font-semibold text-gray-700 mb-2">Homecare Services</h3></a>
                                    {['24 hours home care', 'In-Home Nursing Care', 'Personal Care', 'Senior Care'].map((item) => (
                                        <Link href={linkMap[item] || '/'} key={item} className="block py-2 text-gray-700">
                                            {item}
                                        </Link>
                                    ))}
                                </div>
                                <div className="pl-4 py-2">
                                    <a href={'/special-care-staffing-services/'}> <h3 className="font-semibold text-gray-700 mb-2">Special Care Services</h3></a>
                                    {['Alzheimer\'s Care Services', 'Dementia Care Services', 'Acquired Brain Injury Care', 'ALS Patient'].map((item) => (
                                        <Link href={linkMap[item] || '/'} key={item} className="block py-2 text-gray-700">
                                            {item}
                                        </Link>
                                    ))}
                                </div>
                                <div className="pl-4 py-2">
                                    <a href={'/healthcare-facilities/'}><h3 className="font-semibold text-gray-700 mb-2">Healthcare Facilities</h3></a>
                                    {['Hospitals', 'Clinics', 'Child Care Centers', 'Dental Facilities'].map((item) => (
                                        <Link href={linkMap[item] || '/'} key={item} className="block py-2 text-gray-700">
                                            {item}
                                        </Link>
                                    ))}
                                </div>
                            </MobileAccordion>
                        </div>

                        <Link href="/about-us" className="block py-3 text-lg font-medium border-b border-gray-100">About Us</Link>

                        {/* Mobile Accordion for Resources */}
                        <div className="py-3 border-b border-gray-100">
                            <MobileAccordion title="Resources">
                                <Link href="/blog" className="block py-2 pl-4 text-gray-700">Blogs</Link>
                            </MobileAccordion>
                        </div>

                        {/* Mobile Accordion for Careers */}
                        <div className="py-3 border-b border-gray-100">
                            <MobileAccordion title="Careers">
                                <Link href="/job-openings/" className="block py-2 pl-4 text-gray-700">Jobs Openings</Link>
                                <Link href="/healthcare-careers" className="block py-2 pl-4 text-gray-700">Apply Now</Link>
                            </MobileAccordion>
                        </div>

                        <Link href="/contact-us/" className="block py-3 text-lg font-medium border-b border-gray-100">Contact Us</Link>

                        <div className="mt-6">
                            <Link href="/contact-us/">
                                <button className="w-full text-[15px] bg-teal-600 font-bold cursor-pointer flex justify-center items-center gap-2 h-[51px] hover:bg-teal-700 text-white px-4 py-2 rounded-md transition-colors">
                                    Get a free quote
                                    <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z" />
                                    </svg>
                                </button>
                            </Link>
                        </div>

                        <div className="mt-8 text-sm text-gray-600 space-y-4">
                            <div className="flex items-center gap-2">
                                <CreditCard className="h-5 w-5 flex-shrink-0" />
                                <span>QC Permit: YTC-AP-2202698</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CreditCard className="h-5 w-5 flex-shrink-0" />
                                <span>ON Permit: THA-0000002579</span>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Sticky Header - animates down when sticky */}
                <header className={`w-full flex items-center justify-between px-4 sm:px-6 lg:px-6 py-4 bg-white shadow fixed top-0 z-[999999] transition-all duration-500 ease-in-out ${isSticky ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                    <div className="flex items-center space-x-4 w-full md:w-[12%]">
                        <Image
                            src="/images/logo.webp"
                            alt="Your Talent Consultancy Logo"
                            width={150}
                            height={61}
                            className="h-auto cursor-pointer"
                            onClick={() => window.location.href = '/'}
                        />

                        {/* Mobile menu button for sticky header */}
                        <div className="ml-auto md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                        </div>
                    </div>

                    <div className='hidden md:block md:w-[88%]'>
                        <div className='flex justify-between'>
                            <nav className="hidden md:flex items-center space-x-3 lg:space-x-6 font-[500] text-[16px] lg:text-[19px] w-[90%] justify-center">
                                <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>

                                {/* Only Services dropdown in sticky header */}
                                <div className="group">
                                    <button className="flex items-center space-x-1 mt-[26px] pb-[26px] hover:text-teal-600 transition-colors">
                                        Services
                                        <ChevronDown className="h-4 w-4 ml-1" />
                                    </button>
                                    <div className="absolute left-0 mt-[-7px] flex w-full origin-top-right bg-white shadow-lg ring-1 ring-[#DADEE2] ring-opacity-5 focus:outline-none hidden group-hover:flex transition-opacity duration-300 z-50">
                                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                                            <div className="p-4 lg:p-10">
                                                <a href={'/healthcare-staffing/'}><h3 className="px-4 py-2 text-md border-b md:border-r md:border-b-0 border-[#DBDFE2] font-semibold text-gray-700">Healthcare Workers</h3></a>
                                                {['Nurses', 'Physicians', 'Social Service Workers', 'Personal Support Workers (PSWs)', 'Development Support Workers (DSWs)', 'Child Care Workers'].map((item) => (
                                                    <Link href={linkMap[item] || '/'} key={item} className="flex items-center md:border-r border-[#DBDFE2] gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                        </svg>
                                                        <span>{item}</span>
                                                    </Link>
                                                ))}
                                            </div>

                                            <div className="p-4 lg:p-10">
                                                <a href={'/homecare-staffing-services/'}><h3 className="px-4 py-2 text-md border-b md:border-r md:border-b-0 border-[#DBDFE2] font-semibold text-gray-700">Homecare Services</h3></a>
                                                {['24 hours home care', 'In-Home Nursing Care', 'Personal Care', 'Senior Care'].map((item) => (
                                                    <Link href={linkMap[item] || '/'} key={item} className="flex items-center md:border-r border-[#DBDFE2] gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                        </svg>
                                                        <span>{item}</span>
                                                    </Link>
                                                ))}
                                            </div>

                                            <div className="p-4 lg:p-10">
                                                <a href={'/special-care-staffing-services/'}><h3 className="px-4 py-2 text-md border-b md:border-r md:border-b-0 border-[#DBDFE2] font-semibold text-gray-700">Special Care Services</h3></a>
                                                {['Alzheimer\'s Care Services', 'Dementia Care Services', 'Acquired Brain Injury Care', 'ALS Patient'].map((item) => (
                                                    <Link href={linkMap[item] || '/'} key={item} className="flex items-center md:border-r border-[#DBDFE2] gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                        </svg>
                                                        <span>{item}</span>
                                                    </Link>
                                                ))}
                                            </div>

                                            <div className="p-4 lg:p-10">
                                                <a href={'/healthcare-facilities/'}><h3 className="px-4 py-2 text-md font-semibold text-gray-700 border-b md:border-b-0">Healthcare Facilities</h3></a>
                                                {['Hospitals', 'Clinics', 'Child Care Centers', 'Dental Facilities'].map((item) => (
                                                    <Link href={linkMap[item] || '/'} key={item} className="flex items-center gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                        </svg>
                                                        <span>{item}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/about-us" className="hover:text-teal-600 transition-colors">About Us</Link>
                                <Link href="/blog" className="hover:text-teal-600 transition-colors">Blogs</Link>
                                <Link href="/healthcare-careers" className="hover:text-teal-600 transition-colors">Career</Link>
                                <Link href="/contact-us/" className="hover:text-teal-600 transition-colors">Contact Us</Link>
                            </nav>

                            <>
                                <div className="md:w-[17%] flex justify-end">
                                    {/* Changed Link to div and added onClick handler */}
                                    <div onClick={openModal} className='hidden md:block md:w-[206px] mt-5 cursor-pointer'>
                                        <button className="bg-[#09243C] w-full cursor-pointer flex justify-center items-center gap-2 h-[51px] hover:bg-teal-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
                                            Get a free quote
                                            <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                                <path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
                                    <ContactForm className="text-left" />
                                </Modal> */}
                            </>

                            {/* <div className="md:w-[17%] flex justify-end">
                                <Link href="/contact-us" className='hidden md:flex items-center md:w-[206px]'>
                                    <button className="bg-[#09243C] font-[700] w-full flex justify-center items-center gap-2 h-[51px] hover:bg-[#0a2e4d] text-white text-sm px-4 py-2 rounded-md transition-colors">
                                        Get a free quote
                                        <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                            <path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z" />
                                        </svg>
                                    </button>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </header>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <ContactForm className="text-left" />
                </Modal>
            </div>
        </div>
    )
}

// Mobile Accordion Component for the mobile menu
const MobileAccordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full text-left text-lg font-medium"
            >
                {title}
                <span>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                {children}
            </div>
        </div>
    )
}

export default Header