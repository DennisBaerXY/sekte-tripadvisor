import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Page() {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<div className="card-body ">
						<Link href={"/"}>
							<div className="flex items-center gap-2">
								<FaArrowLeft />
								<span>Back</span>
							</div>
						</Link>

						<form>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									placeholder="email"
									className="input input-bordered"
									autoComplete="email"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									placeholder="password"
									className="input input-bordered"
									autoComplete="new-password"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Confirm Password</span>
								</label>
								<input
									type="password"
									placeholder="confirm password"
									className="input input-bordered"
									autoComplete="new-password"
								/>
							</div>
							<div className="form-control mt-6">
								<input
									type="submit"
									value="Sign Up"
									className="btn btn-primary"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
