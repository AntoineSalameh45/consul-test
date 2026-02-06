import { Link } from "react-router";
import { PaperworkIcon, PassportIcon } from "../../../assets/icons";

const Services = () => {
  return (
    <main>
      <section>
        <div className="bg-[url('/src/assets/images/consulat-liban-marseille.jpg')] bg-cover bg-center h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Services Consulaire</h1>
        </div>
      </section>

      <section className="bg-white text-black min-h-screen flex flex-col justify-center pt-20 pb-40 px-5 mb-10">
        <h2 className="text-2xl font-bold mb-6">Nos Services</h2>
        <p className="mb-4">
          Le Consulat Général du Liban à Marseille offre une gamme complète de
          services consulaires pour les citoyens libanais résidant dans la
          région. Nos services incluent :
        </p>
        <div className="flex flex-col gap-4">
          <Link to="/services/passeports">
            <div className="flex flex-row items-center border-4 border-blue-950 p-4 rounded-2xl gap-1">
              <PassportIcon className="w-10 h-10" />
              <h3>Émission et renouvellement de passeports</h3>
            </div>
          </Link>
          <Link to="/services/etat-civil">
            <div className="flex flex-row items-center border-4 border-blue-950 p-4 rounded-2xl gap-1">
              <PaperworkIcon className="w-10 h-10" />
              <h3>Enregistrement des actes d'état civil</h3>
            </div>
          </Link>
          <Link to="/services/procuration-&-legalisation">
            <div className="flex flex-row items-center border-4 border-blue-950 p-4 rounded-2xl gap-1">
              <PaperworkIcon className="w-10 h-10" />
              <h3>Procurations et légalisations</h3>
            </div>
          </Link>
          <Link to="/services/certificats-&-traductions">
            <div className="flex flex-row items-center border-4 border-blue-950 p-4 rounded-2xl gap-1">
              <PaperworkIcon className="w-10 h-10" />
              <h3>Certificats et traductions</h3>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
