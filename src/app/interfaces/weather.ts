export interface weather {
  lat: string;
  lon: string;
  elevation: number;
  timezone: string;
  units: string;
  current: {
    icon: string;
    icon_num: number;
    summary: string;
    temperature: number;
    wind: {
      speed: number;
      angle: number;
      dir: string
    };
    precipitation: {
      total: number;
      type: string
    };
    cloud_cover: number
  };
  hourly?: any;
  daily?: any
}
