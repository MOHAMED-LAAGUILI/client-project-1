import { FaFacebook, FaLinkedin, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t shadow-md mt-10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div>
            <a href="/" className="flex items-center space-x-2">
              <img
                src="https://archivom.fr/wp-content/uploads/2023/04/lastArchivom-Logo-Couleur-_17_04_2019-2-1024x359.png"
                alt="Logo"
                className="w-40"
              />
            </a>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Villa N°4-PTT, Avenue Ahmed Réda Guédira, Rabat, Maroc
            </p>
            <p className="mt-2 flex items-center space-x-2 text-gray-800 dark:text-gray-300">
              <FaPhone className="text-primary" size={20} />
              <span>+212 6 61 82 00 00</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary dark:text-gray-400">Home</Link>
              </li>
              <li>
                <Link to="/references" className="text-gray-600 hover:text-primary dark:text-gray-400">References</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary dark:text-gray-400">Contact</Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-600 hover:text-primary dark:text-gray-400">Jobs</Link>
              </li>

              <li>
                <Link to="/faqs" className="text-gray-600 hover:text-primary dark:text-gray-400">FAQs</Link>
              </li>
            </ul>
          </div>

    {/* Services */}
<div>
  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Services</h3>
  <ul className="mt-4 space-y-2">
    <li>
      <Link to="/telecommunication" className="text-gray-600 hover:text-primary dark:text-gray-400">Télécommunications</Link>
    </li>
    <li>
      <Link to="/etude-conseil" className="text-gray-600 hover:text-primary dark:text-gray-400">Etude et Conseil</Link>
    </li>
    <li>
      <Link to="/archivage-physique" className="text-gray-600 hover:text-primary dark:text-gray-400">Archivage Physique</Link>
    </li>
    <li>
      <Link to="/archivage-electronique" className="text-gray-600 hover:text-primary dark:text-gray-400">Archivage Electronique</Link>
    </li>
    <li>
      <Link to="/formation" className="text-gray-600 hover:text-primary dark:text-gray-400">Formation</Link>
    </li>
    <li>
      <Link to="/travail-a-distance" className="text-gray-600 hover:text-primary dark:text-gray-400">Travail à distance</Link>
    </li>
  </ul>
</div>


          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.linkedin.com/company/archivom/" className="text-gray-600 hover:text-blue-600 dark:text-gray-400">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.facebook.com/p/Archivom-100069088126712/?locale=fa_IR" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">
                <FaFacebook size={24} />
              </a>
              
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-6 text-center text-gray-500 text-sm dark:text-gray-400">
          <p>
            Designed & Developed by{" "}
            <a href="https://laaguili-dev.app.genez.io/" className="text-primary hover:underline">
              MOHAMED LAAGUILI
            </a>{" "}
            & Team.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
