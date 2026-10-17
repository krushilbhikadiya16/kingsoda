
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const startPosition = window.pageYOffset;
    const duration = 1800;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      
      window.scrollTo(0, startPosition * (1 - ease(Math.min(progress / duration, 1))));
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const reviews = [
    { 
      name: "Chirag Savani", 
      text: "I love the creaminess of their softies. The Chocolate Swirl is definitely my favorite treat here!", 
      rating: 5,
      initial: "C",
      color: "bg-pink-600"
    },
    { 
      name: "Deepan Kheni", 
      text: "Quick service and a huge list of flavors to choose from. Great place to visit with family.", 
      rating: 5,
      initial: "D",
      color: "bg-yellow-600"
    },
    { 
      name: "Parth Savaliya", 
      text: "The hygiene and cleanliness are top-notch. It's my go-to spot for a refreshing drink every evening.", 
      rating: 5,
      initial: "P",
      color: "bg-purple-600"
    },
    { 
      name: "Taksh Virani", 
      text: "Mint Mojito is my new absolute favorite! The freshness of mint is unmatched.", 
      rating: 5,
      initial: "T",
      color: "bg-green-600"
    },
    { 
      name: "Keyur Shihora", 
      text: "Affordable prices and premium taste. King Fruit Soda & Softy truly lives up to its name.", 
      rating: 5,
      initial: "K",
      color: "bg-orange-600"
    },
    { 
      name: "Tushar Kamani", 
      text: "The carbonation level is perfect. Each sip is a burst of freshness. Best in Surat!", 
      rating: 5,
      initial: "T",
      color: "bg-red-600"
    }
  ];

  const googleReviewsUrl = "https://www.google.com/search?q=King+Fruit+Soda+%26+Softy&rlz=1C1ONGR_enIN1187AU1187&oq=kin&gs_lcrp=EgZjaHJvbWUqCAgCEEUYJxg7MgYIABBFGDwyBggBEEUYPDIICAIQRRgnGDsyEggDEC4YFBiDARiHAhixAxiABDIGCAQQIxgnMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINTk2OWowajGoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x3be04522b9372497:0x6511f5274b41ed0f,1,,,,";

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Quick Stats/Features */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">🍹</div>
              <h4 className="font-bold text-gray-800">50+ Flavors</h4>
              <p className="text-sm text-gray-500">Endless combinations</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🍦</div>
              <h4 className="font-bold text-gray-800">Creamy Softies</h4>
              <p className="text-sm text-gray-500">Melts in your mouth</p>
            </div>
            <div>
              <div className="text-4xl mb-2">⚡</div>
              <h4 className="font-bold text-gray-800">Instant Spark</h4>
              <p className="text-sm text-gray-500">Perfect carbonation</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📍</div>
              <h4 className="font-bold text-gray-800">Top Rated</h4>
              <p className="text-sm text-gray-500">On Google Maps</p>
            </div>
          </div>
        </section>

        <Menu />

        {/* Party/Wedding Orders Section */}
        <section className="py-24 bg-gradient-to-r from-yellow-500 to-orange-500 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="mb-12 lg:mb-0">
                <h2 className="text-4xl md:text-5xl font-brand mb-6 leading-tight">
                  Hosting an Event? <br />
                  <span className="text-yellow-200">We Bring the Fizz!</span>
                </h2>
                <p className="text-xl text-yellow-50 mb-8 opacity-90 leading-relaxed">
                  Make your weddings, parties, and corporate events unforgettable with our professional Live Soda & Softy counter service.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-left">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💍</span>
                    <div>
                      <h4 className="font-bold text-lg">Wedding Specials</h4>
                      <p className="text-sm text-yellow-100">Elegant setups for your big day.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h4 className="font-bold text-lg">Birthday Parties</h4>
                      <p className="text-sm text-yellow-100">Kids and adults love our 50+ flavors!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👨‍💼</span>
                    <div>
                      <h4 className="font-bold text-lg">Corporate Events</h4>
                      <p className="text-sm text-yellow-100">Professional service for office gatherings.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <h4 className="font-bold text-lg">Full Variety</h4>
                      <p className="text-sm text-yellow-100">Includes our Special Mint Mojito!</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <a 
                    href="tel:09712173522" 
                    className="px-8 py-4 bg-white text-orange-600 font-bold rounded-2xl shadow-xl hover:bg-yellow-50 transform hover:scale-105 transition-all text-center flex items-center justify-center gap-3"
                  >
                    <span>📞</span> Book: 097121 73522
                  </a>
                  <a 
                    href="tel:7621916454" 
                    className="px-8 py-4 bg-yellow-100 text-orange-700 font-bold rounded-2xl shadow-xl hover:bg-white transform hover:scale-105 transition-all text-center flex items-center justify-center gap-3 border-2 border-white/20"
                  >
                    <span>📞</span> Book: 76219 16454
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-white/20 rounded-[3rem] blur-2xl animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=800" 
                  alt="Party Celebration" 
                  className="relative rounded-[3rem] shadow-2xl border-4 border-white/30 transform rotate-2 hover:rotate-0 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-brand text-yellow-600 mb-4">Loved by the Locals</h2>
              <div className="flex items-center justify-center gap-1 text-yellow-400 text-xl">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                <span className="text-gray-400 text-sm ml-2">(4.8/5 average rating)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {reviews.map((t, idx) => (
                <div key={idx} className="bg-yellow-50 p-8 rounded-3xl border border-yellow-100 shadow-sm hover:shadow-md transition-shadow relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner`}>
                      {t.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 flex items-center gap-1">
                        {t.name}
                        <span className="text-blue-500 text-xs" title="Verified Customer">✔️</span>
                      </h4>
                      <div className="flex text-yellow-400 text-xs">
                        {Array.from({ length: t.rating }).map((_, i) => <span key={i}>★</span>)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">"{t.text}"</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a 
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-white border-2 border-yellow-400 text-yellow-700 font-bold rounded-2xl hover:bg-yellow-400 hover:text-white transition-all shadow-sm"
              >
                Read All Reviews on Google
                <svg className="w-5 h-5 ml-2 fill-current" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.12 5.36-7.84 5.36-4.96 0-9-4.12-9-9.2s4.04-9.2 9-9.2c2.84 0 4.76 1.2 5.84 2.24l2.56-2.52C19.24 1.48 16.12 0 12.48 0 5.56 0 0 5.6 0 12.48s5.56 12.48 12.48 12.48c7.24 0 12.04-5.08 12.04-12.24 0-.84-.08-1.48-.2-2.12h-11.84z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-yellow-400 text-yellow-900 rounded-full shadow-2xl flex items-center justify-center hover:bg-yellow-300 transform hover:scale-110 transition-all animate-bounce"
          aria-label="Back to top"
        >
          <span className="text-2xl font-bold">↑</span>
        </button>
      )}
    </div>
  );
};

export default App;
