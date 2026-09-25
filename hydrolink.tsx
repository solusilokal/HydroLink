import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Share, 
  Copy, 
  Check, 
  Clock, 
  Star, 
  Quote, 
  Ship, 
  Anchor, 
  Navigation, 
  Info, 
  Calendar, 
  Users, 
  CreditCard, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Map, 
  ShieldCheck 
} from 'lucide-react';

const Instagram = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Facebook = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Twitter = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

import profileImg from './assets/logo.png';
import heroImg from './assets/hero.jpg';
import fleetFast from './assets/fleet-fast.webp';
import fleetFerry from './assets/fleet-ferry.webp';
import fleetCruiser from './assets/fleet-cruiser.webp';

const pageData = {
  name: "HydroLink",
  phone: "6289529605601",
  address: "Dermaga Rambang, Jl. Riau, Pahandut, Kec. Pahandut, Kota Palangka Raya, Kalimantan Tengah 74874",
  title: "Solusi Transportasi Kapal Cepat & Terpercaya",
  description: "Layanan transportasi laut premium yang menghubungkan antarpulau dengan aman, cepat, dan nyaman. Nikmati pengalaman berlayar terbaik bersama armada modern HydroLink.",
  profileImg: profileImg, 
  heroImg: heroImg,
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    maps: "https://maps.google.com/?cid=12754557060008849976", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  highlights: [
    { text: "Tepat Waktu", icon: "Clock" },
    { text: "Armada Modern", icon: "Ship" },
    { text: "Asuransi Penuh", icon: "ShieldCheck" }
  ],
  history: [
    { year: "2015", event: "HydroLink didirikan dengan 2 armada feri berkapasitas sedang." },
    { year: "2018", event: "Ekspansi rute ke wilayah Indonesia Timur & penambahan 5 kapal cepat." },
    { year: "2023", event: "Peluncuran armada VIP Cruiser dengan fasilitas bintang lima." },
    { year: "2026", event: "Menjadi penyedia transportasi laut nomor 1 dengan 20+ rute aktif." }
  ],
  catalog: [
    { name: "Hydro Fast", type: "Kapal Cepat", capacity: "120 Penumpang", speed: "35 Knots", img: fleetFast },
    { name: "Hydro Ferry", type: "Kapal Feri Ro-Ro", capacity: "500 Penumpang & 80 Kendaraan", speed: "18 Knots", img: fleetFerry },
    { name: "Hydro Cruiser VIP", type: "Kapal Pesiar Mini", capacity: "50 Penumpang VIP", speed: "25 Knots", img: fleetCruiser }
  ],
  pricing: [
    { route: "Semarang - Kumai", class: "Ekonomi", price: "Rp 350.000" },
    { route: "Semarang - Kumai", class: "Eksekutif", price: "Rp 650.000" },
    { route: "Surabaya - Lombok", class: "VIP Cruise", price: "Rp 1.200.000" },
    { route: "Banyuwangi - Bali", class: "Fast Boat", price: "Rp 250.000" }
  ],
  faq: [
    { q: "Berapa batas bagasi per penumpang?", a: "Setiap penumpang berhak atas bagasi gratis maksimal 20kg. Kelebihan bagasi akan dikenakan biaya tambahan sesuai rute." },
    { q: "Apakah tiket bisa di-refund atau di-reschedule?", a: "Ya, reschedule dapat dilakukan maksimal H-1 keberangkatan. Refund dikenakan potongan 25% jika dibatalkan 2 hari sebelum keberangkatan." },
    { q: "Apakah kapal dilengkapi fasilitas medis?", a: "Setiap armada HydroLink dilengkapi dengan ruang medis darurat dan staf yang terlatih dalam pertolongan pertama." },
    { q: "Apakah kendaraan roda 4 bisa diangkut?", a: "Ya, khusus untuk armada Hydro Ferry melayani pengangkutan kendaraan roda 2, roda 4, hingga truk logistik." }
  ],
  testimonials: [
    { name: "Budi Santoso", rating: 5, text: "Perjalanan dari Surabaya ke Lombok sangat nyaman. Kapalnya bersih, tepat waktu, dan fasilitas VIP-nya sepadan dengan harganya." },
    { name: "Siti Rahma", rating: 5, text: "Baru pertama kali naik Hydro Fast Boat. Ombak lumayan besar tapi kapal sangat stabil. Kru kapal sangat sigap membantu penumpang." },
    { name: "Ahmad Wijaya", rating: 4, text: "Andalan untuk pengiriman logistik antar pulau. Kapal feri luas dan proses bongkar muat kendaraan sangat teratur." }
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const scrollToForm = () => {
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const date = formData.get('date');
    const route = formData.get('route');
    const passengers = formData.get('passengers');
    const ticketClass = formData.get('class');
    const notes = formData.get('notes');
    
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Agen%20${pageData.name},%20saya%20${name}.%20Saya%20ingin%20memesan%20tiket%20kapal:%0A%0ARute:%20${route}%0ATanggal:%20${date}%0Aumpang:%20${passengers}%20Orang%0AKelas:%20${ticketClass}%0ACatatan:%20${notes || '-'}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (idx) => {
    if (activeFaq === idx) setActiveFaq(null);
    else setActiveFaq(idx);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #f1f5f9;
          color: #0f172a;
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-white min-h-screen overflow-hidden pb-32">
        
        {}
        <section className="relative w-full min-h-[90dvh] flex flex-col justify-end pb-12 px-6 bg-slate-900">
          
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-[#003B73]/60 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-[#003B73] transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f] via-[#003B73]/70 to-[#003B73]/30"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-32">
            <div className="w-28 h-28 rounded-full p-2 bg-white mb-6 shadow-2xl border-2 border-[#00A8CC]/50 flex items-center justify-center overflow-hidden">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex items-center gap-2 mb-2 bg-[#00A8CC]/20 px-4 py-1.5 rounded-full border border-[#00A8CC]/30 backdrop-blur-sm">
                <Anchor size={14} className="text-[#00A8CC]" />
                <span className="text-[#00A8CC] text-xs font-bold tracking-wider uppercase">Official Partner</span>
            </div>

            <h1 className="text-4xl font-extrabold text-white mb-3 leading-tight tracking-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <p className="text-blue-100 font-light text-sm leading-relaxed mb-6 max-w-[95%]">
              {pageData.description}
            </p>

            {}
            <div className="flex flex-col gap-3 w-full max-w-sm mb-8">
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href={pageData.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
                >
                  <Instagram size={18} /> Instagram
                </a>
                <a 
                  href={pageData.links.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3"/></svg>
                  TikTok
                </a>
              </div>
              <a 
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium w-full"
              >
                <MapPin size={18} /> Lokasi Port
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#00A8CC] text-white rounded-2xl font-bold text-[14px] uppercase tracking-wider hover:bg-[#008ba8] transition-all shadow-lg"
            >
              <Navigation size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              Pesan Tiket Kapal
            </button>
          </div>
        </section>

        {}
        <section className="py-6 px-4 bg-[#001f3f] shadow-inner">
          <div className="flex flex-wrap justify-center gap-3 w-full mx-auto">
            {pageData.highlights.map((item, idx) => (
              <span key={idx} className="flex items-center gap-2 px-4 py-2 bg-[#003B73] rounded-full border border-[#00A8CC]/30 text-xs text-white font-medium shadow-sm">
                {item.icon === 'Clock' && <Clock size={14} className="text-[#00A8CC]" />}
                {item.icon === 'Ship' && <Ship size={14} className="text-[#00A8CC]" />}
                {item.icon === 'ShieldCheck' && <ShieldCheck size={14} className="text-[#00A8CC]" />}
                {item.text}
              </span>
            ))}
          </div>
        </section>

        <section className="py-12 px-6 bg-slate-50 border-b border-slate-200">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Info className="text-[#00A8CC]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#001f3f] tracking-tight">Tentang Kami</h2>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed text-justify">
              Berlayar menembus batas pulau, HydroLink hadir sebagai jembatan maritim nusantara. Kami berkomitmen memberikan layanan transportasi air yang mengutamakan keselamatan, kecepatan, dan inovasi pelayanan untuk penumpang maupun logistik Anda.
            </p>
          </div>

          <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <Anchor size={120} />
            </div>
            <div className="flex items-center gap-2 mb-6">
              <Clock className="text-[#00A8CC]" size={20} />
              <h3 className="text-xl font-bold text-[#001f3f]">Perjalanan Kami</h3>
            </div>
            <div className="flex flex-col gap-5 relative border-l-2 border-[#00A8CC]/30 ml-3">
              {pageData.history.map((hist, idx) => (
                <div key={idx} className="relative pl-6">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#00A8CC]"></div>
                  <span className="text-[#00A8CC] font-bold text-sm block mb-1">{hist.year}</span>
                  <p className="text-slate-600 text-xs leading-relaxed">{hist.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="px-6 mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Ship className="text-[#00A8CC]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#001f3f] tracking-tight">Katalog Armada</h2>
            </div>
            <p className="text-slate-500 text-xs">Jelajahi pilihan kapal modern kami sesuai kebutuhan Anda.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.catalog.map((fleet, idx) => (
              <div 
                key={idx}
                className="snap-center shrink-0 w-[260px] rounded-[1.5rem] overflow-hidden border border-slate-200 shadow-md bg-white flex flex-col"
              >
                <div className="h-[180px] w-full overflow-hidden relative cursor-pointer" onClick={() => openLightbox(pageData.catalog.map(f => f.img), idx)}>
                    <img 
                      src={fleet.img} 
                      alt={fleet.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 right-2 bg-slate-900/70 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-white font-bold tracking-wider">
                        {fleet.type}
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-2">
                    <h3 className="font-bold text-[#001f3f] text-lg">{fleet.name}</h3>
                    <div className="flex flex-col gap-1 mt-1">
                        <div className="flex items-center gap-2 text-slate-500 text-xs">
                            <Users size={14} className="text-[#00A8CC]" />
                            <span>{fleet.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-xs">
                            <Navigation size={14} className="text-[#00A8CC]" />
                            <span>Kecepatan: {fleet.speed}</span>
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-6 bg-slate-50 border-b border-slate-200">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <CreditCard className="text-[#00A8CC]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#001f3f] tracking-tight">Harga & Rute</h2>
            </div>
            <p className="text-slate-500 text-xs">Rute pelayaran populer dengan harga tiket terbaik.</p>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.pricing.map((route, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-[#00A8CC]/50 transition-colors">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Map size={16} className="text-slate-400" />
                    <span className="font-bold text-[#001f3f] text-sm">{route.route}</span>
                  </div>
                  <span className="text-xs text-[#00A8CC] font-medium bg-[#00A8CC]/10 px-2 py-0.5 rounded-md w-fit ml-6">{route.class}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block mb-0.5">Mulai dari</span>
                  <span className="font-extrabold text-slate-800 text-sm">{route.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-12 px-6 bg-white border-b border-slate-200">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <HelpCircle className="text-[#00A8CC]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#001f3f] tracking-tight">Tanya Jawab (FAQ)</h2>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faq.map((item, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                >
                  <span className="font-semibold text-sm text-[#001f3f] pr-4">{item.q}</span>
                  {activeFaq === idx ? (
                    <ChevronUp size={18} className="text-[#00A8CC] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-400 shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-4 pb-4 text-xs text-slate-600 leading-relaxed transition-all duration-300 ${activeFaq === idx ? 'block' : 'hidden'}`}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-6 bg-slate-50 border-b border-slate-200">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Quote className="text-[#00A8CC]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#001f3f] tracking-tight">Apa Kata Penumpang</h2>
            </div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#00A8CC] text-[#00A8CC]" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#001f3f] flex items-center justify-center text-white font-bold text-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-bold text-slate-800">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm">
             <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-[#00A8CC]" size={24} />
              <h2 className="text-xl font-extrabold text-[#001f3f] tracking-tight">Lokasi Kantor & Pelabuhan</h2>
            </div>
            <p className="text-slate-600 text-sm font-medium mb-4">{pageData.address}</p>
            <a 
              href={pageData.links.maps}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-slate-100 text-[#001f3f] text-sm font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
            >
              <Navigation size={16} /> Buka Google Maps
            </a>
          </div>
        </section>

        {}
        <section id="booking-form" className="py-12 px-6 bg-[#001f3f]">
          <div className="bg-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A8CC]/10 rounded-bl-[100px] pointer-events-none"></div>
            
            <div className="relative z-10 mb-6">
              <div className="flex items-center gap-2 mb-2">
                  <Ship size={24} className="text-[#00A8CC]" />
                  <h2 className="text-2xl font-extrabold text-[#001f3f]">Pesan Tiket</h2>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">Isi form di bawah untuk mengecek ketersediaan tiket dan jadwal keberangkatan via WhatsApp.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Nama Pemesan</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Ketik nama lengkap sesuai KTP"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00A8CC] focus:ring-1 focus:ring-[#00A8CC] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Rute Keberangkatan</label>
                <select 
                  name="route" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#00A8CC] focus:ring-1 focus:ring-[#00A8CC] transition-all"
                >
                  <option value="">Pilih Rute...</option>
                  <option value="Semarang - Kumai">Semarang - Kumai</option>
                  <option value="Surabaya - Lombok">Surabaya - Lombok</option>
                  <option value="Banyuwangi - Bali">Banyuwangi - Bali</option>
                  <option value="Merak - Bakauheni">Merak - Bakauheni</option>
                  <option value="Rute Lainnya">Rute Lainnya (Tulis di catatan)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Tanggal Keberangkatan</label>
                  <input 
                    type="date" 
                    name="date" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#00A8CC] focus:ring-1 focus:ring-[#00A8CC] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Penumpang</label>
                  <input 
                    type="number" 
                    name="passengers" 
                    min="1"
                    defaultValue="1"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#00A8CC] focus:ring-1 focus:ring-[#00A8CC] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Kelas Tiket</label>
                <select 
                  name="class" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#00A8CC] focus:ring-1 focus:ring-[#00A8CC] transition-all"
                >
                  <option value="">Pilih Kelas...</option>
                  <option value="Ekonomi">Ekonomi</option>
                  <option value="Eksekutif">Eksekutif</option>
                  <option value="VIP Cruise">VIP Cruise</option>
                  <option value="Kendaraan Saja (Kargo)">Kendaraan Saja (Kargo)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Catatan Tambahan (Opsional)</label>
                <textarea 
                  name="notes" 
                  rows="2"
                  placeholder="Cth: Bawa 1 sepeda motor, bawa lansia..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00A8CC] focus:ring-1 focus:ring-[#00A8CC] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-4 bg-[#25D366] text-white font-bold text-sm tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-md border border-transparent"
              >
                Pesan via WhatsApp
                <MessageCircle size={20} className="text-white fill-current" />
              </button>
            </form>
          </div>
        </section>

        {}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-slate-200 mb-8"></div>
          
          <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-[#00A8CC]/30 flex items-center justify-center mb-4 p-2 overflow-hidden">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-contain" />
          </div>
          
          <div className="text-slate-500 text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-[#001f3f] text-sm">{pageData.name}</span>
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-slate-400 text-[10px] mt-8 mb-1">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>
          <a href="https://www.solusilokal.id" target="_blank" rel="noreferrer" className="text-slate-400 text-[10px] hover:text-[#00A8CC] transition-colors flex items-center gap-1">
            Powered by <span className="font-bold">solusilokal.id</span>
          </a>
        </footer>

        {}
        {/* Sticky CTA */}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#003B73] backdrop-blur-xl border border-[#00A8CC]/50 rounded-2xl text-white shadow-[0_10px_40px_rgba(0,31,63,0.4)] hover:bg-[#002f5c] active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-sm tracking-wide text-white">Cek Jadwal & Pesan Tiket</span>
            <div className="bg-[#00A8CC] text-white p-2 rounded-xl">
              <Calendar size={18} className="fill-none stroke-current stroke-2" />
            </div>
          </button>
        </div>

      </main>

      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-xl select-none"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>

          {lightbox.images.length > 1 && (
            <>
              <button
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50 border border-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox({
                    ...lightbox,
                    currentIndex: (lightbox.currentIndex - 1 + lightbox.images.length) % lightbox.images.length
                  });
                }}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50 border border-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox({
                    ...lightbox,
                    currentIndex: (lightbox.currentIndex + 1) % lightbox.images.length
                  });
                }}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div className="w-full max-w-4xl max-h-[100dvh] p-4 flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightbox.images[lightbox.currentIndex]} 
              alt="Armada Preview" 
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            {lightbox.images.length > 1 && (
              <span className="text-white/80 text-xs font-semibold mt-3 tracking-wider bg-black/40 px-3.5 py-1 rounded-full border border-white/10">
                {lightbox.currentIndex + 1} / {lightbox.images.length}
              </span>
            )}
          </div>
        </div>
      )}

      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-[#001f3f] font-bold text-[15px]">Bagikan {pageData.name}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1 text-slate-500 hover:bg-slate-100 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-[24px] p-8 flex flex-col items-center justify-center mb-8 shadow-sm">
              <div className="w-[72px] h-[72px] rounded-full bg-white border border-[#00A8CC]/30 mb-4 p-2 flex items-center justify-center overflow-hidden">
                <img src={pageData.profileImg} alt="Profile" className="w-full h-full object-contain" />
              </div>
              <h4 className="text-[#001f3f] font-bold text-lg text-center tracking-tight">@{pageData.name.toLowerCase()}</h4>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar items-start px-1 mb-4">
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={copyToClipboard}
                  className="w-[60px] h-[60px] rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-all shadow-sm border border-slate-200"
                >
                  {copied ? <Check size={26} className="text-green-600" /> : <Copy size={26} />}
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">
                  {copied ? 'Tersalin' : 'Salin'}
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank')}
                  className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <MessageCircle size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">WhatsApp</span>
              </div>
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(pageData.name)}`, '_blank')}
                  className="w-[60px] h-[60px] rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-all shadow-sm"
                >
                  <Twitter size={26} />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">X</span>
              </div>
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="w-[60px] h-[60px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <Facebook size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">Facebook</span>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}