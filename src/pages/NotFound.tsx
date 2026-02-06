import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-[#111827]">
      <div className="text-center text-slate-800 dark:text-slate-100">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600 dark:text-slate-300">
          Oops! Page not found
        </p>
        <Link to="/" className="text-[#F59E0B] underline hover:text-[#FBBF24]">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
