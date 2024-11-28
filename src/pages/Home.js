// src/Home.js
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { db } from "../firebaseConfig";
import { collection, query, limit, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size";

import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";
import ParallaxSection from "../components/ParallaxSection";
import IntroductionSection from "../components/IntroductionSection";
import MissionVisionSection from "../components/MissionVisionSection";
import FeaturesSection from "../components/FeaturesSection";
import CallToActionSection from "../components/CallToActionSection";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = () => {
  const [latestProjects, setLatestProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  return (
    <div>
      <Helmet>
        <title>
          Projekti Kuća | Inovativni Dizajni i Održiva Rješenja za Vaš Dom
        </title>
        <meta
          name="description"
          content="Portfolio arhitekta s najnovijim projektima kuća. Otkrijte inovativne dizajne i održiva rješenja za vaš dom."
        />
        <meta
          name="keywords"
          content="projekti kuća, arhitektura, dizajn kuća, održiva rješenja, portfolio arhitekta"
        />
        {/* Open Graph Meta Tagovi */}
        <meta
          property="og:title"
          content="Projekti Kuća | Inovativni Dizajni za Vaš Dom"
        />
        <meta
          property="og:description"
          content="Pogledajte najnovije projekte kuća i otkrijte kako možemo pomoći u stvaranju vašeg idealnog doma."
        />
        <meta property="og:image" content="https://projektikuce.rs/logo.png" />
        <meta property="og:url" content="https://projektikuce.rs/" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tagovi */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Projekti Kuća | Inovativni Dizajni za Vaš Dom"
        />
        <meta
          name="twitter:description"
          content="Pogledajte najnovije projekte kuća i otkrijte kako možemo pomoći u stvaranju vašeg idealnog doma."
        />
        <meta name="twitter:image" content="URL_DO_VASE_SLIKE" />
        {/* Strukturalni Podaci */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Architect",
              "name": "Projekti Kuća",
              "url": "https://projektikuce.rs/",
              "logo": "https://projektikuce.rs/logo.png",
              "sameAs": [
                "https://www.facebook.com/vasaprofil",
                "https://www.instagram.com/vasaprofil"
              ],
              "description": "Portfolio arhitekta s najnovijim projektima kuća. Inovativni dizajni i održiva rješenja za vaš dom."
            }
          `}
        </script>
      </Helmet>

      <header>
        <HeroSection />
      </header>

      <main>
        <section id="portfolio">
          <PortfolioSection
            projects={latestProjects}
            loading={loading}
            error={error}
          />
        </section>

        <section id="parallax">
          <ParallaxSection />
        </section>

        <section id="introduction">
          <IntroductionSection />
        </section>

        <section id="mission-vision">
          <MissionVisionSection />
        </section>

        <section id="features">
          <FeaturesSection />
        </section>

        <section id="call-to-action">
          <CallToActionSection />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>
      </main>

      <footer>
        {/* Dodajte footer sadržaj s relevantnim linkovima i informacijama */}
      </footer>
    </div>
  );
};

export default Home;
