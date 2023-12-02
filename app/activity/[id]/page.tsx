export default function Page({ params }: { params: { id: string } }) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Activity Page with id {params.id}</h1>
		</main>
	);
}
