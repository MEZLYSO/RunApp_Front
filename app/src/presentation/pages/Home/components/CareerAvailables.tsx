import type { Career } from "../../../../data/types"
import useCareer from "../../../hooks/useCareer"
import useManageEnrolled from "../../../hooks/useManageEnrolled"

function CareerAvailables() {

  const { data, status } = useCareer()
  const { getKey } = useManageEnrolled()

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Carreras disponibles</h3>
      {status === 'success' ? (
        <ul className="space-y-3">
          {data.map((item: Career) =>
          (
            <li
              key={item.id}
              className="p-4 bg-gray-50 rounded-lg shadow-sm flex items-center justify-between">
              {item.name}
              <p>{item.description}</p>
              <button
                onClick={() => getKey(item.id)}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm">
                Inscribirse
              </button>
            </li>
          )
          )}
        </ul>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default CareerAvailables
