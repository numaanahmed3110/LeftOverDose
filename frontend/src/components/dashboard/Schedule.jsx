import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function Schedule() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Todays Schedule</h2>
        <CalendarIcon className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <ClockIcon className="h-5 w-5 text-gray-400 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-gray-900">Breakfast</p>
            <p className="text-sm text-gray-500">8:00 AM - 8:30 AM</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <ClockIcon className="h-5 w-5 text-gray-400 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-gray-900">Lunch</p>
            <p className="text-sm text-gray-500">12:30 PM - 1:30 PM</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <ClockIcon className="h-5 w-5 text-gray-400 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-gray-900">Dinner</p>
            <p className="text-sm text-gray-500">7:00 PM - 8:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}