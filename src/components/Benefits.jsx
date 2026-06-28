import {
    FaLeaf,
    FaRegHeart,
    FaSpa,
    FaRecycle,
} from "react-icons/fa";

const data = [
    {
        icon: <FaLeaf size={40} />,
        title: "Natural Ingredients",
        text: "Botanical extracts carefully selected to nourish and protect every skin type.",
    },
    {
        icon: <FaRegHeart size={40} />,
        title: "Cruelty Free",
        text: "Every formula is ethically crafted and never tested on animals.",
    },
    {
        icon: <FaSpa size={40} />,
        title: "Dermatologist Tested",
        text: "Professionally tested formulas designed for safe everyday skincare.",
    },
    {
        icon: <FaRecycle size={40} />,
        title: "Eco Friendly",
        text: "Sustainable packaging that cares for your skin and our planet.",
    },
];

const Benefits = () => {
    return (
        <section className="bg-[#FCFAF8] py-28 lg:py-32">

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Heading */}

                <div className="max-w-3xl mx-auto text-center">

                    <span className="inline-block mb-4 font-semibold uppercase tracking-[6px] text-amber-700">
                        Why Choose Us
                    </span>

                    <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        Skincare You Can Trust
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Combining nature-inspired ingredients with modern skincare
                        science to create luxurious products that deliver visible
                        results.
                    </p>

                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {data.map((item, index) => (

                        <div
                            key={index}
                            className="group rounded-[32px] border border-gray-100 bg-white p-9 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-amber-200 hover:shadow-2xl"
                        >

                            <div className="flex h-[88px] w-[88px] items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition-all duration-300 group-hover:bg-amber-700 group-hover:text-white">

                                {item.icon}

                            </div>

                            <h3 className="mt-8 text-2xl font-bold leading-tight">
                                {item.title}
                            </h3>

                            <p className="mt-5 leading-8 text-gray-600">
                                {item.text}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Benefits;