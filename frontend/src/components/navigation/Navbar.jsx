import { Bars3Icon } from "@heroicons/react/24/outline";
import UserProfile from "../common/UserProfile";
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Navbar({ setSidebarOpen }) {
  const location = useLocation();

  const isActivePage = (path) => {
    if (path === "home") return location.pathname === "/";
    return location.pathname === `/${path}`;
  };

  return (
    <nav className="sticky top-0 z-500 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center flex-1 gap-x-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden active:bg-[#202125] active:text-white"
              onClick={() => setSidebarOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            <div className="flex lg:ml-0">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300">
                FoodApp
              </span>
            </div>
            <div className="hidden lg:flex lg:space-x-1 lg:ml-8">
              <Link
                to="/"
                className={`nav-link ${
                  isActivePage("home") ? "nav-link-active" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/meal-plans"
                className={`nav-link ${
                  isActivePage("meal-plans") ? "nav-link-active" : ""
                }`}
              >
                Meal Plans
              </Link>
              <Link
                to="/nutrition"
                className={`nav-link ${
                  isActivePage("nutrition") ? "nav-link-active" : ""
                }`}
              >
                Nutrition
              </Link>
              <Link
                to="/analytics"
                className={`nav-link ${
                  isActivePage("analytics") ? "nav-link-active" : ""
                }`}
              >
                Analytics
              </Link>
              <Link
                to="/groceries"
                className={`nav-link ${
                  isActivePage("groceries") ? "nav-link-active" : ""
                }`}
              >
                Order Groceries
              </Link>
              <Link
                to="/recipes"
                className={`nav-link ${
                  isActivePage("recipes") ? "nav-link-active" : ""
                }`}
              >
                Recipes
              </Link>
              <Link
                to="/forum"
                className={`nav-link ${
                  isActivePage("forum") ? "nav-link-active" : ""
                }`}
              >
                Forum
              </Link>
            </div>
          </div>
          <div className="flex items-center ml-4">
            <UserProfile />
          </div>
        </div>
      </div>
    </nav>
  );
}
