
import { useState } from "react"
import { Link } from "react-router-dom"
import {
  FaGlobe,
  FaDollarSign,
  FaBook,
  FaQuestionCircle,
  FaFileAlt,
  FaUserCircle,
  FaGraduationCap,
  FaPuzzlePiece,
  FaRocket,FaFacebook, FaTwitter, FaLinkedin,
  FaAddressCard,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa"

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [showMegaMenu, setShowMegaMenu] = useState(false)

  return (
    <header className="position-sticky top-0 z-50 bg-primary dark:bg-dark-2">
 
 <div className="bg-gray-800 p-4 text-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 text-white">
        <div className="flex flex sm:space-x-6 lg:space-x-8">
          <span className="flex gap-4">            <FaAddressCard  size={30}/>
Villa N°4-PTT, Avenue Ahmed Réda Guédira, Rabat, Maroc</span>
                   <span className="flex gap-4">        <FaMailBulk  size={30}/>
contact@archivom.com</span>
                <span className="flex gap-4">           <FaPhone  size={30}/>
+212 6 61 82 00 00</span>
        </div>
        <div className="flex space-x-6 justify-end  gap-4">
          <a href="https://facebook.com" target="_blank" className="text-white hover:text-gray-400 transition-colors">
            <FaFacebook  size={30}/>
          </a>
          <a href="https://twitter.com" target="_blank" className="text-white hover:text-gray-400 transition-colors">
            <FaTwitter size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" className="text-white hover:text-gray-400 transition-colors">
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
                  className={` top-0 z-50 absolute right-4 top-full w-full max-w-[300px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none dark:bg-dark-2 lg:dark:bg-transparent ${
                    !navbarOpen ? "hidden" : ""
                  }`}
                  id="navbarCollapse"
                >
                  <ul className="block lg:flex">
                    <li className="relative" onClick={() => setShowMegaMenu(!showMegaMenu)}>
                      <button className="flex w-full items-center justify-between gap-2 py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex lg:w-auto lg:justify-center dark:text-dark-6 dark:hover:text-white">
                        Resources
                        <span className={`duration-200 ${showMegaMenu ? "-scale-y-100" : ""}`}>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </button>

                      {showMegaMenu && (
                        <div className="position-sticky top-0 z-50 w-full rounded-xl bg-white p-2 lg:absolute lg:left-0 lg:top-full lg:w-[850px] lg:p-8 lg:shadow-lg dark:bg-dark">
                          <div className="grid gap-5 lg:grid-cols-3">
                            <div>
                              <h4 className="mb-3 text-sm font-semibold text-dark dark:text-white">Get Started</h4>
                              <div className="space-y-2">
                                <MegaMenuItem
                                  icon={<FaGlobe />}
                                  title="About Company"
                                  description="Learn about our mission, vision, and values"
                                />
                                <MegaMenuItem
                                  icon={<FaDollarSign />}
                                  title="Our Pricing"
                                  description="Explore our flexible pricing options"
                                />
                                <MegaMenuItem
                                  icon={<FaBook />}
                                  title="Read Blog"
                                  description="Stay updated with our latest articles and insights"
                                />
                              </div>
                            </div>
                            <div>
                              <h4 className="mb-3 text-sm font-semibold text-dark dark:text-white">Support</h4>
                              <div className="space-y-2">
                                <MegaMenuItem
                                  icon={<FaQuestionCircle />}
                                  title="Help Center"
                                  description="Find answers to your questions"
                                />
                                <MegaMenuItem
                                  icon={<FaFileAlt />}
                                  title="Documentation"
                                  description="Detailed guides and API references"
                                />
                                <MegaMenuItem
                                  icon={<FaUserCircle />}
                                  title="Manage Accounts"
                                  description="Control your account settings"
                                />
                              </div>
                            </div>
                            <div>
                              <h4 className="mb-3 text-sm font-semibold text-dark dark:text-white">Resources</h4>
                              <div className="space-y-2">
                                <MegaMenuItem
                                  icon={<FaGraduationCap />}
                                  title="Tutorials"
                                  description="Step-by-step guides to get you started"
                                />
                                <MegaMenuItem
                                  icon={<FaPuzzlePiece />}
                                  title="Integrations"
                                  description="Connect with your favorite tools"
                                />
                                <MegaMenuItem
                                  icon={<FaRocket />}
                                  title="Community"
                                  description="Join our vibrant developer community"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex dark:text-dark-6 dark:hover:text-white"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex dark:text-dark-6 dark:hover:text-white"
                      >
                        Contact
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
  )
}

// eslint-disable-next-line react/prop-types
function MegaMenuItem({ icon, title, description }) {
  return (
    <a
      href="#"
      className="group flex flex-col gap-4 rounded-lg p-4 duration-200 hover:bg-gray-1 lg:flex-row dark:hover:bg-white/5"
    >
      <div className="text-primary">{icon}</div>
      <div>
        <h3 className="mb-1 text-base font-semibold text-dark duration-200 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
          {title}
        </h3>
        <p className="text-sm text-body-color dark:text-dark-6">{description}</p>
      </div>
    </a>
  )
}

export default Header

