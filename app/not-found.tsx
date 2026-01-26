export const metadata = {
  title: "404 Not Found | MultiGen",
  description: "The page you are looking for does not exist or has been moved. Return to MultiGen homepage.",
};
export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#1a0022] via-[#2a003a] to-[#0a0a1a] relative overflow-hidden">
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-[#ff0055]/30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-2/3 left-2/4 w-4 h-4 bg-[#00eaff]/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/5 w-3 h-3 bg-[#fff]/10 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl px-6 py-16">
        <div className="mb-8">
          <span className="block text-6xl font-extrabold text-white text-center leading-tight">
            <span className="bg-gradient-to-r from-[#ff0055] via-[#b86fff] to-[#00eaff] bg-clip-text text-transparent drop-shadow-[0_0_24px_#ff0055]">Error 404</span>
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#ff0055] via-[#b86fff] to-[#00eaff] bg-clip-text text-transparent drop-shadow-[0_0_24px_#ff0055]">Page Not Found</h1>
        <div className="text-lg md:text-xl text-white/80 text-center mb-8 max-w-xl mx-auto font-medium">The page you are looking for does not exist or has been moved.</div>
        <a href="/" className="mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#ff0055] via-[#b86fff] to-[#00eaff] text-white font-bold shadow-lg hover:scale-105 transition-all text-lg">Go Home</a>
      </div>
    </div>
  );
}
