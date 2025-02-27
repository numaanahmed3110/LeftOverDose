
// Import components
import Schedule from "../components/dashboard/Schedule";
import WaterIntake from "../components/dashboard/WaterIntake";
import NutritionStats from "../components/dashboard/NutritionStats";
import RecipeCard from "../components/dashboard/RecipeCard";

export default function Home() {
  return (
    <div>
      {/* Welcome Section */}
      <div className="bg-gray-50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Hello, Jessica</h1>
              <p className="text-sm text-gray-500">You have 8 activities today</p>
            </div>
            <div className="relative w-96">
              <input
                type="text"
                placeholder="Search by receipts and more"
                className="w-full rounded-lg border border-gray-300 py-2 pl-4 pr-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            <Schedule />
            <WaterIntake />
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9 space-y-6">
            <NutritionStats />
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                  Featured Recipes
                </h1>
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((recipe) => (
                  <RecipeCard
                    key={recipe}
                    title="Healthy Breakfast Bowl"
                    calories={450}
                    duration={25}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}