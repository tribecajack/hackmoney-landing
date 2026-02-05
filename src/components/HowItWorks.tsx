import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Submit Intent',
    description: 'Specify your desired swap with amount, tokens, and preferences. Funds are locked non-custodially.',
  },
  {
    step: '02',
    title: 'Route Selection',
    description: 'System attempts Maker quote first for best price. Falls back to Uniswap v4 or bridges via LI.FI as needed.',
  },
  {
    step: '03',
    title: 'Lifecycle Processing',
    description: 'Track your trade: Committed → Released → Bridging → Executed. Real-time updates at every stage.',
  },
  {
    step: '04',
    title: 'Atomic Execution',
    description: 'Trade executes atomically with full guarantee. Receive your tokens or complete rollback.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simple process, powerful execution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent -translate-x-8" />
              )}

              <div className="relative">
                <div className="text-6xl font-bold bg-gradient-to-br from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-4 opacity-50">
                  {item.step}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-400" />
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to experience best price execution?
              </h3>
              <p className="text-gray-400">
                Join the sophisticated cohort of advanced traders.
              </p>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl font-semibold text-gray-900 hover:shadow-xl hover:shadow-orange-500/50 transition-all whitespace-nowrap">
              Read Docs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
