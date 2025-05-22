import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="block pt-[50px] pb-[30px] px-[10px]">
            <section className="hero-section bg-teal-700 text-white py-[85px] pb-[30px] px-[35px] relative overflow-hidden rounded-3xl flex flex-col md:flex-row items-center justify-between">
                <div className="max-w-2xl z-10">
                    <p className="text-sm font-semibold uppercase mb-2 tracking-wide">
                        Short on staff? <br />
                        We’ve got you covered in minutes!
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        YTC HealthCare: <span className="block">Your Healthcare <span className="text-white font-bold">Staffing Provider</span></span>
                    </h1>
                    <p className="text-base md:text-lg text-white/90 mb-6">
                        Don’t let staffing shortages impact your patient’s well-being. YTC Healthcare delivers certified healthcare professionals ready to step in immediately. From locum nurse practitioners to long-term medical oncology nurses, we provide every healthcare professional to fill your staffing shortages.
                    </p>
                    <button className="bg-[#071b2f] mt-[55px] text-white font-bold py-2 px-6 rounded-md hover:bg-[#0b223c] transition">
                        Fill Staffing Shortage Now
                    </button>
                </div>
            </section>
        </div>
    );
}
