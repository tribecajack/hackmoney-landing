import { ArrowRight, BookOpen, Github } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <img
            src="/c7ce92f4-a70a-4561-9a3d-aa87165f0515.png"
            alt="Intentra Logo"
            className="w-24 h-24 mx-auto mb-6"
          />
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Trade Smarter with{' '}
          <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Intentra
          </span>
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Best price when RFQ is available, with atomic Uniswap v4 fallback and LI.FI bridging.
          Gated by intent lifecycle.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="http://localhost:6969/"
            className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl font-semibold text-gray-900 hover:shadow-2xl hover:shadow-orange-500/50 transition-all flex items-center gap-2 text-lg"
          >
            Launch Application
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl font-semibold text-white hover:bg-gray-800 transition-all flex items-center gap-2 text-lg">
            <BookOpen className="w-5 h-5" />
            Documentation
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span>Live on Sepolia</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Non-custodial</span>
          </div>
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4" />
            <span>Open Source</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Shield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
