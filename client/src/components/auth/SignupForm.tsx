import React, { useEffect, useState } from "react";
import { isLoggedIn, token } from "../../store/store";
import { useStore } from "@nanostores/react";
import headers from "../../utils/headers";

const SignUpFormComponent = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errMessage, setErrorMessage] = useState("");

	const $isLoggedIn = useStore(isLoggedIn);
	useEffect(() => {
		if (JSON.parse($isLoggedIn)) {
			window.location.href = "/";
		}
	}, []);

	const clearErrTextTimeout = () => {
		const id = setTimeout(() => {
			setErrorMessage("");
		}, 3000);
	};

	function handleSubmit() {
		if (password !== confirmPassword) {
			setErrorMessage("Passwords do not match");
			clearErrTextTimeout();
			return;
		}
		var graphql = JSON.stringify({
			query:
				"mutation createUser($name: String!, $email: String!, $password: String!){\n  createUser(name: $name, email: $email,\n  	password: $password\n  ){\n    token\n    user{\n      email\n      id\n      name\n    }\n  }\n}",
			variables: {
				name: name,
				email: email,
				password: password,
			},
		});

		var requestOptions = {
			method: "POST",
			headers: headers,
			body: graphql,
		};
		fetch("https://server.kaustubh10.workers.dev", requestOptions)
			.then((response) => response.text())
			.then((result) => {
				const { data, errors } = JSON.parse(result);
				if (errors?.length) {
					setErrorMessage(errors[0].message);
					clearErrTextTimeout();
					return;
				}
				token.set(data.createUser.token);
				isLoggedIn.set(JSON.stringify(true));
				window.location.href = "/";
			})
			.catch((error) => console.log("error", error));
	}

	return (
		<section className="h-screen">
			<div className="container px-6 py-12 h-full">
				<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
					<div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
						<img
							src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
							className="w-full"
							alt="Phone image"
						/>
					</div>
					<div className="md:w-8/12 lg:w-5/12 lg:ml-20">
						<div className="text-center py-3">
							<span className="text-2xl font-bold text-white">Sign Up</span>
						</div>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								handleSubmit();
							}}
						>
							<div className="mb-6">
								<input
									value={name}
									onChange={(e) => setName(e.target.value)}
									autoComplete="off"
									type="text"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-rose-600 focus:outline-none"
									placeholder="Username"
								/>
							</div>
							<div className="mb-6">
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									autoComplete="off"
									type="text"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-rose-600 focus:outline-none"
									placeholder="Email address"
								/>
							</div>
							<div className="mb-6">
								<input
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									autoComplete="off"
									type="password"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-rose-600 focus:outline-none"
									placeholder="Password"
								/>
							</div>
							<div className="mb-6">
								<input
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									autoComplete="off"
									type="password"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-rose-600 focus:outline-none"
									placeholder="Confirm password"
								/>
							</div>
							{errMessage && (
								<div className="mb-3 text-center text-rose-400">
									{errMessage}
								</div>
							)}

							{/* <div className="flex justify-end items-center mb-6">
										<a
											href="#!"
											className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
										>
											Forgot password?
										</a>
									</div> */}

							<button
								type="submit"
								className="inline-block px-7 py-3 bg-rose-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out w-full"
								data-mdb-ripple="true"
								data-mdb-ripple-color="light"
							>
								Sign Up
							</button>

							<div className="flex space-x-2 justify-center items-center mb-6">
								<span className="text-white py-3">Have an Account?</span>
								<a
									href="/login"
									className="text-rose-600 hover:text-rose-700 focus:text-rose-700 active:text-rose-800 duration-200 transition ease-in-out"
								>
									Login
								</a>
							</div>

							{/* <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
										<p className="text-center font-semibold mx-4 mb-0">OR</p>
									</div> */}
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUpFormComponent;
