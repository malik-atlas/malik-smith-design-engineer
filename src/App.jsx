import React from 'react';

// =========================================================
// 1. DYNAMIC COMPONENT LIBRARY (Isolate & Duplicate to Reuse)
// =========================================================

// Component A: Standard Profile Header Card
const ProfileHeader = ({ username, subtitle }) => (
  <div className="text-center space-y-2 pb-4">
    <div className="w-24 h-24 mx-auto rounded-full bg-slate-800 ring-4 ring-slate-800 border-2 border-emerald-400 flex items-center justify-center font-mono text-xs text-slate-500">
      [AVATAR]
    </div>
    <h1 className="text-xl font-bold tracking-tight text-white">{username}</h1>
    <p className="text-sm text-slate-400 max-w-xs mx-auto">{subtitle}</p>
  </div>
);

// Component B: Minimal Icon Bar
const SocialIconBar = () => (
  <div className="flex justify-center gap-6 text-slate-500 text-xs font-mono py-2">
    <a href="#" className="hover:text-emerald-400 transition-colors">INSTAGRAM</a>
    <a href="#" className="hover:text-emerald-400 transition-colors">YOUTUBE</a>
    <a href="#" className="hover:text-emerald-400 transition-colors">TWITTER</a>
  </div>
);

// Component C: Standard Functional Navigation Link
const QuickLinkButton = ({ title, label, destination }) => (
  <a 
    href={destination} 
    className="block w-full p-4 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 rounded-2xl transition-all group"
  >
    <div className="flex items-center justify-between">
      <div className="text-left">
        <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white">{title}</h3>
        {label && <p className="text-xs text-slate-400 mt-0.5">{label}</p>}
      </div>
      <span className="text-emerald-400 transform group-hover:translate-x-1 transition-transform">→</span>
    </div>
  </a>
);

// Component D: Rich Split-Row Product Card (Left Image, Right Conversion Callout)
const ProductSplitCard = ({ title, price, imageUrl }) => (
  <div className="w-full grid grid-cols-12 gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-3 items-center">
    <div className="col-span-4 aspect-square bg-slate-800 rounded-xl flex items-center justify-center font-mono text-[10px] text-slate-500 overflow-hidden">
      {imageUrl ? <img src={imageUrl} alt={title} className="w-full h-full object-cover" /> : '[IMAGE]'}
    </div>
    <div className="col-span-8 text-left space-y-2">
      <div>
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">Featured Offer</h4>
        <h3 className="text-sm font-semibold text-white tracking-tight">{title}</h3>
      </div>
      <div className="inline-block px-2.5 py-1 bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold rounded-lg">
        {price}
      </div>
    </div>
  </div>
);

// Component E: Editorial Visual Feature (Full Width Canvas Banner)
const VisualBannerCard = ({ title, subtitle }) => (
  <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden text-left">
    <div className="h-40 bg-slate-800 flex items-center justify-center text-xs font-mono text-slate-500">
      [HERO ARTWORK CANVAS]
    </div>
    <div className="p-4 space-y-1">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="text-xs text-slate-400">{subtitle}</p>
    </div>
  </div>
);

// Component F: High-Impact Direct Stripe Checkout Link (Monolithic CTA)
const PremiumCheckoutButton = ({ priceText, ctaLabel, onClick }) => (
  <button 
    onClick={onClick}
    className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-widest rounded-2xl shadow-xl shadow-emerald-950/20 active:scale-[0.99] transition-all"
  >
    {ctaLabel} — {priceText}
  </button>
);


// =========================================================
// 2. RUNTIME PAGE LAYOUT CONFIGURATION ENGINE
// =========================================================
export default function App() {
  
  const initiateCheckoutPipeline = () => {
    // Drop your Stripe payment link redirect here 
    window.location.href = "https://checkout.stripe.com/mock-link";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-slate-800 flex flex-col justify-between">
      
      {/* Centered Mobile-First Content Hub Block */}
      <main className="w-full max-w-md mx-auto px-4 pt-16 pb-24 space-y-6">
        
        {/* Render: Identity Block */}
        <ProfileHeader 
          username="@orion.architect" 
          subtitle="Production-ready application wireframes & design systems strategy." 
        />
        
        {/* Render: Global Network Matrix */}
        <SocialIconBar />

        {/* Render: High-Intent Conversions Container */}
        <div className="space-y-3 pt-2">
          
          <PremiumCheckoutButton 
            ctaLabel="Get Bio-Link Boilerplate Template" 
            priceText="$150"
            onClick={initiateCheckoutPipeline}
          />

          <ProductSplitCard 
            title="Premium Modular Component Library V1" 
            price="Flat One-Time Fee"
          />

          <QuickLinkButton 
            title="Access Production Portfolio" 
            label="Explore case studies and live application builds"
            destination="#portfolio"
          />

          <QuickLinkButton 
            title="Schedule Consultation Pipeline" 
            label="Audit interface systems, tokens, and build specs"
            destination="#consult"
          />

          <VisualBannerCard 
            title="System Architecture Guidelines" 
            subtitle="Configuring ultra-fast frontend rendering components."
          />

        </div>
      </main>

      {/* Persistent Technical Node Footer */}
      <footer className="w-full text-center py-6 border-t border-slate-900 bg-slate-950/50 font-mono text-[10px] text-slate-600 tracking-wider">
        CORE MODULE ACTIVE // LIVE DEPLOYMENT TEST &copy; {new Date().getFullYear()}
      </footer>

    </div>
  );
}