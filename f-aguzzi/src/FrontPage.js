import React from "react";

export default function FrontPage () {

	return (
		<div>
			<div className="text-center bg-zinc-800 p-8">
				<h1 className="text-7xl font-bold underline text-white">Federico Aguzzi</h1>
				<br />
				<p className="text-xl text-white"> Web development with love🤍.</p>
			</div>

			<div className="bg-zinc-600 flex flex-col h-screen">
				<div className="bg-zinc-800 py-8 px-10 text-center rounded-3xl shadow-lg transform p-4 m-4 max-w-md mx-auto">
					<h2 className="font-semibold text-3xl mb-6 text-white">🤝 Nice to meet you! 🤝</h2>
					<img className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg" src="https://avatars.githubusercontent.com/u/62149513?v=4" alt="User avatar" />
					<p className="capitalize text-2xl mt-1 text-white">Federico Aguzzi</p>
					<br />
					<p className="text-white text-xl">
						Computer Engineering student, web developer and computer graphics enthusiast. 
					</p>
					<button className="rounded-full text-bold text-2xl bg-zinc-50 p-3 py-3 mt-3 hover:bg-zinc-300">Check me out!</button>
				</div>
			</div>

			<footer className="text-center text-xl lg:text-left bg-zinc-800 text-white fixed inset-x-0 bottom-0">
				<span text-xl text-bold> Contact me: </span>
				<div class="flex justify-center">
					<a href="#!" class="mr-6 text-2xl text-white">
						<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" className="w-2.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
         					<path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
							</path>
						</svg>
					</a>
					<a href="https://www.instagram.com/federyukio/" class="mr-6 text-2xl text-white">
        				<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          					<path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
          					</path>
        				</svg>
      				</a>
				</div>
				<br />
    			<span>© 2022 Federico Aguzzi </span>
			</footer>
		</div>
		
	)
}