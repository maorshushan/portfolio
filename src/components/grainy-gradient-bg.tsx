import React from 'react';

interface GrainyGradientBgProps {
  children: React.ReactNode;
  className?: string;
  appear?: boolean;
}

const GrainyGradientBg: React.FC<GrainyGradientBgProps> = ({ children, className = '', appear = true }) => {
  return (
    <>
    {
      appear && (
        <div className={`relative min-h-screen overflow-hidden bg-linen ${className}`}>
      {/* Grainy Mesh Gradient Background */}
      <div className="absolute inset-0">
        {/* Base gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-xanthous/20 via-razzmatazz/15 to-nonphotoblue/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-caribbeancurrent/15 via-linen/10 to-xanthous/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-razzmatazz/10 via-nonphotoblue/15 to-caribbeancurrent/20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-xanthous/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-razzmatazz/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-nonphotoblue/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-caribbeancurrent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
        
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '500px 500px',
          }}></div>
        </div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-linen/5 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
      )
    }
    </>
  );
};

export default GrainyGradientBg;
