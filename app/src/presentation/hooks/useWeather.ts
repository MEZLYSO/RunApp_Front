import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { fetchWeatherByCoord } from "../../data/services/weatherServices";
import type { Weather } from "../../core/entities/weatherInterface";

const useWeather = (coords: { lat: number, lon: number }): UseQueryResult<Weather> => {
  return useQuery({
    queryKey: ['weather'],
    queryFn: () => fetchWeatherByCoord(coords),
    enabled: coords.lat !== 0 && coords.lon !== 0,
    refetchInterval: 5 * 60 * 1000,
    refetchOnWindowFocus: false
  })
};

export default useWeather;

