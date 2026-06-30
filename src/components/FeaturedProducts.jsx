import products from "../data/products";
import { FaArrowRight } from "react-icons/fa";

const FeaturedProducts = () => {
    return (
        <section
            id="products"
            className="py-28 lg:py-32 bg-gradient-to-b from-white via-[#fdfbf8] to-[#faf7f2]"
        >
            <div className="container">

                {/* Heading */}

                <div className="mb-20 text-center">

                    <span className="inline-block mb-4 font-semibold uppercase tracking-[6px] text-amber-700">
                        Featured Collection
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Our Best Sellers
                    </h2>

                    <div className="mt-6 flex justify-center">
                        <p className="max-w-2xl text-center text-lg leading-9 text-gray-600">
                            Discover luxurious skincare products crafted with premium botanical
                            ingredients to nourish, hydrate and reveal naturally radiant skin.
                        </p>
                    </div>

                </div>

                {/* Product Cards */}

                <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {products.map((product, index) => (

                        <div
                            key={product.id}
                            className="group flex flex-col overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-amber-200 hover:shadow-2xl"
                        >

                            {/* Image */}

                            <div className="relative aspect-[4/5] overflow-hidden">

                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <span className="absolute top-6 left-6 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold shadow backdrop-blur-md">
                                    0{index + 1}
                                </span>

                            </div>

                            {/* Content */}

                            <div className="flex flex-1 flex-col items-center px-8 py-9 text-center">

                                <span className="text-sm font-semibold uppercase tracking-[3px] text-amber-700">
                                    {product.category}
                                </span>

                                <h3 className="mt-4 text-3xl font-bold leading-tight">
                                    {product.title}
                                </h3>

                                <p className="mt-6 flex-1 max-w-[280px] leading-8 text-gray-600">
                                    Carefully formulated using nature-inspired ingredients
                                    that deeply nourish, protect and restore your skin's
                                    healthy glow.
                                </p>

                                <div className="mt-10 w-full border-t border-gray-100 pt-8">

                                    <div className="flex items-center justify-center gap-25">

                                        <span className="rounded-full bg-amber-100 px-5 py-3 text-[12px] font-semibold tracking-wide text-amber-700">
                                            Premium Care
                                        </span>

                                        <button className="group/button flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-amber-700 transition-all duration-300 hover:bg-amber-50">

                                            <span>Explore</span>

                                            <FaArrowRight className="transition-transform duration-300 group-hover/button:translate-x-1" />

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default FeaturedProducts;