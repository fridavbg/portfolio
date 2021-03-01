import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

function Network() {
	const [networkData, setNetwork] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "network"]{
			title,
			link,
			description,
			mainImage{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
			)
			.then((data) => setNetwork(data))
			.catch(console.error);
	}, []);

	if (!networkData) return <div>Loading . . .</div>;

	return (
		<main className="bg-green-100 min-h-screen p-12">
			<section className="container mx-auto">
				<h1 className="text-5xl flex mb-2 justify-center cursive">Barcelona</h1>
				<h2 className="text-lg text-gray-600 flex justify-center mb-12">
					After twelve years, I've meet a lot of cool people in this city. My
					plan is to post some of them here shortly.
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{networkData &&
						networkData.map((network, index) => (
							<article>
								<span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400">
									<img
										src={network.mainImage.asset.url}
										alt={network.mainImage.alt}
										className="w-full h-full rounded-r object-cover absolute"
									/>
									<span className="block relative h-full flex justify-end items-end pr-4 pb-4">
										<a
											href={network.link}
											alt={network.title}
											target="_blank"
											rel="noopener noreferrer"
										>
											<h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-purple-700 text-purple-100 bg-opacity-75 rounded">
												{network.title}
											</h3>
										</a>
									</span>
								</span>
							</article>
						))}
				</div>
			</section>
		</main>
	);
}

export default Network;
