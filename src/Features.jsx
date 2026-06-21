import FeaturesCard from "./FeaturesCard";

const features = [
    {
        id: 1,
        title: "Memorable",
        description: "Short, punchy, and instantly recognizable. Sticks in the mind of any customer."
    },
    {
        id: 2,
        title: "Versatile",
        description: "Perfect for e-commerce, tech tools, deal aggregators, or digital marketplaces."
    },
    {
        id: 3,
        title: ".shop TLD",
        description: "The premium commercial extension that signals a buying destination to every visitor."
    }
];

export default function Features() {
    return (
        <div className="relative z-10 py-24">
            <div className="flex flex-col min-h-screen w-full items-center justify-center text-white">
                <h2 className="text-[64px] md:text-[30px]">Why <span className="text-cyan-500"> findsbyte.shop</span>?</h2>
                <div className=" flex mx-8 my-8 gap-5 max-w-3/4">
                    {features.map(({ id, title, description }) => {
                        return <FeaturesCard key={id} title={title} description={description} />
                    })}
                </div>



            </div>
        </div>

    )

}