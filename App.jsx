import { useState } from 'react';

export default function ProposalWebsite() {
  const [showCelebration, setShowCelebration] = useState(false);

  const memories = [
    {
      title: "Your Magical Smile",
      momentLabel: "Moment 1",
      text: "Every time you smile, my whole world lights up. It's my favorite thing in the universe.",
      image: "/images/moment1.png",
    },
    {
      title: "Our Precious Moments",
      momentLabel: "Moment 2",
      text: "Every second with you feels like a beautiful dream I never want to wake up from.",
      image: "/images/moment2.png",
    },
    {
      title: "My Heart's Home",
      momentLabel: "Moment 3",
      text: "You're not just my love, you're where my heart belongs. Now and forever.",
      image: "/images/moment3.png",
    },
  ];

  const galleryPhotos = [
    { src: "/images/moment1.png", label: "Photo 1", alt: "Photo 1" },
    { src: "/images/moment2.png", label: "Photo 2", alt: "Photo 2" },
    { src: "/images/moment3.png", label: "Photo 3", alt: "Photo 3" },
    { src: "/images/photo4.jpg.jpg", label: "Photo 4", alt: "Photo 4" },
  ];

  const handleYes = () => {
    setShowCelebration(true);
    // Create confetti effect
    createConfetti();
  };

  const createConfetti = () => {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd'];
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
          position: fixed;
          width: 10px;
          height: 10px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          left: ${Math.random() * 100}vw;
          top: -10px;
          border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
          animation: fall ${2 + Math.random() * 2}s linear forwards;
          z-index: 1000;
        `;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
      }, i * 30);
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-white text-gray-800 overflow-hidden">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#ff4d6d_0,_transparent_60%)]" />
          
          {/* Floating hearts background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute text-4xl opacity-20 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                ❤️
              </div>
            ))}
          </div>

          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fadeInUp">
              Hey Love ❤️
            </h1>

            <p className="text-lg md:text-2xl text-gray-700 mb-8 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Happy Birthday,My Love Jeny.
              <br />
              Because no words alone could explain how much you mean to me.
            </p>

            <div className="animate-bounce text-4xl animate-fadeInUp" style={{ animationDelay: '0.4s' }}>💌</div>

            <div className="mt-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <a
                href="#memories"
                className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300 hover:scale-105"
              >
                Scroll Down ✨
              </a>
            </div>
          </div>
        </section>

        {/* Memories Section */}
        <section id="memories" className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Our Memories ✨
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {memories.map((memory, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300 cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img src={memory.image} alt={memory.momentLabel} className="w-full h-48 object-cover rounded-2xl mb-2 shadow-md" />
                <p className="text-sm font-semibold text-rose-600 mb-3">{memory.momentLabel}</p>
                <h3 className="text-2xl font-semibold mb-3">{memory.title}</h3>
                <p className="text-gray-600 leading-relaxed">{memory.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-20 px-6 max-w-6xl mx-auto bg-gradient-to-b from-pink-50 to-white">
          <h2 className="text-4xl font-bold text-center mb-14">
            Our Beautiful Moments 📸
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPhotos.map((photo) => (
              <figure
                key={photo.src}
                className="rounded-3xl shadow-xl overflow-hidden bg-white/80 hover:scale-[1.02] transition duration-300 cursor-pointer"
              >
                <img src={photo.src} alt={photo.alt} className="w-full h-64 object-cover" />
                <figcaption className="text-center text-sm font-semibold text-rose-600 py-3 px-2">
                  {photo.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Love Letter */}
        <section className="py-24 px-6 bg-rose-100/60">
          <div className="max-w-3xl mx-auto bg-white rounded-[2rem] shadow-2xl p-10 md:p-14 text-center">
            <h2 className="text-4xl font-bold mb-8">A Letter For My Love "Jeny" 💕</h2>

            <p className="text-lg leading-9 text-gray-700">
              I honestly don't even know where to start because there are so many things I want to say to you today.
              <br />
              Out of all the days in the year, this one feels the most special to me because it's the day the person I love the most was born.
              <br />
              And I'm truly thankful every single day that life brought you into mine.
              <br />
              You've become such an important part of my life, Jeny.
              <br />
              You're the first person I think about when something good happens, the person I want to talk to when my day feels difficult, and the person who somehow makes everything feel okay just by being there.
              <br />
              Your smile, your voice, your care, your little habits, the way you understand me.
              <br />
              Thank you for loving me the way you do.
              <br />
              Thank you for being patient with me, for listening to me, for making me laugh, and for giving me so many beautiful memories that I'll always hold close to my heart.
              <br />
              You make my life happier in ways you probably don't even realize.
              <br />
              Being with you feels comforting, safe, and real, and that's something I never want to lose.
              <br />
              Happy Birthday once again to the most beautiful girl in my life.
              <br />
              I love you more than words can ever fully describe, and I always will ❤️
            </p>
          </div>
        </section>

        {/* Proposal Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="bg-white rounded-[2rem] shadow-2xl p-10 md:p-16 max-w-4xl text-center relative overflow-hidden">
            <div className="absolute -top-10 -left-10 text-8xl opacity-10 animate-heartbeat">❤️</div>
            <div className="absolute -bottom-10 -right-10 text-8xl opacity-10 animate-heartbeat">❤️</div>

            {showCelebration ? (
              <div className="animate-fadeInUp">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-rose-600">
                  YAYYY! ❤️
                </h2>
                <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                  I LOVE YOU SO MUCH!
                </p>
                <div className="text-8xl animate-heartbeat">💍</div>
              </div>
            ) : (
              <>
                <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-rose-600">
                  Will You Be Mine Forever?
                </h2>

                <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                  You are my favorite person, my comfort, my happiness,
                  and the best part of my life.
                  <br />
                  So today, I just want to ask you one thing...
                </p>

                <button
                  onClick={handleYes}
                  className="bg-rose-500 hover:bg-rose-600 text-white text-2xl font-bold px-10 py-5 rounded-full shadow-xl transition duration-300 hover:scale-105 animate-heartbeat"
                >
                  YES 💍
                </button>
              </>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-10 text-gray-500 text-sm">
          Made with endless love ❤️
        </footer>
      </div>
    </>
  );
}
