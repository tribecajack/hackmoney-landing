import { Shield, TrendingUp, Zap, Lock, Repeat, Gauge } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Best Price Execution',
    description: 'Intelligent routing prioritizes RFQ quotes for optimal pricing, falling back to Uniswap v4 when needed.',
  },
  {
    icon: Shield,
    title: 'Gatekeeper Security',
    description: 'Non-custodial funds locking with lifecycle-gated execution ensures your assets are always secure.',
  },
  {
    icon: Zap,
    title: 'Atomic Swaps',
    description: 'Ultra-fast execution with atomic guarantees. Your trade succeeds completely or not at all.',
  },
  {
    icon: Repeat,
    title: 'Cross-Chain Bridging',
    description: 'Seamless LI.FI integration for bridging assets across multiple chains with optimal routes.',
  },
  {
    icon: Lock,
    title: 'Intent Lifecycle',
    description: 'Track your trade through every stage: Committed → Released → Bridging → Executed.',
  },
  {
    icon: Gauge,
    title: 'Real-Time Updates',
    description: 'Live receipt updates as your intent progresses through the lifecycle stages.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for Modern DeFi
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade infrastructure with consumer-friendly experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
