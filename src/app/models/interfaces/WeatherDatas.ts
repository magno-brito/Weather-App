export interface WeatherDatas{
  coord: {
    lon: number,
    lat: number
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  base: string,
  main: {
    temp: number,
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  },
  visibility: number,
  wind: {
    speed: number,
    def: number
  },
  cloud: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  code: number

}
