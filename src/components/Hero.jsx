const Hero = () => {
    return (
        <section
            id="home"
            className="container"
        >
            {/* Background */}

            <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-amber-100 blur-[120px] opacity-50"></div>

            <div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-orange-100 blur-[140px] opacity-40"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">

                {/* Left */}

                <div>

                    <span className="uppercase tracking-[7px] text-sm font-semibold text-amber-700">
                        SkinCare By Adina
                    </span>

                    <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-black leading-none">

                        Glow

                        <span className="block mt-3 text-amber-700">
                            Naturally
                        </span>

                    </h1>

                    <p className="mt-8 max-w-xl text-lg leading-9 text-gray-600">
                        Discover botanical skincare crafted with premium
                        ingredients that deeply nourish, restore and protect
                        your skin while revealing a naturally healthy glow.
                    </p>

                    {/* Action Buttons */}

                    {/* CTA + Statistics */}

                    <div className="mt-14">

                        {/* Action Buttons */}

                        {/* <div className="flex flex-wrap items-center gap-6">

                            <button className="btn-primary min-w-[190px] h-14 px-8 text-base font-medium flex items-center justify-center">
                                Shop Collection
                            </button>

                            <button className="rounded-full border-2 border-amber-700 min-w-[170px] h-14 px-8 text-base font-medium text-amber-700 transition-all duration-300 hover:bg-amber-700 hover:text-white hover:-translate-y-1">
                                Learn More
                            </button>

                        </div> */}

                        {/* Statistics */}

                        <div className="mt-16 flex flex-wrap gap-8">

                            <div className="min-w-[190px] rounded-[32px] bg-white px-8 py-7 shadow-xl">

                                <h3 className="text-4xl text-center font-bold text-amber-700">
                                    15K+
                                </h3>

                                <p className="mt-2 text-center text-gray-500">
                                    Happy Customers
                                </p>

                            </div>

                            <div className="min-w-[190px] rounded-[32px] bg-white px-8 py-7 shadow-xl">

                                <h3 className="text-4xl text-center font-bold text-amber-700">
                                    50+
                                </h3>

                                <p className="mt-2 text-center text-gray-500">
                                    Natural Products
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Right */}

                <div className="relative flex justify-end">

                    <div className="absolute inset-0 scale-90 rounded-full bg-amber-100 blur-[120px] opacity-40"></div>

                    <img
                        src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1000"
                        alt="Luxury Skincare"
                        className="relative w-full max-w-[540px] rounded-[32px] object-cover shadow-[0_40px_80px_rgba(0,0,0,.18)] animate-float"
                    />

                </div>

            </div>

        </section>
    );
};

export default Hero;