


// eslint-disable-next-line react/prop-types
export const JobCard = ({ title, description, date, onReadMore }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h2 className="text-xl font-semibold text-blue-600 mb-2">{title}</h2>
    <p className="text-gray-700 text-sm mb-4">{description}</p>
    <div className="text-right">
      <button onClick={onReadMore} className="text-blue-500 hover:text-blue-700 transition-colors">
        Lire la suite »
      </button>
    </div>
    <div className="mt-4 text-sm text-gray-500">{date}</div>
  </div>
)

