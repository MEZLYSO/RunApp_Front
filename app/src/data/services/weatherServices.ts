import type { Weather } from "../../core/entities/Weather"

export async function fetchWeatherByCoord({ lat, lon }: { lat: number, lon: number }): Promise<Weather> {
  const res = await fetch(`https://wttr.in/${lat},${lon}?format={"icon":"%c","feels":"%C","temp":"%f"}&lang=es`)
  return res.json()
}
