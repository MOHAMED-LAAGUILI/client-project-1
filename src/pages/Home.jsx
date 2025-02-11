import Hero from "../Components/Hero";
import NewsLeters from "../Components/NewsLeters";
import Services from "../Components/Services";
import Stats from "../Components/Stats";
import Team from "../Components/Team";
import What_we_offer from "../Components/What_we_offer";
import { motion } from "framer-motion";
import Layout from "../Components/layout/Layout";

function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <Layout title={"Home"} description={"Main page"}>
      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Services />
      </motion.div>

      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <What_we_offer />
      </motion.div>

      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Stats />
      </motion.div>

      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.6 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Team />
      </motion.div>

      {/*<motion.div {...fadeInUp} transition={{ delay: 0.7 }} whileInView={{ opacity: 1, y: 0 }}>
        <Testimonials />
      </motion.div>*/}

      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <NewsLeters />
      </motion.div>
    </Layout>
  );
}

export default Home;
