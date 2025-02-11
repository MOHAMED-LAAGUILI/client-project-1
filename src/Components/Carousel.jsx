import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
      src: "https://static.vecteezy.com/ti/gratis-fotos/p2/13870218-digitaal-transformatie-technologie-strategie-digitalisering-en-digitalisering-van-bedrijf-processen-en-gegevens-optimaliseren-en-automatiseren-activiteiten-klant-onderhoud-beheer-internet-en-wolk-berekenen-foto.jpg",
      title: "Digital Transformation Strategy",
      description: "Empowering businesses through digital transformation strategies that optimize and automate operations. Our expertise lies in improving customer engagement, process efficiency, and data management, driving sustainable growth."
    },
    {
      src: "https://i0.wp.com/upsystems.it/wp-content/uploads/2023/04/miniatura-articolo-innovazione-digitale-1.png?resize=1024%2C744&ssl=1",
      title: "Innovative Digital Solutions",
      description: "We design innovative digital solutions that help businesses leverage the latest technologies to stay ahead of the competition. From cloud integration to software development, we provide end-to-end services to maximize your business potential."
    },
    {
      src: "https://media.velaw.com/wp-content/uploads/2022/12/16131405/Digital-Infrastructure-Capability_Full-Width-Hero_1440x560_2.jpg",
      title: "Future-Ready Digital Infrastructure",
      description: "Building robust, scalable, and secure digital infrastructures that meet the evolving needs of modern businesses. Our services include cloud computing, cybersecurity, and system integration to help you stay competitive in an ever-changing digital landscape."
    },
  ];
  
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden  shadow-lg">
      {/* Carousel Items */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative"
        >
          <img
            src={slides[currentIndex].src}
            alt={slides[currentIndex].title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 text-white">
            <h2 className="text-2xl font-semibold">{slides[currentIndex].title}</h2>
            <p className="text-sm opacity-80">{slides[currentIndex].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 transition p-2 rounded-full shadow-md"
      >
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 transition p-2 rounded-full shadow-md"
      >
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-4" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
