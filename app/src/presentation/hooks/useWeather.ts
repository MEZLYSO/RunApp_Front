import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { fetchWeatherByCoord } from "../../data/services/weatherServices";
import type { Weather } from "../../core/entities/weatherInterface";

const useWeather = (coords: { lat: number, lon: number }): UseQueryResult<Weather> => {
  return useQuery({
    queryKey: ['weather', coords],
    queryFn: () => fetchWeatherByCoord(coords),
    enabled: !!coords,
    refetchInterval: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000, // Tiempo de vida de los datos en memoria 
    refetchOnWindowFocus: false, // Obtener de nuevo cuando cambias de ventana
    staleTime: 5 * 60 * 1000,
    refetchOnReconnect: true
  })
};

export default useWeather;

