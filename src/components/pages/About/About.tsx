import { AnthemTabs } from "../../organisms/AnthemTabs";
import { ArchiveTabs } from "../../organisms/ArchiveTabs";
import { HolidaysCalendar } from "../../organisms/HolidaysCalendar";

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
      <section className="min-h-screen relative text-white">
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
          <img src="src\assets\images\myVisitedPlaces.gif" className="h-auto" />
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
        className="bg-white min-h-screen flex items-center justify-center pt-20 pb-40 text-black"
      >
        <div className="container mx-auto px-4 py-12">
          <h2>Consul Générale Present (2026-):</h2>
          <img
            src="src\assets\images\consul-mattar.jpg"
            alt="Consul Générale Presente"
          />
          <h3>Ralph MATTAR</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            fugiat nulla, adipisci minima temporibus et libero minus. Autem,
            blanditiis alias at nihil fuga dolorum aperiam aliquam, ducimus eius
            inventore similique. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Temporibus molestiae numquam id perspiciatis
            veniam vero eum similique laboriosam dicta blanditiis corrupti unde
            eveniet sit voluptatum nulla cumque vel, soluta at?
          </p>
        </div>
      </section>

      {/* Holidays Calendar Section */}
      <section
        id="holidays-calendar"
        className="min-h-screen flex items-center justify-center pt-20 pb-40 text-white"
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
        className="bg-white min-h-screen flex items-center justify-center pt-20 pb-40 text-black"
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
