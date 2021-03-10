import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import bkg from "../img/bkg4.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

function About() {
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'author']{
			name,
			bio,
			"authorImage": image.asset->url
		}`
			)
			.then((data) => setAuthor(data[0]))
			.catch(console.error);
	}, []);

	if (!author) return <div>Loading . . . </div>;

	return (
		<main className="relative">
			<img
				src={bkg}
				alt="waves crashing against a sandy beach"
				className="absolute w-full"
			/>
			<div className="p-10 lg:pt-10 container mx-auto relative">
				<section className="bg-gray-400 rounded-lg shadow-2xl lg:flex p-10 md:flex p-5">
					<img
						src={urlFor(author.authorImage).url()}
						className="rounded lg:w-48 h-60 mr-8 md:w-16 h-16"
						alt={author.name}
					/>
					<div className="text-lg flex flex-col justify-center">
						<h1 className="cursive text-6xl text-green-900 mb-4 md: mt-2">
							Hi, I'm <span className="text-green-100">{author.name}</span>
						</h1>
						<div className="prose lg:prose-xl text-white">
							<BlockContent
								blocks={author.bio}
								projectId="84hotol6"
								dataset="production"
							/>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

export default About;
