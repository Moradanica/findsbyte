import FlickeringDots from "../FlickeringDots";

export default function Hero({ offerRef }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* CONTENT */}

      <div className="relative text-center max-w-3xl px-6">
        {/* TOP LABEL */}
        <p className="text-xs tracking-[0.35em] text-cyan-400 mb-6">
          PREMIUM DOMAIN FOR SALE
        </p>

        {/* TITLE */}
        <h1 className="text-[74px] md:text-[106px] font-bold leading-none tracking-wider font-sans">
          <span className="relative inline-block">
            {/* glow layers */}
            <span className="absolute inset-0 bg-linear-to-r from-cyan-50 via-white to-cyan-500 opacity-50 blur-2xl animate-glow" />

            {/* actual text */}
            <span className="relative z-10">
              findsbyte<span className="text-cyan-400">.shop</span>
            </span>
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 text-sm md:text-base text-gray-400/70 leading-relaxed">
          The perfect brand for your next e-commerce or tech venture.
          <br />
          Own it before someone else does.
        </p>

        {/* CTA BUTTON */}
        <button onClick={() => {
          offerRef.current?.scrollIntoView({behavior: "smooth"})
        }} className="mt-8 px-9 py-4 tracking-wide rounded-full bg-cyan-400 text-black font-semibold hover:shadow-[0_0_45px_rgba(0,212,255,0.5)] hover:scale-[1.02] cursor-pointer  transition-all duration-500 ease-in-out">
          MAKE AN OFFER
        </button>

        {/* CONTACT */}
        {/* <p className="mt-3 text-xs text-gray-500">
          Contact Us
        </p> */}

        {/* PILLS */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["Instant Transfer", "Secure Escrow", "Negotiable Price"].map((item) => (
            <span
              key={item}
              className="mt-6 px-6 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-gray-400/70"
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}