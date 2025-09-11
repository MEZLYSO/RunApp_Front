import useForm from "../../../hooks/useForm";

type CareerEnrolled = {
  dataEnrolled: any
  statusEnrolled: string
}

interface Enrolled {
  user: {
    id: string;
    name: string;
    surname1: string;
    surname2: string;
    email: string;
  };
  id: string;
  career: {
    id: string;
    name: string;
    description: string;
    date: string;
    distance: number;
    place: string;
  };
  rfid: string
  timeEnd: string | null;
}

function CareerEnrolled({ dataEnrolled, statusEnrolled }: CareerEnrolled) {

  const { removeElementCareer } = useForm()

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Carreras inscritas</h3>
      {statusEnrolled === 'success' ? (
        <ul className="">
          {dataEnrolled.map((item: Enrolled) => {
            const { career } = item

            return (
              <div
                key={career.id}
                className="bg-white rounded-lg shadow p-4 w-full">
                {/* Header */}
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold text-gray-800">{career.name}</h2>
                  <span className="text-xs text-gray-400">ID: {item.rfid}</span>
                </div>

                {/* Info rápida */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div>
                    <span className="block text-gray-500">Fecha</span>
                    <p className="text-gray-800">{career.date}</p>
                  </div>
                  <div>
                    <span className="block text-gray-500">Distancia</span>
                    <p className="text-gray-800">{career.distance} km</p>
                  </div>
                  <div>
                    <span className="block text-gray-500">Lugar</span>
                    <p className="text-gray-800">{career.place}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-gray-500">Descripción</span>
                    <p className="text-gray-800 truncate">{career.description}</p>
                  </div>
                </div>

                {/* Tiempos */}
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <label className="block text-gray-500">Llegada</label>
                    <input
                      value={item.timeEnd ?? "00:00:00"}
                      type="text"
                      className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600 text-gray-700"
                    />
                  </div>
                </div>

                {/* Acciones */}
                <div className="mt-4 flex justify-end gap-2">
                  <button
                    onClick={() => removeElementCareer(item.id)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1.5 rounded-md text-sm font-medium">
                    Borrar
                  </button>
                </div>
              </div>
            )
          })}
        </ul>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>

  )
}

export default CareerEnrolled
