import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Import Helmet and HelmetProvider
import Header from "./Header";
import Footer from "./Footer";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import Preloader from './../Components/Preloader';

export default function Layout({
  children,
  title = "Archivom | société d’ingénierie",
  description = "Disposant d’une équipe doté d’une expérience de plus de 30 ans, Archivom est une société d’ingénierie et de services de « Gestion de Contenu d’Entreprise » ou en anglais « Entreprise Content Management », qui opère dans la gestion du patrimoine informationnel des entreprises.",
  keywords = "Archivom, société d’ingénierie",
  author = "Archivom",
  favicon = logo,
  ogImage = logo,
}) {
  const isDarkMode = localStorage.getItem("theme") === "dark";
  const themeColor = isDarkMode ? "#1a202c" : "#ffffff";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulating loading time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <HelmetProvider>
      <Helmet>
        {/* SEO Meta Tags */}
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={themeColor} />
        <meta name="version" content="1" />
        <meta name="category" content="Business" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="topic" content="Business" />
        <meta name="copyright" content="2025" />
        <meta name="reply-to" content="contact@archivom.com" />
        <meta name="owner" content={author} />
        <meta name="language" content="fr" />
        <meta name="subject" content={description} />

        {/*   <!-- Caching and Performance Meta --> */}
        <meta httpEquiv="Cache-Control" content="max-age=86400, public" />
        <meta httpEquiv="Expires" content="Fri, 10 Aug 2025 20:00:00 GMT" />
        <meta name="revisit-after" content="7 days" />
        <meta name="generator" content="https://archivom.fr" />

        {/*   <!-- Search Engine Bots --> */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href="https://archivom.fr" />

        {/*   <!-- security meta --> */}
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-Powered-By" content="Archivom" />

        {/*   <!-- Open Graph Meta for Social Media --> */}
        <meta property="og:title" content="Archivom " />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content="https://archivom.fr" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:site_name" content={author} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />

        {/*  <!--  Twitter Card Meta -->*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="https://archivom.fr" />
        <meta name="twitter:description" content={description} />
        <meta name={logo} />
        <meta name="twitter:creator" content={author} />

        {/*  <!--  Favicons -->*/}
        <link rel="icon" href={favicon} type="image/x-icon" />
        <link rel="icon" type="image/png" href={favicon} />
        <link rel="apple-touch-icon" href={favicon} />
        <link rel="icon" sizes="16x16" href={favicon} />
        <link rel="icon" sizes="32x32" href={favicon} />
        <link rel="icon" sizes="48x48" href={favicon} />
        <link rel="icon" type="image/png" sizes="192x192" href={favicon} />
        <link rel="mask-icon" href={favicon} color="#219653" />
        <meta name="msapplication-TileImage" href={favicon} />

        {/*  <!--  Dark / LIGHT SWITCH -->*/}
        <link id="dark-theme-style" rel="stylesheet" />
        {/*   <!-- Theme & Mobile Web App Meta --> */}
        <meta name="theme-color" content="#219653" />
        <meta name="msapplication-navbutton-color" content="#219653" />
        <meta name="msapplication-TileColor" content="#219653" />
        <meta
          name="mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="mobile-web-app-capable" content="yes" />

  
 
        <script src="https://cdn.tailwindcss.com"></script>
  <script
    defer
    src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
  ></script>
 
  <script src="https://cdn.jsdelivr.net/npm/tailgrids@2.1.0/plugin.min.js"></script>
  <link
    href="https://cdn.jsdelivr.net/npm/tailgrids@2.1.0/assets/css/tailwind.min.css"
    rel="stylesheet"
  />
      </Helmet>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
      {/* WhatsApp and Phone Icon Container */}
      <div className="fixed bottom-5 right-5 space-y-5 z-50">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/212661820000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-green p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center mb-2">
            <FaWhatsapp size={30} color="white" />
          </div>
        </a>

        {/* Phone Icon */}
        <a href="tel:+212661820000" target="_blank" rel="noopener noreferrer">
          <div className="bg-primary p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center">
            <FaPhone size={30} color="white" />
          </div>
        </a>
      </div>
    </HelmetProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  favicon: PropTypes.string,
  ogImage: PropTypes.string,
};
