export default function FeaturesCard({ title, description }) {

    return <div className="flex flex-col px-8 py-7 rounded-md border border-white/10 bg-mist-900/80 text-gray-400">
        <h3 className="w-fit px-2 rounded-full uppercase bg-cyan-400/20 text-cyan-400 font-semibold">{title}</h3>
        <p> {description}</p>
    </div>;
}