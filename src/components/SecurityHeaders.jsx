import { useEffect } from 'react';

const SecurityHeaders = () => {
  useEffect(() => {
    // Set security-related meta tags
    const setMetaTag = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Content Security Policy (basic implementation for static site)
    setMetaTag('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https:;");
    
    // X-Frame-Options
    setMetaTag('X-Frame-Options', 'DENY');
    
    // X-Content-Type-Options
    setMetaTag('X-Content-Type-Options', 'nosniff');
    
    // Referrer Policy
    setMetaTag('referrer', 'strict-origin-when-cross-origin');
    
    // Permissions Policy
    setMetaTag('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
    
    // Robots meta tag
    setMetaTag('robots', 'index, follow');
    
    // Description for SEO
    setMetaTag('description', 'THE MOONSTONE Electronics - Multidisciplinary solutions provider specializing in electronics design, software development, architectural consultation, and 3D printing services in Sri Lanka.');
    
    // Keywords for SEO
    setMetaTag('keywords', 'electronics design, PCB design, embedded systems, software development, web design, architectural consultation, 3D printing, Sri Lanka, engineering services');
    
    // Author
    setMetaTag('author', 'THE MOONSTONE Electronics');
    
    // Viewport (should already be set, but ensuring it's correct)
    let viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.content = 'width=device-width, initial-scale=1.0';
    }
  }, []);

  return null; // This component doesn't render anything
};

export default SecurityHeaders;

