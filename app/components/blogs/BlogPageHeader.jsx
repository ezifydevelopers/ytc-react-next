
const BlogPageHeader = ({ src, title }) => {
    return (
        <div className="relative h-[330px] w-full px-4">
            <div
                alt="Home Care"
                className="w-full object-cover h-full rounded-tl-[20px] rounded-tr-[20px]"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(44, 62, 80, 0.9)), url(${src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            <div className='container'>
                <div className="max-w-[1360px] mx-auto absolute md:bottom-8 bottom-20 left-5 md:left-65 text-white">
                    <h1 className="text-3xl md:text-5xl text-white font-semibold">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default BlogPageHeader