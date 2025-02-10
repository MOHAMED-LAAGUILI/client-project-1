import { Link } from "react-router-dom"

function Hero() {
  return (
    <div>
     <div className="relative bg-white pb-[110px] pt-[60px] lg:pt-[50px] dark:bg-dark">
  <div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap items-center">
      <div className="w-full px-4 lg:w-5/12">
        <div className="hero-content">
          <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark sm:text-[42px] lg:text-[40px] xl:text-5xl dark:text-white">
            The Greatest <br />
            Journey Of Online <br />
            Payment.
          </h1>
          <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
            With TailGrids, business and students thrive together. Business
            can perfectly match their staffing to changing demand throughout
            the dayed.
          </p>
          <ul className="flex flex-wrap items-center">
            <li>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7">
                Contact Us
              </Link>
            </li>
          
          </ul>
          <div className="clients pt-16">
            <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
              Some Of Our Clients
              <span className="ml-3 inline-block h-px w-8 bg-body-color" />
            </h6>
            <div className="flex items-center gap-4 xl:gap-[50px]">
              <a href="javascript:void(0)" className="block py-3">
                <img src="https://archivom.fr/wp-content/uploads/2023/05/Maroc_TClCcom_logo_08_05_2019.png" alt="oracle" />
              </a>
              <a href="javascript:void(0)" className="block py-3">
                <img src="https://archivom.fr/wp-content/uploads/2023/05/CDG_logo_08_05_2019.png" alt="intel" />
              </a>
              <a href="javascript:void(0)" className="block py-3">
                <img src="https://archivom.fr/wp-content/uploads/2023/05/INWI-_-Logo_08_05_2019.png" alt="logitech" />
              </a>
              
              
            </div>
            
            <div className="flex items-center gap-4 xl:gap-[50px]">
            <a href="javascript:void(0)" className="block py-3">
                <img src="https://archivom.fr/wp-content/uploads/2023/05/UniversitC-Cadi-Ayyad_logo_08_05_2019.png" alt="logitech" />
              </a>
              <a href="javascript:void(0)" className="block py-3">
                <img src="https://archivom.fr/wp-content/uploads/2023/05/La-Poste_Logo_08_05_2019.jpg" alt="oracle" />
              </a>
              <a href="javascript:void(0)" className="block py-3">
                <img src="https://archivom.fr/wp-content/uploads/2023/05/Ministare-de-lIntCrieur_logo_08_05_2019.png" alt="intel" />
              </a>
              
            </div>

            <div className="flex items-center gap-4 xl:gap-[50px]">
            <a href="javascript:void(0)" className="block py-3">
                <img src="https://archivom.fr/wp-content/uploads/2023/05/Fonciare-Chellah-_-Logo_08_05_2019-e1557410540619.png" alt="logitech" />
              </a>
              <a href="javascript:void(0)" className="block py-3">
                <img src="https://archivom.fr/wp-content/uploads/2023/05/UniversitC-Hassan-I-_logo_-08_05_2019.png" alt="logitech" />
              </a>
              
              <a href="javascript:void(0)" className="block py-3">
                <img src="https://archivom.fr/wp-content/uploads/2023/05/Caisse-Marocaine-des-Retraites_ARCHIVOM_08_05_2019.jpg" alt="oracle" />
              </a>
          
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="hidden px-4 lg:block lg:w-1/12" />
      <div className="w-full px-4 lg:w-6/12">
        <div className="lg:ml-auto lg:text-right">
          <div className="relative z-10 inline-block pt-11 lg:pt-0">
            <img src="https://archivom.fr/wp-content/uploads/2023/02/successful-business-team.jpg" alt="hero" className="max-w-full lg:ml-auto" />
            <span className="absolute -bottom-8 -left-8 z-[-1]">
              <svg width={93} height={93} viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Hero