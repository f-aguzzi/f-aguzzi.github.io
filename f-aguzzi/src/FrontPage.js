import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function FrontPage () {

	return (
		<div className="h-screen bg-zinc-600">
			<Header />

			<div className="flex flex-col">
				<div className="bg-violet-500 py-8 px-10 text-center rounded-2xl shadow-lg transform p-4 m-4 max-w-md max-h-md mx-auto">
					<h2 className="font-semibold text-2xl mb-6 text-white">🤝 Nice to meet you! 🤝</h2>
					<img className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg" src="https://avatars.githubusercontent.com/u/62149513?v=4" alt="User avatar" />
					<p className="capitalize text-xl mt-1 text-white">Federico Aguzzi</p>
					<br />
					<p className="text-white text-xl">
						Computer Engineering student, web developer and computer graphics enthusiast. 
					</p>
					<br />
					<a role="button" className="rounded-full text-bold text-xl bg-zinc-50 p-3 mt-5 hover:bg-zinc-300" href="/mainpage">Check me out!</a>
				</div>
			</div>

			<Footer />
		</div>
		
	)
}