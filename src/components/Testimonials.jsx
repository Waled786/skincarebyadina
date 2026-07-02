const testimonials = [
    {
        name: "Sarah Khan",
        title: "Verified Customer",
        video: "/videos/review1.mp4",
        description: "Hydrated, glowing skin after just a few weeks.",
    },
    {
        name: "Ayesha Malik",
        title: "Verified Customer",
        video: "/videos/review2.mp4",
        description: "The packaging, quality and results exceeded my expectations.",
    },
    {
        name: "Maham Ali",
        title: "Verified Customer",
        video: "/videos/review3.mp4",
        description: "My daily skincare routine feels luxurious now.",
    },
];

const Testimonials = () => {
    return (
        <section className="bg-[#FAF7F2] py-32 lg:py-40">

            <div className="container">

                {/* Heading */}

                <div className="mx-auto mb-20 flex max-w-25xl flex-col items-center text-center">

                    <span className="inline-block mb-4 font-semibold uppercase tracking-[6px] text-amber-700">
                        Customer Stories
                    </span>

                    <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        Real Results.
                        <br />
                        Real Experiences.
                    </h2>

                    <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-600">
                        Hear directly from customers who trust Glow Essence as
                        part of their everyday skincare routine.
                    </p>

                </div>

                {/* Videos */}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {testimonials.map((item, index) => (

                        <div
                            key={index}
                            className="group overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-amber-200 hover:shadow-2xl"
                        >

                            {/* Reduced Video Height */}

                            <div className="aspect-[4/5] overflow-hidden bg-black">

                                <video
                                    controls
                                    preload="metadata"
                                    playsInline
                                    className="h-full w-full object-cover"
                                >
                                    <source
                                        src={item.video}
                                        type="video/mp4"
                                    />
                                </video>

                            </div>

                            {/* Content */}

                            <div className="flex flex-col items-center p-10 text-center">

                                <h3 className="text-2xl font-bold">
                                    {item.name}
                                </h3>

                                <p className="mt-2 text-sm font-semibold uppercase tracking-[2px] text-amber-700">
                                    {item.title}
                                </p>

                                <p className="mt-5 max-w-[280px] leading-8 text-gray-600">
                                    {item.description}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Testimonials;