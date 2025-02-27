import PropTypes from 'prop-types'
import { ClockIcon } from '@heroicons/react/24/outline'

export default function RecipeCard({ title, calories, duration, image }) {
  return (
    <div className="group relative">
      <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-48 w-full object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
          />
        ) : (
          <div className="h-48 bg-gray-200 rounded-lg" />
        )}
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>{calories} kcal</span>
          <span>•</span>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            <span>{duration}min</span>
          </div>
        </div>
      </div>
    </div>
  )
}

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  image: PropTypes.string
}