import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

const OptimizedImage = ({ src, alt, className, ...props }: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-lg scale-105'
        }`}
        decoding="async"
        {...props}
      />
    </div>
  );
};

import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Calendar, 
  CheckCircle, 
  Heart, 
  Activity, 
  Flame,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Share2
} from 'lucide-react';

const locations = [
  {
    id: 'woluwe',
    name: 'Woluwe-Saint-Lambert',
    address: '101 avenue des Communautés, 1200 Bruxelles',
    details: '(Dans la Galerie commerciale Cora)',
    phone: '02 771 24 00',
    email: 'curves.bruxelles@gmail.com',
    website: 'https://curves-bruxelles.com/',
    bookingLink: 'https://api.fitness-academie.fr/widget/booking/T9vZhkFs9OQlPEKG1uSA',
    hours: [
      { days: 'Lundi / Mercredi', time: '8h30-14h et 16h-20h' },
      { days: 'Mardi / Jeudi', time: '10h-13h30 et 15h-20h' },
      { days: 'Vendredi', time: '8h30-14h et 16h-19h30' },
      { days: 'Samedi', time: '10h-13h' },
    ],
    image: '/woluwe.jpeg'
  },
  {
    id: 'court',
    name: 'Court-St-Etienne',
    address: '8a Avenue des Métallurgistes, 1490 Court-St-Etienne',
    details: '',
    phone: '010 68 10 73',
    email: 'curvescourtstetienne@gmail.com',
    website: 'https://curvescourtstetienne.be/',
    bookingLink: 'https://api.fitness-academie.fr/widget/booking/ONSnj2pVgcA0GsLzhPko',
    hours: [
      { days: 'Lundi / Mercredi', time: '9h-13h30 et 15h30-19h30' },
      { days: 'Mardi / Jeudi', time: '10h-13h et 15h30-19h30' },
      { days: 'Vendredi', time: '9h-13h30 et 15h30-19h' },
      { days: 'Samedi', time: '9h30-12h30' },
    ],
    image: '/court.jpg'
  }
];

const features = [
  {
    icon: <Clock className="w-8 h-8 text-brand-purple" />,
    title: 'Circuit de 30 minutes',
    description: 'Un entraînement complet et efficace qui s\'intègre parfaitement dans votre emploi du temps chargé.'
  },
  {
    icon: <Activity className="w-8 h-8 text-brand-purple" />,
    title: 'Renforcement Musculaire',
    description: 'Brûlez un maximum de calories grâce à notre circuit combinant renforcement musculaire et cardio.'
  },
  {
    icon: <Heart className="w-8 h-8 text-brand-purple" />,
    title: 'Coaching personnalisé',
    description: 'Un accompagnement sur mesure pour vous aider à atteindre vos objectifs santé et forme.'
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-brand-purple" />,
    title: 'Conçu pour les femmes',
    description: 'Un environnement bienveillant et adapté spécifiquement aux besoins des femmes.'
  }
];

const testimonials = [
  {
    name: "Marie L.",
    role: "Membre depuis 2 ans",
    content: "Curves a changé ma vision du sport. En seulement 30 minutes, je me sens boostée pour la journée. L'ambiance entre femmes est vraiment motivante !",
    rating: 5
  },
  {
    name: "Sophie D.",
    role: "Membre depuis 6 mois",
    content: "Le coaching personnalisé fait toute la différence. J'ai enfin réussi à tenir mes objectifs de perte de poids sans me sentir jugée.",
    rating: 5
  },
  {
    name: "Isabelle M.",
    role: "Membre depuis 1 an",
    content: "Pratique, rapide et efficace. Je peux y aller entre midi et deux et retourner au travail pleine d'énergie. Je recommande à 100% !",
    rating: 5
  }
];

const faqs = [
  {
    question: "Est-ce que 30 minutes suffisent vraiment ?",
    answer: "Oui ! Le circuit Curves combine renforcement musculaire et cardio-vasculaire. C'est un entraînement à haute intensité conçu pour maximiser les résultats en un minimum de temps."
  },
  {
    question: "Je n'ai jamais fait de sport, est-ce pour moi ?",
    answer: "Absolument. Curves est conçu pour les femmes de tous niveaux. Nos coachs vous accompagnent dès votre première séance pour adapter les exercices à votre rythme."
  },
  {
    question: "En quoi consiste le bilan de forme gratuit ?",
    answer: "C'est un rendez-vous de 30 minutes où nous analysons vos objectifs, votre condition physique actuelle et nous vous faisons découvrir le circuit. C'est sans engagement !"
  }
];

const whyCurves = [
  {
    title: "Un environnement 100% féminin",
    description: "Entraînez-vous en toute confiance dans un espace sans jugement, conçu exclusivement pour les femmes de tous âges et de toutes morphologies.",
    icon: <Heart className="w-6 h-6 text-brand-pink" />
  },
  {
    title: "Des machines à résistance hydraulique",
    description: "Nos équipements s'adaptent à votre force et protègent vos articulations. Pas de poids lourds à manipuler, la résistance change avec votre intensité.",
    icon: <Activity className="w-6 h-6 text-brand-pink" />
  },
  {
    title: "Un coach toujours à vos côtés",
    description: "Vous n'êtes jamais seule. Un coach est présent sur le circuit pour vous motiver, corriger votre posture et s'assurer que vous progressez en toute sécurité.",
    icon: <CheckCircle className="w-6 h-6 text-brand-pink" />
  },
  {
    title: "Une communauté bienveillante",
    description: "Rejoignez un groupe de femmes qui partagent les mêmes défis. L'entraide et la convivialité sont au cœur de l'expérience Curves.",
    icon: <Flame className="w-6 h-6 text-brand-pink" />
  }
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-dark selection:bg-brand-purple selection:text-white">
      {/* Announcement Bar */}
      <div className="bg-brand-pink text-white py-2 px-4 text-center text-sm font-bold fixed top-0 w-full z-[60] h-[40px] flex items-center justify-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <Flame className="w-4 h-4 animate-pulse" />
          <span>OFFRE SPÉCIALE : Jusqu'au 30 Avril, les frais d'inscriptions sont à 1€ !</span>
          <Flame className="w-4 h-4 animate-pulse" />
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 z-50 px-6 pointer-events-none">
        <motion.button 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="w-full bg-brand-pink text-white py-4 rounded-full font-bold shadow-2xl shadow-brand-pink/40 flex items-center justify-center gap-2 pointer-events-auto"
          onClick={() => scrollToSection('clubs')}
        >
          <Calendar className="w-5 h-5" />
          Mon Bilan Gratuit
        </motion.button>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 top-0' : 'bg-transparent py-5 top-[40px]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <img 
                src="/logo-curves.png" 
                alt="Curves Fitness pour femmes" 
                className={`h-12 w-auto object-contain ${!isScrolled && location.pathname === '/' ? 'brightness-0 invert' : ''}`}
                decoding="async"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const fallback = document.getElementById('fallback-logo');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div id="fallback-logo" className="hidden items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center text-white font-display font-bold text-xl">
                  C
                </div>
                <span className={`font-display font-bold text-xl tracking-tight ${isScrolled || location.pathname !== '/' ? 'text-brand-dark' : 'text-white drop-shadow-md'}`}>
                  Curves
                </span>
              </div>
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('concept')} className={`font-medium text-sm hover:text-brand-pink transition-colors ${isScrolled || location.pathname !== '/' ? 'text-gray-600' : 'text-white/90 drop-shadow-sm'}`}>Le Concept</button>
              <button onClick={() => scrollToSection('clubs')} className={`font-medium text-sm hover:text-brand-pink transition-colors ${isScrolled || location.pathname !== '/' ? 'text-gray-600' : 'text-white/90 drop-shadow-sm'}`}>Nos Clubs</button>
              <button onClick={() => scrollToSection('clubs')} className="bg-brand-purple hover:bg-brand-purple-dark text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-lg shadow-brand-purple/25 hover:shadow-brand-purple/40 hover:-translate-y-0.5">
                Réserver un bilan gratuit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={isScrolled || location.pathname !== '/' ? 'text-brand-dark' : 'text-white'} />
              ) : (
                <Menu className={isScrolled || location.pathname !== '/' ? 'text-brand-dark' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-lg">
              <button onClick={() => scrollToSection('concept')} className="text-left font-display font-semibold text-2xl text-gray-800 border-b border-gray-100 pb-4">Le Concept</button>
              <button onClick={() => scrollToSection('clubs')} className="text-left font-display font-semibold text-2xl text-gray-800 border-b border-gray-100 pb-4">Nos Clubs</button>
              <button onClick={() => scrollToSection('clubs')} className="mt-4 bg-brand-purple text-white px-6 py-4 rounded-full font-medium text-center shadow-lg">
                Réserver un bilan gratuit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-brand-dark text-gray-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4 bg-white/10 p-3 rounded-xl inline-flex">
                <img 
                  src="/logo-curves.png" 
                  alt="Curves Fitness pour femmes" 
                  className="h-10 w-auto object-contain brightness-0 invert"
                  decoding="async"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const fallback = document.getElementById('fallback-logo-footer');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div id="fallback-logo-footer" className="hidden items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center text-white font-display font-bold">
                    C
                  </div>
                  <span className="font-display font-bold text-xl text-white">
                    Curves
                  </span>
                </div>
              </div>
              <p className="text-sm">
                Le fitness conçu pour les femmes. 30 minutes pour une remise en forme complète.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Clubs</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/club/woluwe" className="hover:text-white transition-colors">Woluwe-Saint-Lambert</Link></li>
                <li><Link to="/club/court" className="hover:text-white transition-colors">Court-St-Etienne</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Bruxelles: 02 771 24 00</li>
                <li>Court-St-Etienne: 010 68 10 73</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Curves Fitness pour Femmes. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const HomePage = () => {
  const [copied, setCopied] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Curves Fitness pour Femmes',
      text: 'Découvrez Curves, le fitness conçu pour les femmes. 30 minutes pour une remise en forme complète !',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        console.error('Erreur lors du partage:', err);
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/curves.jpg" 
            alt="Club Curves" 
            className="w-full h-full object-cover object-center"
            loading="eager"
            // @ts-ignore - fetchPriority is supported in modern browsers
            fetchPriority="high"
            decoding="sync"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                <Heart className="w-4 h-4 text-brand-pink" />
                <span>Le seul club en Belgique conçu à 100% pour les femmes</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight mb-6">
                Le fitness conçu <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple">pour les femmes en Belgique.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed max-w-xl">
                Curves est la référence de la remise en forme féminine à Woluwe et Court-St-Etienne. Une séance complète en seulement 30 minutes dans un environnement bienveillant.
              </p>
              <div className="bg-white/10 backdrop-blur-md border border-brand-pink/50 rounded-2xl p-4 mb-10 max-w-md">
                <p className="text-brand-pink font-bold text-lg flex items-center gap-2">
                  <Flame className="w-5 h-5" />
                  Offre Flash : Inscription à 1€ !
                </p>
                <p className="text-white/80 text-sm">Valable jusqu'au 30 avril dans vos clubs de Woluwe et Court-St-Etienne.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('clubs')} className="bg-brand-pink hover:bg-pink-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg shadow-brand-pink/30 hover:shadow-brand-pink/50 hover:-translate-y-1 flex items-center justify-center gap-2 group">
                  Commencer maintenant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex gap-4">
                  <button onClick={() => scrollToSection('concept')} className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-medium text-lg transition-all flex items-center justify-center">
                    Découvrir
                  </button>
                  <button 
                    onClick={handleShare}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-6 py-4 rounded-full font-medium text-lg transition-all flex items-center justify-center gap-2 group"
                    title="Partager le site"
                  >
                    <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">{copied ? 'Lien copié !' : 'Partager'}</span>
                    {copied && <span className="sm:hidden">Copié !</span>}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="concept" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-purple font-semibold tracking-wide uppercase text-sm mb-3">La Méthode Curves</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">Efficace à chaque séance.</h3>
            <p className="text-lg text-gray-600">
              Notre programme d'exercices est spécialement conçu pour s'adapter à votre corps et à votre emploi du temps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full border-2 border-brand-purple flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-display font-bold text-gray-900 mb-3 leading-tight">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Curves Section */}
      <section className="py-24 bg-brand-purple text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand-pink font-semibold tracking-wide uppercase text-sm mb-3">Pourquoi nous choisir ?</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Plus qu'une salle de sport, <br/>
                <span className="text-brand-purple-light">un espace pour vous.</span>
              </h3>
              <p className="text-lg text-brand-purple-light/80 mb-10 leading-relaxed">
                Nous savons que s'inscrire dans une salle de sport peut être intimidant. C'est pourquoi Curves a été créé : pour offrir aux femmes un lieu où elles se sentent à l'aise, écoutées et guidées.
              </p>
              
              <div className="space-y-8">
                {whyCurves.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold mb-2">{item.title}</h4>
                      <p className="text-brand-purple-light/70 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <OptimizedImage 
                  src="/woluwe.jpeg" 
                  alt="Ambiance Curves" 
                  className="w-full aspect-[4/5]"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-pink rounded-full blur-[100px] opacity-20 z-0"></div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-purple-dark rounded-full blur-[100px] opacity-40 z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="clubs" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-brand-purple font-semibold tracking-wide uppercase text-sm mb-3">Nos Clubs en Belgique</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900">Trouvez votre salle de sport Curves</h3>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div 
                key={location.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="h-64 relative overflow-hidden">
                  <OptimizedImage 
                    src={location.image} 
                    alt={`Club Curves ${location.name}`} 
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h4 className="absolute bottom-6 left-8 text-3xl font-display font-bold text-white">
                    {location.name}
                  </h4>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex items-start gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                      <div>
                        <p>{location.address}</p>
                        {location.details && <p className="text-sm text-gray-500 mt-1">{location.details}</p>}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="w-5 h-5 text-brand-purple shrink-0" />
                      <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="hover:text-brand-purple transition-colors">{location.phone}</a>
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="w-5 h-5 text-brand-purple shrink-0" />
                      <a href={`mailto:${location.email}`} className="hover:text-brand-purple transition-colors">{location.email}</a>
                    </div>
                  </div>

                  <div className="bg-brand-light rounded-2xl p-6 mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-brand-pink" />
                      <h5 className="font-display font-semibold text-gray-900">Horaires d'ouverture</h5>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {location.hours.map((hour, i) => (
                        <li key={i} className="flex justify-between items-center border-b border-gray-200/60 last:border-0 pb-2 last:pb-0">
                          <span className="font-medium text-gray-700">{hour.days}</span>
                          <span>{hour.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <div className="w-full">
                      <div className="mb-3 text-center">
                        <span className="inline-block bg-brand-pink/10 text-brand-pink text-xs font-bold px-3 py-1 rounded-full border border-brand-pink/20">
                          🎁 Inscription à 1€ jusqu'au 30/04
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                          to={`/club/${location.id}`}
                          className="flex-1 bg-brand-purple hover:bg-brand-purple-dark text-white px-6 py-4 rounded-xl font-medium text-center transition-all shadow-md shadow-brand-purple/20 flex items-center justify-center gap-2 group"
                        >
                          <Calendar className="w-5 h-5" />
                          Bilan gratuit
                        </Link>
                        <a 
                          href={location.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-white hover:bg-gray-50 text-brand-dark border border-gray-200 px-6 py-4 rounded-xl font-medium text-center transition-all flex items-center justify-center gap-2"
                        >
                          Site du club
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-purple font-semibold tracking-wide uppercase text-sm mb-3">Témoignages</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900">Elles ont choisi Curves</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-light p-8 rounded-3xl border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Heart key={i} className="w-4 h-4 fill-brand-pink text-brand-pink" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{t.content}"</p>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-purple font-semibold tracking-wide uppercase text-sm mb-3">Questions fréquentes</h2>
            <h3 className="text-3xl font-display font-bold text-gray-900">Tout ce que vous devez savoir</h3>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-display font-bold text-lg text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">D'autres questions ? Posez-les lors de votre bilan !</p>
            <button onClick={() => scrollToSection('clubs')} className="text-brand-purple font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all">
              Prendre rendez-vous <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-purple">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Prête à transformer votre vie ?
          </h2>
          <p className="text-xl text-brand-purple-light mb-10 max-w-2xl mx-auto">
            Rejoignez une communauté de femmes qui s'encouragent mutuellement. Prenez rendez-vous pour votre premier bilan de forme gratuit.
          </p>
          <button onClick={() => scrollToSection('clubs')} className="bg-white text-brand-purple hover:bg-brand-light px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
            Trouver mon club
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
};

const ClubPage = () => {
  const { id } = useParams();
  const location = locations.find(l => l.id === id);

  if (!location) {
    return (
      <div className="py-40 text-center">
        <h2 className="text-2xl font-bold">Club non trouvé</h2>
        <Link to="/" className="text-brand-purple hover:underline mt-4 inline-block">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Club Hero */}
      <section className="relative py-24 overflow-hidden bg-brand-purple text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={location.image} 
            alt={location.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Curves {location.name}</h1>
            <p className="text-xl text-brand-purple-light max-w-2xl">
              Votre salle de sport 100% femmes à {location.name}. Un programme complet en 30 minutes, coaché et sans contrainte d'horaire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Club Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 border-b border-brand-light pb-4">Informations Pratiques</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Adresse</h3>
                    <p className="text-gray-600">{location.address}</p>
                    {location.details && <p className="text-sm text-gray-500 italic">{location.details}</p>}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Téléphone</h3>
                    <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-brand-purple transition-colors">{location.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Email</h3>
                    <a href={`mailto:${location.email}`} className="text-gray-600 hover:text-brand-purple transition-colors">{location.email}</a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-brand-light rounded-[2rem] border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-brand-pink" />
                  <h3 className="text-xl font-display font-bold text-gray-900">Horaires d'ouverture</h3>
                </div>
                <div className="space-y-3">
                  {location.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                      <span className="font-medium text-gray-700">{h.days}</span>
                      <span className="text-gray-600">{h.time}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-gray-500 italic">
                  * Vos séances sont sans contraintes horaires pendant ces plages d'ouverture.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 relative group">
                <OptimizedImage 
                  src={location.image} 
                  alt={`Club Curves ${location.name}`} 
                  className="w-full aspect-video md:aspect-square"
                />
                <div className="absolute inset-0 bg-brand-purple/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <div className="mt-12 text-center lg:text-left">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Prête à commencer ?</h3>
                <p className="text-gray-600 mb-8">
                  Bénéficiez d'un bilan de forme personnalisé et gratuit pour découvrir comment Curves peut vous aider à atteindre vos objectifs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href={location.bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-pink hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-brand-pink/30 hover:shadow-brand-pink/50 hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Réserver mon bilan gratuit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (Optional but good for SEO/Info) */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-purple font-semibold tracking-wide uppercase text-sm mb-3">Tarifs</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900">Des solutions adaptées</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
              <h4 className="font-bold text-xl mb-2">12 mois</h4>
              <div className="text-3xl font-display font-bold text-brand-purple mb-4">54€<span className="text-sm text-gray-500 font-sans">/mois</span></div>
              <p className="text-sm text-gray-600 mb-6">Engagement de 12 mois minimum. Idéal pour des résultats durables.</p>
              <ul className="text-sm space-y-2 mb-8 flex-grow">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Accès illimité</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Coaching inclus</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl border-2 border-brand-pink shadow-xl flex flex-col relative scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-pink text-white text-xs font-bold px-4 py-1 rounded-full">POPULAIRE</div>
              <h4 className="font-bold text-xl mb-2">3 mois</h4>
              <div className="text-3xl font-display font-bold text-brand-purple mb-4">64€<span className="text-sm text-gray-500 font-sans">/mois</span></div>
              <p className="text-sm text-gray-600 mb-6">Engagement de 3 mois minimum. Parfait pour tester le concept.</p>
              <ul className="text-sm space-y-2 mb-8 flex-grow">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Accès illimité</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Coaching inclus</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
              <h4 className="font-bold text-xl mb-2">Sans engagement</h4>
              <div className="text-3xl font-display font-bold text-brand-purple mb-4">69€<span className="text-sm text-gray-500 font-sans">/mois</span></div>
              <p className="text-sm text-gray-600 mb-6">Liberté totale. Arrêtez quand vous voulez.</p>
              <ul className="text-sm space-y-2 mb-8 flex-grow">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Accès illimité</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Coaching inclus</li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-12 text-gray-500 text-sm">
            Tarifs spéciaux pour Seniors (+65 ans) à 49€/mois et Étudiantes (-25 ans) à 25€/mois. <br/>
            Frais de service en fonction de la promotion en cours (actuellement 1€ !).
          </p>
        </div>
      </section>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/club/:id" element={<ClubPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
