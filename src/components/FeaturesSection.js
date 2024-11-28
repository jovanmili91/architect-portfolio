// src/components/FeaturesSection.js
import React from "react";
import { FaProjectDiagram, FaHandshake, FaLeaf } from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;
