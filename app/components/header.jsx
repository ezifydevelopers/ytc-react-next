import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow continer">
            <div className="flex items-center space-x-4 w-[20%]">
                <Image
                    src="/images/logo.webp"
                    alt="Your Talent Consultancy Logo"
                    width={348}
                    height={142.5}
                />
            </div>

            <div className='w-[80%] flex flex-col gap-[30px]'>
                <div className="hidden md:flex justify-end gap-[40px] text-sm text-gray-600 space-y-1">
                    <div className="flex items-center space-x-2">
                        <span className="inline-flex text-[15px] items-center space-x-1 gap-3">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 16 16">
                                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                                    <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
                                </svg>
                            </span>
                            <span>Quebec Branch Agency Permit Number - YTC-AP-2202698</span>
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="inline-flex text-[15px] items-center space-x-1 gap-3">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" className="bi bi-credit-card-2-front" viewBox="0 0 16 16">
                                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                                    <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
                                </svg>
                            </span>
                            <span>Ontario Branch Agency Permit Number - THA-0000002579</span>
                        </span>
                    </div>
                    <div className="flex flex-col items-end gap-[25px] space-x-3">
                        <button className="w-14 h-14 rounded-full bg-rose-500 text-white text-4xl font-bold flex items-center justify-center">+</button>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <nav className="hidden md:flex items-center space-x-6 font-[500] text-[19px] w-[90%] justify-center">
                        <Link href="/" className="text-teal-600">Home</Link>
                        <div className="relative group">
                            <button className="flex items-center space-x-1">Services <span><svg className='w-[14px] ml-[7px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg></span></button>
                        </div>
                        <Link href="/about">About Us</Link>
                        <div className="relative group">
                            <button className="flex items-center space-x-1">Resources <span><svg className='w-[14px] ml-[7px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg></span></button>
                        </div>
                        <div className="relative group">
                            <button className="flex items-center space-x-1">Careers <span><svg className='w-[14px] ml-[7px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg></span></button>
                        </div>
                        <Link href="/contact">Contact Us</Link>
                    </nav>

                    <Link href="/quote" className='w-[10%]'>
                        <button className="bg-teal-600 font-[700] w-[100%] flex justify-center items-center gap-2 h-[51px] hover:bg-teal-700 text-white text-sm px-4 py-2 rounded-md">
                            Free Quote <svg fill='white' xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z"/></svg>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header