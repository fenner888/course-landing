"use client"

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Moving particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500/60 rounded-full animate-float shadow-lg shadow-red-500/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <div
            key={`white-${i}`}
            className="absolute w-2 h-2 bg-white/50 rounded-full animate-float shadow-lg shadow-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-red-500/30 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-40 right-20 w-16 h-16 border-2 border-white/30 animate-spin-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-red-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(255, 255, 255)" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
        <line x1="0" y1="60%" x2="100%" y2="60%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
      </svg>
    </div>
  )
}

