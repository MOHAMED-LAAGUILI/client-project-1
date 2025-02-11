import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaPuzzlePiece,
  FaRocket,
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaServicestack,
  FaHome,
  FaDochub,
  FaSuitcase,
  FaQuestion,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <header className="dark:bg-dark/70 transition-all">
    <div className="bg-green-dark text-white py-3 px-6 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt size={20} />
            Villa N°4-PTT, Avenue Ahmed Réda Guédira, Rabat, Maroc
          </span>
          <span className="flex items-center gap-2">
            <FaMailBulk size={20} />
            <a href="mailto:contact@archivom.com" className="hover:text-gray-300 transition">
              contact@archivom.com
            </a>
          </span>
          <span className="flex items-center gap-2">
            <FaPhone size={20} />
            <a href="tel:+212661820000" className="hover:text-gray-300 transition">
              +212 6 61 82 00 00
            </a>
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/p/Archivom-100069088126712/?locale=fa_IR" target="_blank" rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors">
            <FaFacebook size={25} />
          </a>
          <a href="https://www.linkedin.com/company/archivom/" target="_blank" rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors">
            <FaLinkedin size={25} />
          </a>
          
        </div>
      </div>
    </div>

      <div className=" bg-white dark:bg-dark">
        <div className=" container mx-auto">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <Link to="/" className="block w-full py-5 bg-white">
                <img
                  src="https://archivom.fr/wp-content/uploads/2023/04/lastArchivom-Logo-Couleur-_17_04_2019-2-1024x359.png"
                  alt="logo"
                  className=""
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${
                    navbarOpen ? "navbarTogglerActive" : ""
                  }`}
                  id="navbarToggler"
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                </button>
                <nav
                  className={` shadow-lg border top-0 z-50 absolute right-4 top-full w-full max-w-[500px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none dark:bg-dark-2 lg:dark:bg-transparent ${
                    !navbarOpen ? "hidden" : ""
                  }`}
                  id="navbarCollapse"
                >
                  <ul className="block lg:flex">
                    <li>
                      <Link
                        to="/"
                        className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex dark:text-dark-6 dark:hover:text-white"
                      >
                        <FaHome className="mt-1 mr-2" />
                        Home
                      </Link>
                    </li>
                    <li
                      className="relative"
                      onClick={() => setShowMegaMenu(!showMegaMenu)}
                    >
                      <button className="flex w-full items-center justify-between gap-2 py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex lg:w-auto lg:justify-center dark:text-dark-6 dark:hover:text-white">
                        <span className="flex">
                          {" "}
                          <FaServicestack className="mt-1 mr-2" />
                          services
                        </span>
                        <span
                          className={`duration-200 ${
                            showMegaMenu ? "-scale-y-100" : ""
                          }`}
                        >
                          <FaAngleDown />
                        </span>
                      </button>

                      {showMegaMenu && (
                        <div className="position-sticky top-0 z-50 w-full rounded-xl bg-white p-2 lg:absolute lg:left-0 lg:top-full lg:w-[850px] lg:p-8 lg:shadow-lg dark:bg-dark">
                          <div className="grid gap-5 lg:grid-cols-3">
                            <div>
                              <div className="space-y-2">
                                <Link to="/Telecommunication">
                                  <MegaMenuItem
                                    icon={<FaGraduationCap />}
                                    title="Télécommunications"
                                  />
                                </Link>
                                <Link to="/consulting">
                                  <MegaMenuItem
                                    icon={<FaPuzzlePiece />}
                                    title="Etude et Conseil
"
                                  />
                                </Link>
                                <Link to="/physical-archiving">
                                  <MegaMenuItem
                                    icon={<FaRocket />}
                                    title="Archivage Physique"
                                  />
                                </Link>
                                <Link to="/electronic-archiving">
                                  <MegaMenuItem
                                    icon={<FaRocket />}
                                    title="Archivage Electronique"
                                  />
                                </Link>
                                <Link to="/training">
                                  <MegaMenuItem
                                    icon={<FaRocket />}
                                    title="Formation"
                                  />
                                </Link>
                                <Link to="/remote-work">
                                  <MegaMenuItem
                                    icon={<FaRocket />}
                                    title="Travail à distance"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>

                    <li>
                      <Link
                        to="/references"
                        className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex dark:text-dark-6 dark:hover:text-white"
                      >
                        <FaDochub className="mt-1 mr-2" />
                        References
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex dark:text-dark-6 dark:hover:text-white"
                      >
                        <FaMailBulk className="mt-1 mr-2" />
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/jobs"
                        className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex dark:text-dark-6 dark:hover:text-white"
                      >
                        <FaSuitcase className="mt-1 mr-2" />
                        Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs"
                        className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex dark:text-dark-6 dark:hover:text-white"
                      >
                        <FaQuestion className="mt-1 mr-2" />
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// eslint-disable-next-line react/prop-types
function MegaMenuItem({ icon, title }) {
  return (
    <div className="flex items-center space-x-2 text-sm text-dark dark:text-white">
      <div className="p-2 text-2xl text-primary">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
      </div>
    </div>
  );
}

export default Header;
