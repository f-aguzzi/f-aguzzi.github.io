import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function MainPage () {
    return (
        <div className="h-screen bg-zinc-600">
            <Header />
			
			<div class="grid grid-cols-3 grid-flow-row gap-8 px-8">
				
				<div className="bg-yellow-600 hover:bg-yellow-500 py-8 px-10 text-center rounded-2xl shadow-lg transform p-4 m-4 col-span-1 mx-auto">
					<h2 className="font-semibold text-2xl mb-6 text-white">My credentials 📜</h2>
					<br />
					<p className="text-white text-xl">
						Here are my credentials and a list of my main skills. See for yourself if I can help you with
						what you need now.
					</p>
				</div>

				<div className="bg-cyan-600 hover:bg-cyan-500 py-8 px-10 text-center rounded-2xl shadow-lg transform p-4 m-4 col-span-1 mx-auto">
					<h2 className="font-semibold text-2xl mb-6 text-white"> My projects 💾</h2>
					<br />
					<p className="text-white text-xl">
						Check out my projects and see what I can do for you!
					</p>
				</div>

				<div className="bg-rose-600 hover:bg-rose-500 py-8 px-10 text-center rounded-2xl shadow-lg transform p-4 m-4 col-span-1 mx-auto">
					<h2 className="font-semibold text-2xl mb-6 text-white"> Hire me 🤝</h2>
					<br />
					<p className="text-white text-xl">
						You think I can help you? I think so, too! Let's discuss the terms and get it done! 
					</p>
				</div>
			</div>

            <Footer />
        </div>
    )
}

export default MainPage;