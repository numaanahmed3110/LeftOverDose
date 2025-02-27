
export default function Nutrition() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-gray-50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Nutrition</h1>
              <p className="text-sm text-gray-500">Track your daily nutrition intake</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Nutrition Overview */}
          <div className="lg:col-span-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Today's Nutrition Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <h3 className="text-sm font-medium text-indigo-600">Calories</h3>
                  <p className="mt-2 text-3xl font-semibold text-indigo-900">1,850</p>
                  <p className="text-sm text-indigo-500">of 2,200 goal</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="text-sm font-medium text-green-600">Protein</h3>
                  <p className="mt-2 text-3xl font-semibold text-green-900">75g</p>
                  <p className="text-sm text-green-500">of 90g goal</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-sm font-medium text-blue-600">Water</h3>
                  <p className="mt-2 text-3xl font-semibold text-blue-900">1.5L</p>
                  <p className="text-sm text-blue-500">of 2.5L goal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nutrition Goals */}
          <div className="lg:col-span-4">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Goals</h2>
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
                  Edit
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Daily Calories</span>
                  <span className="text-sm font-medium text-gray-900">2,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Protein</span>
                  <span className="text-sm font-medium text-gray-900">90g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Carbs</span>
                  <span className="text-sm font-medium text-gray-900">250g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Fat</span>
                  <span className="text-sm font-medium text-gray-900">70g</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}