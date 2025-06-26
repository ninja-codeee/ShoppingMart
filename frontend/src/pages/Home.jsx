import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0e0e0e] via-[#111215] to-[#0e0e0e] text-white px-6 py-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-24">

        {/* Hero Section */}
        <section className="text-center max-w-3xl space-y-8 mt-12">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-[#ffffff] via-[#c7f6ff] to-[#96e6ff] text-transparent bg-clip-text drop-shadow-md">
            Welcome to Sheryians Mart
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            Where clean code meets clean fashion. Tailored for devs who ship with style.
          </p>
          <Link to="/products">
            <button className="mt-4 px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:brightness-110 text-white rounded-full text-base font-medium shadow-xl transition duration-300 ease-in-out hover:shadow-indigo-500/30">
              🔎 Explore Products
            </button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="w-full grid md:grid-cols-3 gap-8 px-4">
          {[
            { title: "Minimal Fits", desc: "Streetwear that vibes with your stack.", emoji: "🧥" },
            { title: "Curated Tech", desc: "No junk — just sleek, useful gear.", emoji: "💻" },
            { title: "Creator Tools", desc: "Boost productivity with elegant tools.", emoji: "🛠️" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-zinc-800/30 border border-zinc-700/40 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition">{item.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="w-full max-w-3xl bg-gradient-to-br from-zinc-900/70 to-zinc-800/60 border border-zinc-700/40 backdrop-blur-md p-10 rounded-3xl text-center shadow-lg space-y-5">
          <h2 className="text-2xl font-semibold text-white">
            🚀 Join the Movement
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Sign up today and be part of a marketplace crafted for creators and devs like you.
          </p>
          <Link to="/register">
            <button className="mt-2 px-6 py-2.5 bg-white/90 text-black rounded-full font-semibold text-sm hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg">
              ✍️ Create Account
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
