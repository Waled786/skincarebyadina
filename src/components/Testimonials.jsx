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
        <section className="bg-[#FAF7F2] py-28 lg:py-32">

            <div className="container">

                {/* Heading */}

                <div className="max-w-3xl mx-auto mb-20 text-center">

                    <span className="inline-block mb-4 font-semibold uppercase tracking-[6px] text-amber-700">
                        Customer Stories
                    </span>

                    <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        Real Results.
                        <br />
                        Real Experiences.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
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

                            <div className="aspect-[9/16] overflow-hidden bg-black">

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

                            <div className="rounded-b-[32px] p-9">

                                <h3 className="text-xl font-bold">
                                    {item.name}
                                </h3>

                                <p className="mt-1 text-sm font-medium text-amber-700">
                                    {item.title}
                                </p>

                                <p className="mt-5 leading-8 text-gray-600">
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