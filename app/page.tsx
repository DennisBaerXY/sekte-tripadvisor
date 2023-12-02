import Link from "next/link";
import { FaUser, FaSignInAlt, FaUserPlus, FaRunning } from "react-icons/fa";

interface LinkCardProps {
	href: string;
	title: string;
	description: string;
	Icon: React.ElementType;
}

const LinkCard: React.FC<LinkCardProps> = ({
	href,
	title,
	description,
	Icon,
}) => (
	<Link href={href}>
		<div className="border border-gray-300 p-4 rounded shadow hover:shadow-lg transition-all duration-200 flex items-center justify-between hover:border-blue-500">
			<div>
				<h2>{title}</h2>
				<p className="text-gray-500">{description}</p>
			</div>
			<Icon />
		</div>
	</Link>
);

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col  justify-between p-24">
			<div>
				<h1>Home Page</h1>
				<div className="mt-4 flex flex-col gap-4 w-full md:w-1/2">
					<LinkCard
						href="/login"
						title="Login"
						description="Go to the login page"
						Icon={FaSignInAlt}
					/>
					<LinkCard
						href="/signup"
						title="Sign Up"
						description="Go to the sign up page"
						Icon={FaUserPlus}
					/>
					<LinkCard
						href="/account"
						title="Account"
						description="Go to the account page"
						Icon={FaUser}
					/>
					<LinkCard
						href="/activity/200"
						title="Activity"
						description="Go to the activity page"
						Icon={FaRunning}
					/>
				</div>
			</div>
		</main>
	);
}
