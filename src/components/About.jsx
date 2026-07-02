const About = () => {
    return (
        <section
            id="about"
            className="bg-[#faf7f2] pt-44 pb-44 lg:pt-52 lg:pb-52"
        >
            <div className="container">

                {/* Image */}

                {/* <div className="relative order-2 flex justify-center lg:order-1">

                    <div className="absolute -z-10 h-[90%] w-[90%] rounded-full bg-amber-100 opacity-50 blur-3xl"></div>

                    <img
                        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900"
                        alt="About Glow Essence"
                        className="w-full max-w-lg rounded-[32px] object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                    />

                    <div className="absolute bottom-6 right-2 rounded-[32px] border border-white/60 bg-white/95 px-7 py-6 shadow-2xl backdrop-blur-md lg:bottom-8 lg:right-0">

                        <h3 className="text-4xl font-bold text-amber-700">
                            10+
                        </h3>

                        <p className="mt-1 text-sm text-gray-600">
                            Years Experience
                        </p>

                    </div>

                </div> */}

                {/* Content */}

                {/* Content */}

                <div className="mx-auto mb-25 flex max-w-25xl flex-col items-center text-center">

                    <span className="inline-block font-semibold uppercase tracking-[6px] text-amber-700">
                        About Glow Essence
                    </span>

                    <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        Beauty Begins
                        <br />
                        With Healthy Skin
                    </h2>

                    <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-600">
                        Glow Essence blends botanical ingredients with modern skincare science
                        to create luxurious products that nourish, restore and protect every
                        skin type.
                    </p>

                    <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-600">
                        Every product is thoughtfully formulated to deliver visible results while
                        maintaining a gentle and refreshing skincare experience you can trust.
                    </p>

                    {/* Statistics */}

                    <div className="mt-14 mb-28 flex flex-wrap justify-center gap-8">

                        <div className="w-[240px] rounded-[32px] border border-gray-100 bg-white px-8 py-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-2xl">

                            <h3 className="text-3xl font-bold text-amber-700">
                                100%
                            </h3>

                            <p className="mt-3 text-lg text-gray-600">
                                Safety Measures
                            </p>

                        </div>

                        <div className="w-[240px] rounded-[32px] border border-gray-100 bg-white px-8 py-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-2xl">

                            <h3 className="text-3xl font-bold text-amber-700">
                                200+
                            </h3>

                            <p className="mt-3 text-lg text-gray-600">
                                Standard Testimonials
                            </p>

                        </div>

                    </div>

                    {/* <button className="mt-14 flex h-14 w-[220px] items-center justify-center rounded-full bg-amber-700 text-base font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-amber-800">
                        Our Philosophy
                    </button> */}

                </div>

            </div>
        </section>
    );
};

export default About;