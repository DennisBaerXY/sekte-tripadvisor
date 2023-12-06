import { OpenWeatherApiResponse } from "@/app/interfaces/OpenWeatherMap";

export default async function Page({ params }: { params: { id: string } }) {
	const link =
		"https://api.openweathermap.org/data/2.5/weather?lat=48.483334&lon=9.216667&appid=" +
		process.env.OPENWEATHERMAP_API_KEY +
		"&units=metric";
	console.log(link);

	const res = await fetch(link);

	const data: OpenWeatherApiResponse = await res.json();
	console.log(data);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Activity Page with id {params.id}</h1>
			<p>{data.main.temp.toFixed(1)}°C </p>
		</main>
	);
}
