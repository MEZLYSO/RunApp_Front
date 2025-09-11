import { useState } from "react"
import type { Career } from "../../../../data/types"
import useManageEnrolled from "../../../hooks/useManageEnrolled"

type CareerAvailablesProps = {
  dataAvailables: Career[]
  statusAvailables: string
  userId: string
}

function CareerAvailables({ dataAvailables, statusAvailables, userId }: CareerAvailablesProps) {
  const { getKey } = useManageEnrolled()

  const [isOpen, setIsOpen] = useState(false)
  const [rfid, setRfid] = useState("")
  const [careerId, setCareerId] = useState<string | null>(null)

  const handleOpen = (id: string) => {
    setCareerId(id)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setRfid("")
    setCareerId(null)
  }

  // Helper para esperar
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!careerId) return

    const dataUser = { userId, rfid, careerId }

    // Esperar 1 segundo antes de enviar
    await sleep(1000)
    getKey(dataUser)

    handleClose()
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Carreras disponibles</h3>
      {statusAvailables === "success" ? (
        <ul>
          {dataAvailables.map((career: Career) => (
            <div
              key={career.id}
              className="bg-white rounded-lg shadow p-4 w-full"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-gray-800">{career.name}</h2>
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

              {/* Acciones */}
              <div className="mt-4 flex justify-end gap-2">
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md text-sm font-medium"
                  onClick={() => handleOpen(career.id)}
                >
                  Suscribirse
                </button>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <h1>Loading...</h1>
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-xs bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 border">
            <h2 className="text-lg font-bold mb-4">Ingrese RFID</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                value={rfid}
                onChange={(e) => setRfid(e.target.value)}
                placeholder="RFID"
                className="border px-3 py-2 rounded"
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default CareerAvailables

