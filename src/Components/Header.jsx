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
  FaInstagram,
  FaServicestack,
  FaHome,
  FaDochub,
  FaSuitcase,
  FaQuestion,
} from "react-icons/fa";
import { FaAngleDown, FaMapLocation } from "react-icons/fa6";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-dark/70 transition-all">
     <div className="bg-green-dark p-4 text-sm shadow">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 text-white">
    <div className="flex flex-wrap sm:space-x-6 lg:space-x-8 items-center gap-4">
      <span className="flex items-center gap-4">
        <FaMapLocation size={30} />
        Villa N°4-PTT, Avenue Ahmed Réda Guédira, Rabat, Maroc
      </span>
      <span className="flex items-center gap-4">
        <FaMailBulk size={30} />
        contact@archivom.com
      </span>
      <span className="flex items-center gap-4">
        <FaPhone size={30} />
        +212 6 61 82 00 00
      </span>
    </div>
    <div className="flex flex-wrap justify-end gap-4 items-center">
      <a
        href="https://facebook.com"
        target="_blank"
        className="text-white hover:text-gray-400 transition-colors"
      >
        <FaFacebook size={30} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        className="text-white hover:text-gray-400 transition-colors"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        className="text-white hover:text-gray-400 transition-colors"
      >
        <FaLinkedin size={30} />
      </a>
    </div>
  </div>
</div>


      <div className="bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <Link to="/" className="block w-full py-5">
                <img
                  src="https://archivom.fr/wp-content/uploads/2023/04/lastArchivom-Logo-Couleur-_17_04_2019-2-1024x359.png"
                  alt="logo"
                  className="dark:hidden"
                />
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                  alt="logo"
                  className="hidden dark:block"
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
                                <Link to="/telecommunications">
                                  <MegaMenuItem
                                    icon={<FaGraduationCap />}
                                    title="Télécommunications"
                                    description="Télécommunications services"
                                  />
                                </Link>
                                <Link to="/consulting">
                                  <MegaMenuItem
                                    icon={<FaPuzzlePiece />}
                                    title="Etude et Conseil"
                                    description="Consulting services for your business"
                                  />
                                </Link>
                                <Link to="/physical-archiving">
                                  <MegaMenuItem
                                    icon={<FaRocket />}
                                    title="Archivage Physique"
                                    description="Physical archiving solutions"
                                  />
                                </Link>
                                <Link to="/electronic-archiving">
                                  <MegaMenuItem
                                    icon={<FaRocket />}
                                    title="Archivage Electronique"
                                    description="Electronic archiving solutions"
                                  />
                                </Link>
                                <Link to="/training">
                                  <MegaMenuItem
                                    icon={<FaRocket />}
                                    title="Formation"
                                    description="Training for businesses and individuals"
                                  />
                                </Link>
                                <Link to="/remote-work">
                                  <MegaMenuItem
                                    icon={<FaRocket />}
                                    title="Travail à distance"
                                    description="Remote work solutions"
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
function MegaMenuItem({ icon, title, description }) {
  return (
    <div className="flex items-center space-x-2 text-sm text-dark dark:text-white">
      <div className="p-2 text-2xl text-primary">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Header;
