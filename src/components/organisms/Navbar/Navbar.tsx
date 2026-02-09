import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LebanonFlag } from "../../../assets/images";

const servicesLinks = [
  { label: "Passeports & Documents", to: "/services/passeports" },
  { label: "État Civil", to: "/services/etat-civil" },
  {
    label: "Procuration & Légalisation",
    to: "/services/procuration-&-legalisation",
  },
  {
    label: "Certificats & Traductions",
    to: "/services/certificats-&-traductions",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full h-24
        z-50
        transition-all duration-300
        ${scrolled ? "bg-[#0b2c5fee] shadow-md" : "bg-transparent"}
      `}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex gap-2 items-center">
            <img
              src={LebanonFlag}
              className="h-14 sm:h-16"
              alt="Lebanon Flag"
            />
            <Link
              to="/"
              className="text-white font-bold text-sm sm:text-base leading-tight"
            >
              <div className="text-white font-bold text-sm sm:text-base leading-tight">
                Consulat Général
                <br />
                du Liban &agrave; Marseille
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-white font-semibold items-center">
            <li className="hover:underline">
              <Link to="/">Accueil</Link>
            </li>

            <li className="hover:underline">
              <Link to="/a-propos">Le Consulat</Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              {/* MAIN SERVICES PAGE */}
              <Link
                to="/services"
                className="hover:underline inline-flex items-center gap-1"
              >
                Services aux Citoyens
              </Link>

              {/* DROPDOWN */}
              <ul
                className="
      absolute top-full left-0 mt-3
      bg-white text-[#0b2c5f]
      rounded shadow-lg
      min-w-70
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-200
    "
              >
                {servicesLinks.map((service) => (
                  <li key={service.to}>
                    <Link
                      to={service.to}
                      className="block px-4 py-3 hover:bg-gray-100 text-sm"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="hover:underline">Actualités</li>
            <li className="hover:underline">Le Liban</li>
            <li className="hover:underline">Liens</li>
            <li className="hover:underline">Contact</li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0b2c5fee] shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-6 text-white font-semibold">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Accueil
              </Link>
            </li>

            <li>
              <Link to="/a-propos" onClick={() => setIsOpen(false)}>
                Le Consulat
              </Link>
            </li>

            {/* Mobile Services Accordion */}
            <li className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <Link to="/services" onClick={() => setIsOpen(false)}>
                  Services Consulaires
                </Link>

                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-lg"
                  aria-label="Toggle services submenu"
                >
                  {servicesOpen ? "−" : "+"}
                </button>
              </div>

              {servicesOpen && (
                <ul className="ml-4 flex flex-col gap-3 text-sm text-gray-200">
                  {servicesLinks.map((service) => (
                    <li key={service.to}>
                      <Link
                        to={service.to}
                        onClick={() => {
                          setIsOpen(false);
                          setServicesOpen(false);
                        }}
                        className="hover:underline"
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>Actualités</li>
            <li>Découvrir le Liban</li>
            <li>Liens Utiles</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
