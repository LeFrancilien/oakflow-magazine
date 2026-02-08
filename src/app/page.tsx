import { VIDEOS } from "@/lib/data";
import { BentoGrid } from "@/components/bento-grid";

export default function Home() {
  // In a real app we might fetch this data, but here it's static
  const videos = VIDEOS;

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-gray-900 pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F5F5F7]/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">OakflowAI<span className="text-gray-400 font-normal">.magazine</span></h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-500">
            <a href="#" className="text-black transition-colors">À la Une</a>
            <a href="#" className="hover:text-black transition-colors">Infrastructure</a>
            <a href="#" className="hover:text-black transition-colors">Agents</a>
            <a href="#" className="hover:text-black transition-colors">Vibecoding</a>
          </nav>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors flex items-center gap-2 shadow-sm">
            S'abonner
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
          </button>
        </div>
      </header>

      {/* Hero Section / Date */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col space-y-2 text-center items-center">
          <span className="text-sm font-medium text-gray-400 uppercase tracking-widest border border-gray-200 px-3 py-1 rounded-full bg-white">Édition Hebdomadaire</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight">
            L'essentiel de l'IA,<br className="hidden md:block" /> sélectionné par <span className="text-gray-500 italic font-serif">OakflowAI</span>
          </h2>
        </div>
      </div>

      {/* Main Grid */}
      <BentoGrid videos={videos} />

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-sm text-gray-400 border-t border-gray-200 mt-20">
        <p>© 2026 Antigravity Magazine. Curation par IA & Humains.</p>
      </footer>
    </main>
  );
}
