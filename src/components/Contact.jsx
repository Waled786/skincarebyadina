import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-28 lg:py-32 bg-[#FCFAF8]"
        >
            <div className="container">

                {/* Heading */}

                <div className="text-center max-w-3xl mx-auto">

                    <span className="inline-block uppercase tracking-[6px] text-amber-700 font-semibold mb-4">
                        Contact Us
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        We'd Love To Hear
                        <br />
                        From You
                    </h2>

                    <p className="mt-6 text-lg text-gray-600 leading-8">
                        Whether you have a question about our skincare products,
                        partnerships or simply want to say hello, we're always
                        happy to connect.
                    </p>

                </div>

                {/* Contact Cards */}

                <div className="grid md:grid-cols-3 gap-8 mt-20">

                    <div className="group bg-white rounded-[32px] border border-gray-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">

                        <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 flex items-center justify-center text-2xl text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300">
                            <FaEnvelope />
                        </div>

                        <h3 className="text-xl font-bold mt-6">
                            Email
                        </h3>

                        <p className="text-gray-600 mt-3">
                            hello@glowessence.com
                        </p>

                    </div>

                    <div className="group bg-white rounded-[32px] border border-gray-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">

                        <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 flex items-center justify-center text-2xl text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300">
                            <FaPhoneAlt />
                        </div>

                        <h3 className="text-xl font-bold mt-6">
                            Phone
                        </h3>

                        <p className="text-gray-600 mt-3">
                            +92 314 6090365
                        </p>

                    </div>

                    <div className="group bg-white rounded-[32px] border border-gray-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">

                        <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 flex items-center justify-center text-2xl text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300">
                            <FaMapMarkerAlt />
                        </div>

                        <h3 className="text-xl font-bold mt-6">
                            Location
                        </h3>

                        <p className="text-gray-600 mt-3">
                            Mochi Wala Road, Gojra, TTK Singh
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;