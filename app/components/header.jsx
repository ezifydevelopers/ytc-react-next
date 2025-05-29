"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, ChevronDown, CreditCard, PlusCircle } from 'lucide-react'

const linkMap = {
    // Healthcare Workers
    'Nurses': '/services/nurses',
    'Physicians': '/services/physician',
    'Social Service Workers': '/services/social-service-workers',
    'Personal Support Workers (PSWs)': '/services/personal-support-workers',
    'Development Support Workers (DSWs)': '/services/developmental-support-workers',
    'Child Care Workers': '/services/child-care-solutions',
  
    // Homecare Services
    '24 hours home care': '/services/24-hour-home-care',
    'In-Home Nursing Care': '/services/in-home-nursing-care',
    'Personal Care': '/services/personal-care',
    'Senior Care': '/services/senior-care-staffing',
  
    // Special Care Services
    "Alzheimer's Care Services": '/services/alzheimers-care-staffing',
    'Dementia Care Services': '/services/dementia-care',
    'Acquired Brain Injury Care': '/services/acquired-brain-injury-care',
    'ALS Patient': '/services/expert-staff-for-als-care',
  
    // Healthcare Facilities
    'Hospitals': '/services/healthcare-staff-for-hospitals',
    'Clinics': '/services/staff-for-clinics',
    'Child Care Centers': '/services/staff-for-childcare-centers',
    'Dental Facilities': '/services/staff-for-dental-facilities',
  };

const Header = () => {
    const [isSticky, setIsSticky] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
        <div className='relative w-[100%] flex'>
            {/* Default Header - animates up when sticky */}
            <header className={`w-full flex items-center justify-between px-4 sm:px-6 py-4 bg-white shadow z-30 transition-all duration-500 ease-in-out ${isSticky ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                <div className="flex items-center space-x-4 w-full md:w-[20%]">
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src="/images/logo.webp"
                            alt="Your Talent Consultancy Logo"
                            width={180}
                            height={74}
                            className="h-auto w-[150px] sm:w-[180px]"
                        />
                    </Link>

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

                <div className='hidden md:flex md:w-[80%] md:flex-col md:gap-[30px]'>
                    <div className="hidden md:flex justify-end gap-4 lg:gap-[40px] text-sm text-gray-600">
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
                    </div>

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
                                            <h3 className="px-4 py-2 text-md border-b md:border-r md:border-b-0 border-[#DBDFE2] font-semibold text-gray-700">Healthcare Workers</h3>
                                            {['Nurses', 'Physicians', 'Social Service Workers', 'Personal Support Workers (PSWs)', 'Development Support Workers (DSWs)', 'Child Care Workers'].map((item) => (
                                                <Link href={linkMap[item]} key={item} className="flex items-center md:border-r border-[#DBDFE2] gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                    </svg>
                                                    <span>{item}</span>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="p-4 lg:p-10">
                                            <h3 className="px-4 py-2 text-md border-b md:border-r md:border-b-0 border-[#DBDFE2] font-semibold text-gray-700">Homecare Services</h3>
                                            {['24 hours home care', 'In-Home Nursing Care', 'Personal Care', 'Senior Care'].map((item) => (
                                                <Link href={linkMap[item]} key={item} className="flex items-center md:border-r border-[#DBDFE2] gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                    </svg>
                                                    <span>{item}</span>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="p-4 lg:p-10">
                                            <h3 className="px-4 py-2 text-md border-b md:border-r md:border-b-0 border-[#DBDFE2] font-semibold text-gray-700">Special Care Services</h3>
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
                                            <h3 className="px-4 py-2 text-md font-semibold text-gray-700 border-b md:border-b-0">Healthcare Facilities</h3>
                                            {['Hospitals', 'Clinics', 'Child Care Centers', 'Dental Facilities'].map((item) => (
                                                <Link href={linkMap[item]} key={item} className="flex items-center gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors">
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
                                        <Link href="#" className="flex items-center gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                        </svg>Salary Guide</Link>
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
                                        <Link href="#" className="flex items-center gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                        </svg>Healthcare Workers</Link>
                                        <Link href="#" className="flex items-center gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                        </svg>Homecare Services</Link>
                                        <Link href="#" className="flex items-center gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                        </svg>Special Care Services</Link>
                                        <Link href="#" className="flex items-center gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                        </svg>Healthcare Facilities</Link>
                                    </div>
                                </div>
                            </div>

                            <Link href="/contact" className="hover:text-teal-600 transition-colors">Contact Us</Link>
                        </nav>

                        <Link href="/quote" className='hidden md:block md:w-[10%]'>
                            <button className="bg-teal-600 font-[700] w-full flex justify-center items-center gap-2 h-[51px] hover:bg-teal-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
                                Free Guide
                                <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                    <path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={toggleMobileMenu}></div>

            {/* Mobile Menu Drawer */}
            <div className={`md:hidden fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-between items-center p-4 border-b">
                    <Image
                        src="/images/logo.webp"
                        alt="Your Talent Consultancy Logo"
                        width={150}
                        height={61}
                        className="h-auto"
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
                                <h3 className="font-semibold text-gray-700 mb-2">Healthcare Workers</h3>
                                {['Nurses', 'Physicians', 'Social Service Workers', 'Personal Support Workers (PSWs)', 'Development Support Workers (DSWs)', 'Child Care Workers'].map((item) => (
                                    <Link href={linkMap[item]} key={item} className="block py-2 text-gray-700">
                                        {item}
                                    </Link>
                                ))}
                            </div>
                            <div className="pl-4 py-2">
                                <h3 className="font-semibold text-gray-700 mb-2">Homecare Services</h3>
                                {['24 hours home care', 'In-Home Nursing Care', 'Personal Care', 'Senior Care'].map((item) => (
                                    <Link href={linkMap[item]} key={item} className="block py-2 text-gray-700">
                                        {item}
                                    </Link>
                                ))}
                            </div>
                            <div className="pl-4 py-2">
                                <h3 className="font-semibold text-gray-700 mb-2">Special Care Services</h3>
                                {['Alzheimer\'s Care Services', 'Dementia Care Services', 'Acquired Brain Injury Care', 'ALS Patient'].map((item) => (
                                    <Link href={linkMap[item]} key={item} className="block py-2 text-gray-700">
                                        {item}
                                    </Link>
                                ))}
                            </div>
                            <div className="pl-4 py-2">
                                <h3 className="font-semibold text-gray-700 mb-2">Healthcare Facilities</h3>
                                {['Hospitals', 'Clinics', 'Child Care Centers', 'Dental Facilities'].map((item) => (
                                    <Link href={linkMap[item]} key={item} className="block py-2 text-gray-700">
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </MobileAccordion>
                    </div>

                    <Link href="/about" className="block py-3 text-lg font-medium border-b border-gray-100">About Us</Link>

                    {/* Mobile Accordion for Resources */}
                    <div className="py-3 border-b border-gray-100">
                        <MobileAccordion title="Resources">
                            <Link href="/blogs" className="block py-2 pl-4 text-gray-700">Blogs</Link>
                            <Link href="#" className="block py-2 pl-4 text-gray-700">Salary Guide</Link>
                        </MobileAccordion>
                    </div>

                    {/* Mobile Accordion for Careers */}
                    <div className="py-3 border-b border-gray-100">
                        <MobileAccordion title="Careers">
                            <Link href="#" className="block py-2 pl-4 text-gray-700">Healthcare Workers</Link>
                            <Link href="#" className="block py-2 pl-4 text-gray-700">Homecare Services</Link>
                            <Link href="#" className="block py-2 pl-4 text-gray-700">Special Care Services</Link>
                            <Link href="#" className="block py-2 pl-4 text-gray-700">Healthcare Facilities</Link>
                        </MobileAccordion>
                    </div>

                    <Link href="/contact" className="block py-3 text-lg font-medium border-b border-gray-100">Contact Us</Link>

                    <div className="mt-6">
                        <Link href="/quote">
                            <button className="w-full bg-teal-600 font-bold flex justify-center items-center gap-2 h-[51px] hover:bg-teal-700 text-white px-4 py-2 rounded-md transition-colors">
                                Free Guide
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
            <header className={`w-full flex items-center justify-between px-4 sm:px-6 lg:px-16 py-4 bg-white shadow fixed top-0 z-30 transition-all duration-500 ease-in-out ${isSticky ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                <div className="flex items-center space-x-4 w-full md:w-[20%]">
                    <Link href="/">
                        <Image
                            src="/images/logo.webp"
                            alt="Your Talent Consultancy Logo"
                            width={150}
                            height={61}
                            className="h-auto"
                        />
                    </Link>

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

                <div className='hidden md:block md:w-[80%]'>
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
                                            <h3 className="px-4 py-2 text-md border-b md:border-r md:border-b-0 border-[#DBDFE2] font-semibold text-gray-700">Healthcare Workers</h3>
                                            {['Nurses', 'Physicians', 'Social Service Workers', 'Personal Support Workers (PSWs)', 'Development Support Workers (DSWs)', 'Child Care Workers'].map((item) => (
                                                <Link href={linkMap[item]} key={item} className="flex items-center md:border-r border-[#DBDFE2] gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                    </svg>
                                                    <span>{item}</span>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="p-4 lg:p-10">
                                            <h3 className="px-4 py-2 text-md border-b md:border-r md:border-b-0 border-[#DBDFE2] font-semibold text-gray-700">Homecare Services</h3>
                                            {['24 hours home care', 'In-Home Nursing Care', 'Personal Care', 'Senior Care'].map((item) => (
                                                <Link href={linkMap[item]} key={item} className="flex items-center md:border-r border-[#DBDFE2] gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="#1F8E7F">
                                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                    </svg>
                                                    <span>{item}</span>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="p-4 lg:p-10">
                                            <h3 className="px-4 py-2 text-md border-b md:border-r md:border-b-0 border-[#DBDFE2] font-semibold text-gray-700">Special Care Services</h3>
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
                                            <h3 className="px-4 py-2 text-md font-semibold text-gray-700 border-b md:border-b-0">Healthcare Facilities</h3>
                                            {['Hospitals', 'Clinics', 'Child Care Centers', 'Dental Facilities'].map((item) => (
                                                <Link href={linkMap[item]} key={item} className="flex items-center gap-4 px-4 py-2 text-[15px] lg:text-[17px] text-gray-700 hover:bg-gray-100 transition-colors">
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

                            <Link href="/about" className="hover:text-teal-600 transition-colors">About Us</Link>
                            <Link href="/blog" className="hover:text-teal-600 transition-colors">Blogs</Link>
                            <Link href="/career" className="hover:text-teal-600 transition-colors">Career</Link>
                            <Link href="/contact" className="hover:text-teal-600 transition-colors">Contact Us</Link>
                        </nav>

                        <Link href="/quote" className='hidden md:block md:w-[10%]'>
                            <button className="bg-[#09243C] font-[700] w-full flex justify-center items-center gap-2 h-[51px] hover:bg-[#0a2e4d] text-white text-sm px-4 py-2 rounded-md transition-colors">
                                Free Quote
                                <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                    <path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
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