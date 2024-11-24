// Home.js
import React, { useEffect, useState } from "react";
import { FaProjectDiagram, FaHandshake, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { Helmet } from "react-helmet-async";
import { db } from "../firebaseConfig";
import { collection, query, limit, getDocs } from "firebase/firestore";
import heroImage from "../assets/hero-image.jpg";
import parallaxImage from "../assets/parallax-image.jpg";
import FeatureCard from "../components/FeatureCard";
import { useNavigate } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size";

const Home = () => {
  const [latestProjects, setLatestProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const fetchLatestProjects = async () => {
      try {
        const projectsRef = collection(db, "projects");
        const q = query(projectsRef, limit(3));

        const querySnapshot = await getDocs(q);
        console.log("Q", querySnapshot);
        console.log("Query Snapshot:", querySnapshot.size);

        const projectsList = querySnapshot.docs.map((doc) => {
          console.log("Project Data:", doc.data());
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title?.trim() || "Bez Naslova",
            description: data.description || "Bez Opisa",
            imageURL: data.imageURL || "",
          };
        });

        setLatestProjects(projectsList);
      } catch (err) {
        console.error("Greška pri učitavanju projekata:", err);
        setError(
          "Nije moguće učitati najnovije projekte. Molimo pokušajte kasnije."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProjects();
  }, []);

  const handleProjectClick = (id) => {
    navigate(`/projekti-kuce/${id}`);
  };

  return (
    <div>
      <Helmet>
        <title>Projekti Kuća i Projekat Kuće</title>
        <meta
          name="description"
          content="Portfolio arhitekta sa najnovijim projektima kuća i projekat kuće. Otkrijte inovativne dizajne i održiva rešenja za vaš dom."
        />
        {/* Dodajte druge meta tagove po potrebi */}
      </Helmet>

      {/* Hero Sekcija */}
      <section className="relative bg-gray-800 text-white py-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Arhitektonski dizajn"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Dobrodošli na naš katalog Projekata Kuća
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Prikazujemo elegantne arhitektonske dizajne i inovativne projekte
            kuća.
          </motion.p>
          <motion.a
            href="/projekti-kuce"
            className="inline-block bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Istražite Naše Projekte
          </motion.a>
        </div>
      </section>

      {/* Sekcija Pregleda Portfolio */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-12">
            Naš Portfolio
          </h2>

          {loading ? (
            <p className="text-center text-gray-500">
              Učitavanje najnovijih projekata...
            </p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {latestProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleProjectClick(project.id)}
                >
                  {project.imageURL ? (
                    <img
                      src={project.imageURL}
                      alt={project.title}
                      className="w-full h-64 sm:h-48 md:h-64 object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-64 sm:h-48 md:h-64 bg-gray-300 flex items-center justify-center">
                      <p className="text-gray-600">Nema dostupne slike</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                    <h3 className="text-white text-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {!loading && !error && (
            <div className="text-center mt-12">
              <motion.a
                href="/projekti-kuce"
                className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Vidi Sve Projekte
              </motion.a>
            </div>
          )}
        </div>
      </section>

      {/* Parallax Sekcija */}
      {windowWidth >= 640 ? (
        <div className="relative z-0">
          <Parallax bgImage={parallaxImage} strength={500}>
            <section className="h-96 flex items-center justify-center">
              <motion.h2
                className="text-4xl md:text-5xl text-white font-bold bg-black bg-opacity-50 px-4 py-2 rounded"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Kreiramo Prostore sa Preciznošću i Strašću
              </motion.h2>
            </section>
          </Parallax>
        </div>
      ) : (
        <section
          className="h-64 flex items-center justify-center bg-gray-800 bg-cover bg-center"
          style={{ backgroundImage: `url(${parallaxImage})` }} // Statična pozadinska slika
        >
          <motion.h2
            className="text-1xl sm:text-1xl text-white font-bold bg-black bg-opacity-50 px-4 py-2 rounded"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Kreiramo Prostore sa Preciznošću i Strašću
          </motion.h2>
        </section>
      )}

      {/* Uvodna Sekcija */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={heroImage}
              alt="Naš Rad"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              O Našem Radu
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sa godinama iskustva i timom veštih arhitekata, pretvaramo
              vizionarske koncepte u stvarnost. Od stambenih prostora do
              komercijalnih objekata, težimo ka praktičnim rešenjima za Vaš
              životni i radni prostor.
            </p>
            <motion.a
              href="/o-nama"
              className="text-blue-500 font-semibold hover:underline"
              whileHover={{ color: "#2563EB" }}
            >
              Saznajte Više o Nama
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Sekcija Misija i Vizija */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misija */}
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Naša Misija
              </h3>
              <p className="text-gray-700">
                Naša misija je da pružimo izuzetna arhitektonska rešenja koja ne
                samo da ispunjavaju potrebe klijenata već i inspirišu i traju.
                Kreiramo prostore koji su funkcionalni i estetski privlačni, uz
                dugoročnu održivost.
              </p>
            </motion.div>
            {/* Vizija */}
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Naša Vizija
              </h3>
              <p className="text-gray-700">
                Naša vizija je da budemo vodeća arhitektonska kompanija
                prepoznata po inovativnom dizajnu, održivosti i izvrsnosti u
                radu sa klijentima. Oblikujemo horizonte budućnosti sa
                kreativnošću i integritetom.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sekcija Karakteristika */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-12">
            Naše Usluge
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <FeatureCard
              Icon={FaProjectDiagram}
              title="Inovativni Dizajn"
              description="Kreiranje najsavremenijih dizajna koji kombinuju funkcionalnost sa estetikom."
            />
            <FeatureCard
              Icon={FaHandshake}
              title="Saradnja sa Klijentima"
              description="Bliska saradnja sa klijentima kako bismo osigurali da se njihova vizija ostvari."
            />
            <FeatureCard
              Icon={FaLeaf}
              title="Održiva Rešenja"
              description="Implementacija ekološki prihvatljivih praksi za zeleniju budućnost."
            />
          </div>
        </div>
      </section>

      {/* Poziv na Akciju */}
      <section className="bg-blue-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Spremni da Počnete Vaš Projekat?
          </h2>
          <p className="mb-6">
            Dozvolite nam da vam pomognemo da vašu arhitektonsku viziju
            pretvorite u stvarnost.
          </p>
          <motion.a
            href="/kontakt"
            className="bg-white text-blue-500 py-3 px-6 rounded font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
            whileHover={{ scale: 1.05 }}
          >
            Kontaktirajte Nas Danas
          </motion.a>
        </div>
      </section>

      {/* Sekcija Svedočenja */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-12">
            Šta Naši Klijenti Kažu
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Svedočenje 1 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
              whileHover={{
                y: -10,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700 mb-4">
                "Njihova pažnja prema detaljima i inovativni dizajni
                transformisali su naš radni prostor u nešto zaista izvanredno."
              </p>
              <h4 className="text-lg font-semibold text-gray-800">
                - Jovana Petrović
              </h4>
            </motion.div>

            {/* Svedočenje 2 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
              whileHover={{
                y: -10,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700 mb-4">
                "Profesionalan i kreativan tim! Bez problema su ostvarili našu
                viziju."
              </p>
              <h4 className="text-lg font-semibold text-gray-800">
                - Marko Jovanović
              </h4>
            </motion.div>

            {/* Svedočenje 3 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
              whileHover={{
                y: -10,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700 mb-4">
                "Izuzetna usluga i odlični rezultati. Toplo preporučujem njihovu
                arhitektonsku stručnost."
              </p>
              <h4 className="text-lg font-semibold text-gray-800">
                - Ana Nikolić
              </h4>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
