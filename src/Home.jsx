import "./App.css";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-xl w-full">

        {/* Brand */}
        <h1 className="text-5xl font-bold tracking-tight">
          Findsbyte
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-400 text-lg">
          Curated useful everyday essentials.
        </p>

        {/* Badge */}
        <div className="mt-6 inline-block px-4 py-1 text-sm bg-white/10 rounded-full text-gray-300">
          Coming Soon
        </div>

        {/* Email capture */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-1 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-white/30"
          />
          <button className="px-6 py-1 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition">
            Notify me
          </button>
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-gray-600">
          © 2026 Findsbyte. All rights reserved.
        </p>

      </div>
    </main>
  );
}