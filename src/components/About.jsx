const About = () => {
    return (
        <section
            id="about"
            className="bg-[#faf7f2] py-28 lg:py-32"
        >
            <div className="max-w-7xl mx-auto grid items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">

                {/* Image */}

                <div className="relative order-2 flex justify-center lg:order-1">

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

                </div>

                {/* Content */}

                <div className="order-1 lg:order-2">

                    <span className="inline-block font-semibold uppercase tracking-[6px] text-amber-700">
                        About Glow Essence
                    </span>

                    <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        Beauty Begins
                        <br />
                        With Healthy Skin
                    </h2>

                    <p className="mt-8 text-lg leading-8 text-gray-600">
                        Glow Essence blends botanical ingredients with modern skincare science
                        to create luxurious products that nourish, restore and protect every
                        skin type.
                    </p>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Every product is thoughtfully formulated to deliver visible results while
                        maintaining a gentle and refreshing skincare experience you can trust.
                    </p>

                    {/* Statistics */}

                    <div className="mt-12 grid grid-cols-2 gap-6">

                        <div className="rounded-[32px] border border-gray-100 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-2xl">

                            <h3 className="text-4xl font-bold text-amber-700">
                                100%
                            </h3>

                            <p className="mt-2 text-gray-600">
                                Natural Ingredients
                            </p>

                        </div>

                        <div className="rounded-[32px] border border-gray-100 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-2xl">

                            <h3 className="text-4xl font-bold text-amber-700">
                                15K+
                            </h3>

                            <p className="mt-2 text-gray-600">
                                Happy Customers
                            </p>

                        </div>

                    </div>

                    <button className="mt-12 rounded-full bg-amber-700 px-10 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-amber-800">
                        Discover Our Story
                    </button>

                </div>

            </div>
        </section>
    );
};

export default About;