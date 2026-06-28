import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#171717] text-white pt-20 pb-8">

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 pb-14">

                    {/* Brand */}

                    <div>

                        <h2 className="text-4xl font-bold tracking-wide">
                            Glow
                            <span className="text-amber-500">
                                Essence
                            </span>
                        </h2>

                        <p className="mt-6 max-w-sm text-gray-400 leading-7">
                            Premium skincare crafted with botanical ingredients,
                            modern science and elegant design to create a luxurious
                            self-care experience.
                        </p>

                    </div>

                    {/* Navigation */}

                    <div>

                        <h3 className="text-xl font-semibold mb-6">
                            Navigation
                        </h3>

                        <ul className="space-y-4">

                            {[
                                ["Home", "#home"],
                                ["Products", "#products"],
                                ["About", "#about"],
                                ["Contact", "#contact"],
                            ].map(([title, link]) => (

                                <li key={title}>

                                    <a
                                        href={link}
                                        className="text-gray-400 hover:text-amber-500 transition-all duration-300 hover:pl-2"
                                    >
                                        {title}
                                    </a>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-xl font-semibold mb-6">
                            Contact
                        </h3>

                        <div className="space-y-5">

                            <div className="flex items-center gap-3 text-gray-400">

                                <FaEnvelope className="text-amber-500" />

                                <span>hello@glowessence.com</span>

                            </div>

                            <div className="flex items-center gap-3 text-gray-400">

                                <FaPhoneAlt className="text-amber-500" />

                                <span>+92 300 1234567</span>

                            </div>

                            <div className="flex items-center gap-3 text-gray-400">

                                <FaMapMarkerAlt className="text-amber-500" />

                                <span>Lahore, Pakistan</span>

                            </div>

                        </div>

                    </div>

                    {/* Social */}

                    <div>

                        <h3 className="text-xl font-semibold mb-6">
                            Stay Connected
                        </h3>

                        <div className="flex gap-4">

                            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope].map((Icon, index) => (

                                <a
                                    key={index}
                                    href="#"
                                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:bg-amber-600 hover:border-amber-600 hover:text-white transition-all duration-300"
                                >
                                    <Icon />
                                </a>

                            ))}

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">

                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © 2026 GlowEssence. All Rights Reserved.
                    </p>

                    <p className="text-gray-500 text-sm text-center md:text-right">
                        Designed & Developed with React • Tailwind CSS
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;