export default function WaterIntake() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Water Intake</h2>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Todays Goal</span>
          <span className="text-sm font-medium text-gray-900">2000ml</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
        </div>
        <p className="text-sm text-gray-500 text-right">1300ml of 2000ml</p>
      </div>
    </div>
  )
}