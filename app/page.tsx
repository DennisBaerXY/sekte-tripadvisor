import Link from "next/link";
import { FaUser, FaSignInAlt, FaUserPlus, FaRunning } from "react-icons/fa";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col  justify-between p-24">
			<div>
				<h1>Home Page</h1>
				<div className="mt-4 flex flex-col gap-4 w-full md:w-1/2">
					<Link href="/login">
						<div className="border border-gray-300 p-4 rounded shadow hover:shadow-lg transition-shadow duration-200 flex items-center justify-between">
							<div>
								<h2>Login</h2>
								<p className="text-gray-500">Go to the login page</p>
							</div>
							<FaSignInAlt />
						</div>
					</Link>
					<Link href="/signup">
						<div className="border border-gray-300 p-4 rounded shadow hover:shadow-lg transition-shadow duration-200 flex items-center justify-between">
							<div>
								<h2>Sign Up</h2>
								<p className="text-gray-500">Go to the sign up page</p>
							</div>
							<FaUserPlus />
						</div>
					</Link>

					<Link href="/account">
						<div className="border border-gray-300 p-4 rounded shadow hover:shadow-lg transition-shadow duration-200 flex items-center justify-between">
							<div>
								<h2>Account</h2>
								<p className="text-gray-500">Go to the account page</p>
							</div>
							<FaUser />
						</div>
					</Link>
					<Link href="/activity/200">
						<div className="border border-gray-300 p-4 rounded shadow hover:shadow-lg transition-shadow duration-200 flex items-center justify-between">
							<div>
								<h2>Activity</h2>
								<p className="text-gray-500">Go to the activity page</p>
							</div>
							<FaRunning />
						</div>
					</Link>
				</div>
			</div>
		</main>
	);
}
