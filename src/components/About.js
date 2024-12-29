// src/components/About.js

import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaAward } from "react-icons/fa";
import { Parallax } from "react-parallax";
import aboutImage from "../assets/optimized/about-image.webp";
import parallaxImage from "../assets/optimized/parallax-image.webp";
import { Helmet } from "react-helmet-async";
import profilSlika1 from "../assets/optimized/profilsSika1.webp";
import profilSlika2 from "../assets/optimized/profilSlika2.webp";
import timSaradnika from "../assets/optimized/tim-saradnika.webp";

// const TeamSection = lazy(() => import("./TeamSection"));
// const VideoSection = lazy(() => import("./VideoSection"));

const About = () => {
  return (
    <div className="bg-gray-50 py-16">
      <Helmet>
        <title>O Nama | Projekat Kuće i Projekti Kuća</title>
        <meta
          name="description"
          content="Saznajte više o našem timu, misiji i viziji. Istražite kako kreiramo projekte kuća i projekte arhitektonskih rešenja koji inspirišu i traju."
        />
        <meta
          property="og:title"
          content="O Nama | Projekat Kuće i Projekti Kuća"
        />
        <meta
          property="og:description"
          content="Upoznajte našu priču, misiju i tim koji stoji iza inovativnih arhitektonskih rešenja i projekata kuća."
        />
        <meta property="og:image" content={parallaxImage} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Sekcija Naslova */}
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          O Nama
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          U našoj kompaniji posvećeni smo transformaciji prostora kroz
          inovativni dizajn i održive prakse. Naš tim iskusnih arhitekata i
          dizajnera radi zajedno kako bi ostvario vašu viziju.
        </motion.p>
      </div>

      {/* Glavna Sekcija */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Slika */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImage}
            alt="O Nama"
            className="w-full h-80 sm:h-96 md:h-full object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </motion.div>

        {/* Tekst */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Naša Misija</h3>
          <p className="text-gray-600">
            Naša misija je da pružimo izuzetna arhitektonska rešenja koja ne
            samo da ispunjavaju potrebe klijenata već i inspirišu i traju.
            Kreiramo prostore koji su funkcionalni i estetski privlačni, uz
            dugoročnu održivost.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800">Naša Vizija</h3>
          <p className="text-gray-600">
            Naša vizija je da budemo vodeća arhitektonska kompanija prepoznata
            po inovativnom dizajnu, održivosti i izvrsnosti u radu sa
            klijentima. Oblikujemo horizonte budućnosti sa kreativnošću i
            integritetom.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Karakteristika 1 */}
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <FaLightbulb className="text-blue-500 text-4xl mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Inovativni Dizajn
              </h4>
              <p className="text-gray-600">
                Kreiramo kreativna rešenja koja kombinuju funkcionalnost i
                estetiku.
              </p>
            </motion.div>

            {/* Karakteristika 2 */}
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <FaUsers className="text-blue-500 text-4xl mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Tim za Saradnju
              </h4>
              <p className="text-gray-600">
                Raznovrstan tim koji zajedno ostvaruje izvanredne rezultate.
              </p>
            </motion.div>

            {/* Karakteristika 3 */}
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <FaAward className="text-blue-500 text-4xl mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Nagrađivani Rad
              </h4>
              <p className="text-gray-600">
                Prepoznati smo po izvrsnosti u dizajnu i održivim praksama.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Parallax Sekcija */}
      <Parallax bgImage={parallaxImage} strength={300}>
        <div style={{ height: 300 }}>
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50 ">
            <h2 className="text-4xl font-bold text-white text-center px-4">
              Posvećeni Izvrsnosti
            </h2>
          </div>
        </div>
      </Parallax>

      {/* Video Sekcija */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h3
            className="text-3xl font-bold text-gray-800 text-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Naše Putovanje
          </motion.h3>
          <motion.div
            className="w-full rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ height: "600px" }}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/38vK64FNbBI?vq=hd1080"
              title="Naše Putovanje"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Sekcija Tima */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <motion.h3
          className="text-3xl font-bold text-gray-800 text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Upoznajte Naš Tim
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Član Tima 1 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={profilSlika1}
              alt="Jovan Milivojević"
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800">Vladimir</h4>
              <p className="text-gray-600">Arhitekta</p>
              <p className="mt-4 text-gray-600">
                Jovan je dizajner sa preko 10 godina iskustva u stvaranju
                održivih i inovativnih arhitektonskih rešenja.
              </p>
            </div>
          </motion.div>

          {/* Član Tima 2 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={profilSlika2}
              alt="Branko Milivojević"
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800">
                Branko Milivojević
              </h4>
              <p className="text-gray-600">Arhitekta</p>
              <p className="mt-4 text-gray-600">
                Branko je specijalizovan za moderne dizajne, obezbeđujući
                funkcionalnost i vizuelnu privlačnost svakog projekta.
              </p>
            </div>
          </motion.div>

          {/* Član Tima 3 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={timSaradnika}
              alt="Tim Saradnika Na projektima kuća"
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800">
                Tim Saradnika
              </h4>
              <p className="text-gray-600">Arhitekta</p>
              <p className="mt-4 text-gray-600">
                Naš tim osigurava da svi projekti budu završeni na vreme i u
                skladu sa najvišim standardima kvaliteta.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
