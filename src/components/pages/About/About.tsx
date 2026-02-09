import { AnthemTabs } from "../../organisms/AnthemTabs";
import { ArchiveTabs } from "../../organisms/ArchiveTabs";
import { HolidaysCalendar } from "../../organisms/HolidaysCalendar";
import { MapGif, ConsulMatar } from "../../../assets/images";

const departments = [
  "Ain",
  "Allier",
  "Alpes-de-Haute-Provence",
  "Alpes-Maritimes",
  "Ardèche",
  "Ariège",
  "Aude",
  "Aveyron",
  "Bouches-du-Rhône",
  "Cantal",
  "Charente",
  "Charente-Maritime",
  "Corrèze",
  "Creuse",
  "Deux-Sèvres",
  "Dordogne",
  "Drôme",
  "Gard",
  "Gers",
  "Gironde",
  "Haute-Garonne",
  "Haute-Loire",
  "Haute-Savoie",
  "Haute-Vienne",
  "Hautes-Alpes",
  "Hautes-Pyrénées",
  "Hérault",
  "Indre",
  "Isère",
  "Landes",
  "Loire",
  "Lot",
  "Lot-et-Garonne",
  "Lozère",
  "Puy-de-Dôme",
  "Pyrénées-Atlantiques",
  "Pyrénées-Orientales",
  "Rhône",
  "Savoie",
  "Tarn",
  "Tarn-et-Garonne",
  "Var",
  "Vaucluse",
  "Vienne",
  "Collectivité Territoriale Unique de Corse",
];

const About = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen relative text-white mb-10">
        {/* Content */}
        <div className="bg-[url('/src/assets/images/consulat-liban-marseille.jpg')] bg-cover bg-center">
          <div className="relative container mx-auto px-4 py-16 bg-black/60 text-white">
            <p className="mb-4">
              Le Consulat Général du Liban à Marseille a été créé en 1947.
            </p>

            <p className="mb-6">
              Sa juridiction couvre les départements suivants :
            </p>

            {/* Mobile: simple text */}
            <p className="md:hidden text-sm leading-relaxed text-gray-200">
              Ain, Allier, Alpes-de-Haute-Provence, Alpes-Maritimes, Ardèche,
              Ariège, Aude, Aveyron, Bouches-du-Rhône, Cantal, Charente,
              Charente-Maritime, Corrèze, Creuse, Deux-Sèvres, Dordogne, Drôme,
              Gard, Gers, Gironde, Haute-Garonne, Haute-Loire, Haute-Savoie,
              Haute-Vienne, Hautes-Alpes, Hautes-Pyrénées, Hérault, Indre,
              Isère, Landes, Loire, Lot, Lot-et-Garonne, Lozère, Puy-de-Dôme,
              Pyrénées-Atlantiques, Pyrénées-Orientales, Rhône, Savoie, Tarn,
              Tarn-et-Garonne, Var, Vaucluse, Vienne, Collectivité Territoriale
              Unique de Corse.
            </p>

            {/* Desktop: columns */}
            <ul
              className="
      hidden
      md:block
      md:columns-2
      lg:columns-3
      xl:columns-4
      space-y-1
    "
            >
              {departments.map((dept) => (
                <li
                  key={dept}
                  className="break-inside-avoid before:content-['•'] before:mr-2 before:text-gray-300"
                >
                  {dept}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-self-center">
          <img src={MapGif} className="h-auto" />
        </div>
        <div className="items-center justify-center mt-8 px-18">
          <div className="md:hidden container p-2 space-y-2 text-left mt-4 bg-white text-blue-950 rounded-2xl">
            <h3>Navigation:</h3>
            <ul className="list-disc list-inside text-sm text-blue-950">
              <li>
                <a href="#active-consulate">Consulat General Present</a>
              </li>
              <li>
                <a href="#holidays-calendar">Calendrier des fêtes</a>
              </li>
              <li>
                <a href="#archives">Archives</a>
              </li>
              <li>
                <a href="#hymne-national">Hymne National du Liban</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Active Consulate section */}
      <section
        id="active-consulate"
        className="bg-white min-h-screen flex items-center justify-center pt-20 pb-40 text-black mb-10"
      >
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold mb-8">
            Consul Général Présent (2026–)
          </h2>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Framed Image */}
            <div className="w-full md:w-1/3">
              <div className="bg-[#f4f7fb] rounded-xl p-5 shadow-md">
                <div className="bg-white rounded-lg overflow-hidden">
                  <img
                    src={ConsulMatar}
                    alt="Consul M. Ralph Matar"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-center">
                M. Ralph MATAR
              </h3>
            </div>

            {/* Text */}
            <div className="w-full md:w-2/3">
              <p className="text-gray-600 leading-relaxed">
                C’est un honneur et un privilège de rejoindre la formidable
                équipe du Consulat Général du Liban à Marseille en tant que
                nouveau Consul Général.
                <br />
                <br />
                Dans la lignée de mes illustres prédécesseurs, je serai à votre
                écoute afin de mieux vous servir dans le cadre des règles fixées
                par la loi et par la réglementation en vigueur. Ma mission
                consistera à promouvoir la douce puissance du Liban, sa culture
                et le génie libanais, qui se reflètent dans la vitalité de sa
                diaspora, illustrée dans tous les secteurs de la société et de
                l’économie française.
                <br />
                <br />
                Malgré toutes les tragédies qui ont ébranlé notre cher pays, le
                Liban demeure un précurseur des Lumières, porté par ses
                penseurs, ainsi que par l’espoir et la détermination de son
                peuple à survivre à l’adversité, à surmonter les épreuves et à
                préserver une capacité d’initiative qui ne s’éteint jamais.
                <br />
                <br />
                Servons ensemble cette idée du Liban, la seule qui compte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Holidays Calendar Section */}
      <section
        id="holidays-calendar"
        className="min-h-screen flex items-center justify-center pt-20 pb-40 text-white mb-10"
      >
        <div className="container mx-auto px-4 py-12">
          <h2 className="font-semibold">Calendrier des fêtes:</h2>
          <div className="mt-4">
            <HolidaysCalendar />
          </div>
          <span className="text-sm text-gray-300">
            *Les célébrations musulmanes dépendent du calendrier lunaire*
          </span>
        </div>
      </section>

      {/* Archive Tabs Section */}
      <section
        id="archives"
        className="bg-white min-h-screen flex items-center justify-center pt-20 pb-40 text-black mb-10"
      >
        <div className="container mx-auto px-4 py-12">
          <ArchiveTabs />
        </div>
      </section>

      {/* Anthem Section */}
      <section
        id="hymne-national"
        className="min-h-screen flex items-center justify-center pt-20 pb-40 text-white"
      >
        <div className="container mx-auto px-4 py-12">
          <h2 className="font-semibold mb-4">Hymne National du Liban:</h2>
          <iframe
            src="https://www.youtube.com/embed/nFnQ34td-Pc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-auto aspect-video"
          />
          <AnthemTabs />
        </div>
      </section>
    </main>
  );
};

export default About;
