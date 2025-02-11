import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";

function Footer() {
    return (
      <div>
        <footer className="relative z-1 bg-white pb-10 pt-20 lg:pb-20 lg:pt-[120px] dark:bg-dark shadow-lg border mt-5">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                <div className="mb-10 w-full">
                  <a href="javascript:void(0)" className="mb-6 inline-block max-w-[160px]">
                    <img src="https://archivom.fr/wp-content/uploads/2023/04/lastArchivom-Logo-Couleur-_17_04_2019-2-1024x359.png" alt="logo" className="max-w-full dark:hidden" />
                    <img src="https://archivom.fr/wp-content/uploads/2023/04/lastArchivom-Logo-Couleur-_17_04_2019-2-1024x359.png" alt="logo" className="hidden max-w-full dark:block" />
                  </a>
                  <p className="mb-7 text-base text-body-color dark:text-dark-6">
                    Villa N°4-PTT, Avenue Ahmed Réda Guédira, Rabat, Maroc
                  </p>
                  <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                    <span className="mr-3 text-primary">
<FaPhone size={30} />
                    </span>
                    <span>+212 6 61 82 00 00</span>
                  </p>
                </div>
              </div>
  
              {/* Other footer sections */}
  
              <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                <div className="mb-10 w-full">
                  <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                    Resources
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="javascript:void(0)" className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                        SaaS Development
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                        Our Products
                      </a>
                    </li>
                    {/* Other resources */}
                  </ul>
                </div>
              </div>
  
              {/* Footer sections for company, quick links, and follow us */}
  
              <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                <div className="mb-10 w-full">
                  <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                    Follow Us On
                  </h4>
                  <div className="mb-6 flex items-center">
                    <a href="javascript:void(0)" className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4 dark:border-dark-3 dark:text-white dark:hover:border-primary">
                     
                               
                             
                                  <FaLinkedin size={30} />
                                </a>
                    
                                <a href="javascript:void(0)" className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4 dark:border-dark-3 dark:text-white dark:hover:border-primary">
                                  <FaFacebook size={30} />
                                </a>
                                <a href="javascript:void(0)" className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4 dark:border-dark-3 dark:text-white dark:hover:border-primary">
                                  <FaInstagram size={30} />
                                </a>
                    {/* Other social icons */}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Credit text for web devs */}
            <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
              <p>
                Designed and developed by 
                <br/><a href="https://laaguili-dev.app.genez.io/" className="text-primary hover:underline">MOHAMED LAAGUILI</a>
              <br/>  <a href="https://www.yourwebsite.com" className="text-primary hover:underline">person 2</a>
               <br/> <a href="https://www.yourwebsite.com" className="text-primary hover:underline">person 3</a>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
export default Footer