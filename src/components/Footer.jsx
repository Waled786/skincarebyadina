import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaEnvelope,
} from "react-icons/fa";

import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#171717] text-white pt-32 pb-16">

            <div className="container">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 pb-24">

                    {/* Brand */}

                    <div>

                        <h2 className="text-4xl font-bold tracking-wide">
                            Glow
                            <span className="text-amber-500">
                                Essence
                            </span>
                        </h2>

                        <p className="mt-6 max-w-sm text-gray-300 leading-8 text-[16px]">
                            Premium skincare crafted with botanical ingredients,
                            modern science and elegant design to create a luxurious
                            self-care experience.
                        </p>

                    </div>

                    {/* Navigation */}

                    <div>

                        <h3 className="text-2xl font-semibold mb-7">
                            Navigation
                        </h3>

                        <ul className="space-y-5">

                            {[
                                ["Home", "#home"],
                                ["Products", "#products"],
                                ["About", "#about"],
                                ["Contact", "#contact"],
                            ].map(([title, link]) => (

                                <li key={title}>

                                    <a
                                        href={link}
                                        className="text-gray-400 hover:text-amber-500 hover:pl-2 transition-all duration-300"
                                    >
                                        {title}
                                    </a>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-2xl font-semibold mb-7">
                            Contact
                        </h3>

                        <div className="space-y-6">

                            <div className="flex items-center gap-4 text-gray-400">

                                <FaEnvelope className="text-lg text-amber-500 flex-shrink-0" />

                                <span>
                                    hello@glowessence.com
                                </span>

                            </div>

                            <div className="flex items-center gap-4 text-gray-400">

                                <FaPhoneAlt className="text-lg text-amber-500 flex-shrink-0" />

                                <span>
                                    +92 314 6090365
                                </span>

                            </div>

                            <div className="flex items-center gap-4 text-gray-400">

                                <FaMapMarkerAlt className="text-lg text-amber-500 flex-shrink-0" />

                                <span>
                                    Mochi Wala Road, Gojra, TTS
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* Social */}

                    <div>

                        <h3 className="text-2xl font-semibold mb-7">
                            Stay Connected
                        </h3>

                        <div className="flex gap-5">

                            {[FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp].map((Icon, index) => (

                                <a
                                    key={index}
                                    href="#"
                                    className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-lg text-gray-300 hover:bg-amber-600 hover:border-amber-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
                                >
                                    <Icon />
                                </a>

                            ))}

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © 2026 GlowEssence. All Rights Reserved.
                    </p>

                    <p className="text-gray-500 text-sm text-center md:text-right">
                        Designed & Developed by Waleed • 007
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;