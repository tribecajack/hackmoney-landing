import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10" />

      <nav className="relative z-10 px-6 py-6 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/c7ce92f4-a70a-4561-9a3d-aa87165f0515.png" alt="Intentra" className="h-10 w-10" />
          <span className="text-2xl font-bold text-white">Intentra</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
          <a href="#showcase" className="text-gray-300 hover:text-white transition-colors">Product</a>
          <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg font-medium text-gray-900 hover:shadow-lg hover:shadow-orange-500/50 transition-all">
            Get Started
          </button>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-8 animate-pulse">
            <Zap className="w-4 h-4" />
            <span>Powered by Ultra Labs • Live backend (Sepolia)</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Best Price.
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Every Trade.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            Intelligent intent execution with atomic Uniswap v4 fallback and LI.FI bridging.
            Guaranteed best pricing when RFQ is available, gated by intent lifecycle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="http://localhost:6969/"
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl font-semibold text-gray-900 hover:shadow-2xl hover:shadow-orange-500/50 transition-all flex items-center gap-2 text-lg"
            >
              Launch App
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl font-semibold text-white hover:bg-gray-800 transition-all text-lg">
              Read Documentation
            </button>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$2.4B+</div>
              <div className="text-gray-400">Volume Processed</div>
            </div>
            <div className="text-center border-l border-r border-gray-800">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
    </div>
  );
}
