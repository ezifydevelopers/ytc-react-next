import Footer from "../components/footer"
import Header from "../components/header"

const SalaryGuide = () => {
    return (
        <div className="">
            <Header />
            <div className="min-h-screen p-4 max-w-7xl mx-auto flex justify-center items-center">
                <iframe
                    src="/pdfs/pdf-salary-guide.pdf"
                    className="w-full h-[80vh] border rounded"
                    title="Salary Guide PDF"
                ></iframe>
            </div>
            <Footer />
        </div>
    )
}

export default SalaryGuide
