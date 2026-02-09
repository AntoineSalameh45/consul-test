import {
  AppointmentIcon,
  EmailIcon,
  FaxIcon,
  LocationIcon,
  PaperworkIcon,
  PassportIcon,
  PhoneIcon,
  VisaIcon,
} from "../../../assets/icons";
import { Reveal } from "../../animations/RevealSection";
import { AnnonceSlider } from "../../organisms/AnnonceSlider";

const Home = () => {
  const services = [
    {
      label: "Passeports & Documents",
      icon: PassportIcon,
    },
    {
      label: "État Civil",
      icon: PassportIcon,
    },
    {
      label: "Procuration & Légalisation",
      icon: VisaIcon,
    },
    {
      label: "Certificats & Traductions",
      icon: PaperworkIcon,
    },
    {
      label: "Affaires Administratives",
      icon: PaperworkIcon,
    },
    {
      label: "Rendez-vous Consulaires",
      icon: AppointmentIcon,
    },
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-[url('/src/assets/images/consulat-liban-marseille.jpg')] bg-cover text-white w-full max-h-full">
        <div className="container mx-auto px-4 py-16 text-right bg-[#00000055] relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Consulat Général du Liban à Marseille
          </h1>
          <div className="mx-auto">
            <p className="max-w-2xl ml-auto text-sm sm:text-base text-gray-200">
              Bienvenue sur le site officiel du Consulat Général du Liban à
              Marseille. Vous trouverez ici toutes les informations utiles
              concernant les services consulaires, les démarches administratives
              et l’actualité.
            </p>
          </div>
        </div>
      </section>

      {/* Announcement Section */}
      <section className="bg-white h-screen flex items-center justify-center pt-20 pb-40">
        <Reveal>
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-black">
              Actualités & Annonces
            </h2>
            <div className="space-y-4 h-full">
              <div className="p-4 rounded">
                <AnnonceSlider />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Services Preview */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-40">
        <Reveal>
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white">
              Services Consulaires
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="group bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition"
                >
                  <div className="flex justify-center mb-4">
                    <div className="h-8 w-8 text-[#0b2c5f] group-hover:scale-110 transition">
                      <Icon />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{label}</h3>
                  <p className="text-sm text-gray-600">
                    Informations et procédures concernant {label.toLowerCase()}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Practical Info */}
      <section className="bg-white min-h-screen flex items-center justify-center pt-20 pb-40">
        <Reveal>
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-black">
              Informations Pratiques
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="bg-gray-100 p-6 rounded shadow">
                <h3 className="font-semibold mb-2">Adresse</h3>

                <div className="flex gap-2 mb-4 items-center">
                  <LocationIcon className="h-5 w-5" />
                  <p className="text-sm text-gray-600">
                    2, Avenue du parc Borély 13008 Marseille
                  </p>
                </div>
                <iframe
                  className="w-full h-64 rounded border"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23243.568509023113!2d5.377969!3d43.26303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c74188a6a781%3A0x11b5a92a1b8a415c!2s2%20Av.%20du%20Parc%20Bor%C3%A9ly%2C%2013008%20Marseille%2C%20France!5e0!3m2!1sen!2sus!4v1769711866743!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="mt-4">
                  <h3 className="font-semibold">Horaires & rendez-vous</h3>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      Du Lundi au Vendredi de 8h30 à 15h00
                      <br />
                      Ouverture au public de 9h00 à 13h00
                    </p>
                    <p className="text-sm mt-4">
                      Pour prendre rendez-vous, veuillez utiliser notre&nbsp;
                      <a
                        className="text-blue-600 hover:underline"
                        href="/rendez-vous"
                      >
                        système de rendez-vous en ligne
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-6 rounded shadow">
                <h3 className="font-semibold mb-4">Contact</h3>
                <div className="text-center flex flex-col gap-4">
                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <PhoneIcon className="w-8 h-8" />
                    <p className="text-sm text-gray-600">04 91 71 50 60</p>
                  </div>
                  {/* Fax */}
                  <div className="flex items-center space-x-4">
                    <FaxIcon className="w-8 h-8" />
                    <p className="text-sm text-gray-600">04 91 77 26 75</p>
                  </div>
                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <EmailIcon className="w-8 h-8" />
                    <p className="text-sm text-gray-600">
                      consuliban.marseille@gmail.com
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mt-4">Réseaux Sociaux</h3>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Home;
