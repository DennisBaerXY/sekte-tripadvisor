export interface OpenWeatherApiResponse {
	coord: Coordinates;
	weather: Weather[];
	base: string;
	main: Main;
	visibility: number;
	wind: Wind;
	rain?: Precipitation;
	snow?: Precipitation;
	clouds: Clouds;
	dt: number;
	sys: SystemInfo;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

interface Coordinates {
	lon: number; // Longitude of the location
	lat: number; // Latitude of the location
}

interface Weather {
	id: number; // Weather condition id
	main: string; // Group of weather parameters (Rain, Snow, etc.)
	description: string; // Weather condition within the group
	icon: string; // Weather icon id
}

interface Main {
	temp: number; // Temperature
	feels_like: number; // Temperature accounting for human perception
	pressure: number; // Atmospheric pressure on the sea level, hPa
	humidity: number; // Humidity, %
	temp_min: number; // Minimum temperature at the moment
	temp_max: number; // Maximum temperature at the moment
	sea_level?: number; // Atmospheric pressure on the sea level, hPa
	grnd_level?: number; // Atmospheric pressure on the ground level, hPa
}

interface Wind {
	speed: number; // Wind speed
	deg: number; // Wind direction, degrees (meteorological)
	gust?: number; // Wind gust
}

interface Precipitation {
	"1h"?: number; // Volume for the last 1 hour, mm
	"3h"?: number; // Volume for the last 3 hours, mm
}

interface Clouds {
	all: number; // Cloudiness, %
}

interface SystemInfo {
	type: number; // Internal parameter
	id: number; // Internal parameter
	message?: string; // Internal parameter
	country: string; // Country code (GB, JP etc.)
	sunrise: number; // Sunrise time, unix, UTC
	sunset: number; // Sunset time, unix, UTC
}
