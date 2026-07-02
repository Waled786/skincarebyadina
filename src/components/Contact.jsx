import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-[#FCFAF8] py-32 lg:py-40"
        >
            <div className="container">

                {/* Heading */}

                <div className="mx-auto flex max-w-25xl flex-col items-center text-center">

                    <span className="mb-4 inline-block font-semibold uppercase tracking-[6px] text-amber-700">
                        Contact Us
                    </span>

                    <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        We'd Love To Hear
                        <br />
                        From You
                    </h2>

                    <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-600">
                        Whether you have a question about our skincare products,
                        partnerships or simply want to say hello, we're always
                        happy to connect.
                    </p>

                </div>

                {/* Contact Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-3">

                    {/* Email */}

                    <div className="group rounded-[32px] border border-gray-300 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-2xl">

                        <div className="mb-2 flex items-center justify-center gap-2">

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-2xl text-amber-700 transition-all duration-300 group-hover:bg-amber-700 group-hover:text-white">
                                <FaEnvelope />
                            </div>

                            <h3 className="text-2xl font-bold">
                                Email
                            </h3>

                        </div>

                        <p className="mx-auto max-w-25xl break-words text-lg leading-8 text-gray-600">
                            hello@glowessence.com
                        </p>

                    </div>

                    {/* Phone */}

                    <div className="group rounded-[32px] border border-gray-300 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-2xl">

                        <div className="mb-6 flex items-center justify-center gap-4">

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-2xl text-amber-700 transition-all duration-300 group-hover:bg-amber-700 group-hover:text-white">
                                <FaPhoneAlt />
                            </div>

                            <h3 className="text-2xlfont-bold">
                                Phone
                            </h3>

                        </div>

                        <p className="mx-auto max-w-25xl text-lg leading-8 text-gray-600">
                            +92 314 6090365
                        </p>

                    </div>

                    {/* Location */}

                    <div className="group rounded-[32px] border border-gray-300 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-2xl">

                        <div className="mb-6 flex items-center justify-center gap-4">

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-2xl text-amber-700 transition-all duration-300 group-hover:bg-amber-700 group-hover:text-white">
                                <FaMapMarkerAlt />
                            </div>

                            <h3 className="text-2xl font-bold">
                                Location
                            </h3>

                        </div>

                        <p className="mx-auto max-w-25xl text-lg leading-8 text-gray-600">
                            Mochi Wala Road,<br />
                            Gojra, Toba Tek Singh
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;