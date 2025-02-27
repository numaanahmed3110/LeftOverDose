
import { useState } from 'react'

export default function MealPlans() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [ingredients, setIngredients] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Handle the ingredients submission
    console.log('Submitted ingredients:', ingredients)
    setIsModalOpen(false)
    setIngredients('')
  }

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gray-50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Meal Plans</h1>
              <p className="text-sm text-gray-500">Plan your meals for the week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Your Meal Plans</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create New Plan
            </button>
          </div>
          {/* Placeholder for meal plans content */}
          <div className="text-center text-gray-500 py-12">
            <p>Your meal plans will appear here</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                    Create New Meal Plan
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-2">
                        Available Ingredients
                      </label>
                      <textarea
                        id="ingredients"
                        name="ingredients"
                        rows={4}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter your available ingredients (separated by commas)"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                      >
                        Create Plan
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}