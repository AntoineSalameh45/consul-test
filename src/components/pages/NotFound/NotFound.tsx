import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-blue-950 text-white px-6">
      <div className="max-w-lg text-center">
        <p className="text-sm uppercase tracking-widest text-blue-300 mb-2">
          Erreur 404
        </p>

        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          Page introuvable
        </h1>

        <p className="text-gray-300 mb-8">
          La page que vous recherchez n’existe pas ou a été déplacée.
          Vérifiez l’URL ou retournez à l’accueil.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-md bg-white text-blue-950 font-semibold hover:bg-gray-200 transition"
          >
            Retour à l’accueil
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-md border border-white/30 hover:bg-white/10 transition"
          >
            Page précédente
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
