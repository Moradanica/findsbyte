const labels = [
    {
        name: "your name",
        placeholder: "Jane Smith"
    },
    {
        name: "email address",
        placeholder: "jane@company.com"
    },
    {
        name: "offer amount (USD)",
        placeholder: "e.g. $500"
    }
]

export default function OfferForm() {
    return (
        <div className="flex items-center justify-center w-full min-h-screen">
            <div className="relative z-10 px-8 py-7 rounded-md border border-white/10 bg-[#0b0e1b]">
                <form className="flex flex-col" action="">
                    <h4 className="text-[25px] font-semibold">Make an offer</h4>
                    <p className="text-gray-500">All serious offers considered. Response within 24 hours.</p>

                    {labels.map(({ name, placeholder }) => {
                        return <div className="flex flex-col py-4">
                            <label className="text-[13px] font-semibold text-gray-500 uppercase pb-2" htmlFor={name}>
                                {name}
                            </label>
                            <input id={name} name={name} type="text"
                                placeholder={placeholder}
                                className="p-3 text-[13px] rounded-md border text-gray-400 border-white/10 focus:outline-3 focus:border-2 focus:border-blue-400"
                            />
                        </div>

                    })}
                    <button className="uppercase p-3 w-full rounded-full bg-cyan-400 text-black text-sm font-semibold hover:shadow-[0_0_45px_rgba(0,212,255,0.3)] transition-all duration-300
  hover:scale-[1.02] cursor-pointer ease-in-out">Submit Offer</button>
                </form>
            </div>
        </div>
    );
}
