/* eslint-disable react/prop-types */

export const JobModal = ({ job, onClose }) => (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center  p-4">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full shadow-lg border border-gray-300 transition-transform transform scale-95 opacity-0 animate-modal-open">
        <div className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: job.fullDescription }} />
        <div className="flex justify-end mt-6">
          <button onClick={onClose} className="text-blue-500 hover:text-blue-700 font-medium py-2 px-4 rounded transition-all duration-200 transform hover:scale-105">
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
  
