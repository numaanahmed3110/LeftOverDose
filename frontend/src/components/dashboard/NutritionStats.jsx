export default function NutritionStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Calories Today</h2>
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-gray-900">1,850</span>
          <span className="text-sm text-gray-500">/ 2,200 kcal</span>
        </div>
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '84%' }}></div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Protein Intake</h2>
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-gray-900">65g</span>
          <span className="text-sm text-gray-500">/ 80g</span>
        </div>
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '81%' }}></div>
        </div>
      </div>
    </div>
  )
}