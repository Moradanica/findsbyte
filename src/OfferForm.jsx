import { useState } from "react";

const labels = [
    {
        id: "name",
        name: "your name",
        placeholder: "Jane Smith"
    },
    {
        id: "email",
        name: "email address",
        placeholder: "jane@company.com"
    },
    {
        id: "offer",
        name: "offer amount (USD)",
        placeholder: "e.g. $500"
    }
]

export default function OfferForm({ offerRef }) {
    const [formData, setFormData] = useState({});
    return (
        <div ref={offerRef} className="flex items-center justify-center px-10 w-sm md:w-full min-h-screen">
            <div className="relative z-10 px-8 py-7 rounded-md border border-white/10 bg-[#0b0e1b]">
                <form className="flex flex-col" action="">
                    <h4 className="text-[25px] font-semibold">Make an offer</h4>
                    <p className="text-gray-500">All serious offers considered. Response within 24 hours.</p>

                    {labels.map(({ id, name, placeholder }) => {
                        return <div className="flex flex-col py-4">
                            <label className="text-[13px] font-semibold text-gray-500 uppercase pb-2" htmlFor={name}>
                                {name}
                            </label>
                            <input id={id} name={id} type="text"
                                placeholder={placeholder}
                                className="p-3 text-[13px] rounded-md border text-gray-400 border-white/10 focus:outline-3 focus:border-2 focus:border-blue-400"
                                onChange={(e) => setFormData({
                                    ...formData,
                                    [id]: e.target.value,
                                })}
                            />
                        </div>

                    })}
                    <button onClick={() => {
                        const subject = "New Domain Offer";
                        const body = `Name: ${formData.name || ""}%0D%0AEmail: ${formData.email || ""}%0D%0AOffer: $${formData.offer || ""}`;
                        window.location.href =
                            `mailto:moradanica@gmail.com?subject=${subject}&body=${body}`;
                    }}
                        className="uppercase p-3 w-full rounded-full bg-cyan-400 text-black text-sm font-semibold hover:shadow-[0_0_45px_rgba(0,212,255,0.3)] transition-all duration-300
  hover:scale-[1.02] cursor-pointer ease-in-out">Submit Offer</button>
                </form>
                <p className="mt-4 text-xs text-center text-gray-500">
                    Having trouble? Email me at{" "}
                    <a
                        href="mailto:moradanica@gmail.com"
                        className="text-cyan-400 hover:underline"
                    >
                        moradanica@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
}
