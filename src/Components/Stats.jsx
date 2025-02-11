import statsbg from "../assets/images/stats.svg"
function Stats() {
  return (
    <div>
      <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Our Stats
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px] dark:text-white">
          Stats
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available
            but the majority have suffered alteration in some form.
          </p>
        </div>
      </div>
    </div>
        <section className="relative z-10 overflow-hidden bg-primary py-24">
          
  <div className="mx-auto px-4 sm:container">
    
    <div className="-mx-4 flex flex-wrap justify-center">
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[325px] text-center lg:mb-0">
          <h3 className="mb-4 text-4xl font-bold leading-[1.2] text-white lg:text-5xl">
            5M+
          </h3>
          <p className="text-base text-white sm:text-lg">
            Customers visit Omega every month to get their service done.
          </p>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[325px] text-center lg:mb-0">
          <h3 className="mb-4 text-4xl font-bold leading-[1.2] text-white lg:text-5xl">
            92%
          </h3>
          <p className="text-base text-white sm:text-lg">
            Satisfaction rate comes from our awesome customers.
          </p>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto max-w-[325px] text-center">
          <h3 className="mb-4 text-4xl font-bold leading-[1.2] text-white lg:text-5xl">
            500+
          </h3>
          <p className="text-base text-white sm:text-lg">
            Average Award we have got all over internet.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="absolute left-1/2 top-0 -z-10 h-full w-full -translate-x-1/2">
    <img src={statsbg} alt="graphic" className="h-full w-full" />
  </div>
</section>

    </div>
  )
}

export default Stats