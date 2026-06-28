import { FaLeaf } from "react-icons/fa";

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-sm">

            <nav className="container h-22 flex items-center justify-between">

                {/* Logo */}
                <a href="#home" className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center">
                        <FaLeaf className="text-xl text-amber-700" />
                    </div>

                    <h1 className="text-2xl font-bold tracking-wide">
                        Skin Care
                        <span className="text-amber-700">
                            <br /> Dr. Adina
                        </span>
                    </h1>

                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-14 font-medium text-[15px] text-gray-700">

                    <li>
                        <a href="#home" className="hover:text-amber-700 transition-colors duration-300">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#products" className="hover:text-amber-700 transition-colors duration-300">
                            Products
                        </a>
                    </li>

                    <li>
                        <a href="#about" className="hover:text-amber-700 transition-colors duration-300">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="hover:text-amber-700 transition-colors duration-300">
                            Contact
                        </a>
                    </li>

                </ul>

                {/* CTA */}
                <a
                    href="#contact"
                    className="hidden md:flex items-center justify-center w-25 h-12 rounded-full bg-amber-700 text-white text-base font-medium shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-amber-800"
                >
                    Let's Talk
                </a>

            </nav>

        </header>
    );
};

export default Navbar;