import Layout from "../Components/layout/Layout";

function References() {
    return (
      <Layout
      title={"References"}
      description={" Les entreprises qui font confiance à Archivom ont réalisé à quel point il est stratégique de s’appuyer sur un partenaire efficace qui leur permet de se concentrer sur leur cœur de métier, tout en apportant productivité et gains financiers."}
> 
        <div className="mt-10 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                References
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-[40px]/[48px] dark:text-white">
                References
                </h2>
                
              </div>
            </div>
          </div>

           <section className="bg-white dark:bg-dark">
          <div className="container mx-auto text-center">
            <p className="mb-8 text-lg text-body-color dark:text-white">
              Les entreprises qui font confiance à Archivom ont réalisé à quel point il est stratégique de s’appuyer sur un partenaire efficace qui leur permet de se concentrer sur leur cœur de métier, tout en apportant productivité et gains financiers.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#" className="flex w-[350px] items-center justify-center py-5 2xl:w-[400px]">
                <img
                  src="https://archivom.fr/wp-content/uploads/2023/03/Archivom_References_23_02_2021-1024x576.png"
                  alt="image"
                  className="h-[400px]"
                />
              </a>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
  
  export default References;
  