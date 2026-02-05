import { Smartphone, Terminal } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section id="showcase" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Seamless Trading Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mobile-first design with powerful terminal views for advanced users
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Smartphone className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Mobile-Optimized Interface
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Trade anywhere, anytime with our intuitive mobile interface. Monitor your intent lifecycle,
                  check gatekeeper status, and track execution in real-time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Terminal className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Advanced Terminal View
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Power users get detailed trade receipts with live intent details, guarantees,
                  scenario tracking, and complete lifecycle event history.
                </p>
              </div>
            </div>

            <div className="p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-300">Live Status</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Gatekeeper:</span>
                  <span className="text-white font-medium">Locked (non-custodial)</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Lifecycle:</span>
                  <span className="text-orange-400 font-medium">Committed → Released → Bridging</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Route:</span>
                  <span className="text-white font-medium">Choosing route...</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 blur-3xl rounded-full" />
            <img
              src="/banner.png"
              alt="Intentra Platform"
              className="relative z-10 w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
