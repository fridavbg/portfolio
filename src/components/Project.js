import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

function Project() {
	const [projectData, setProjectData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "project"]{
		title,
		date,
		place,
		description,
		projectType,
		link,
		tags
		}`
			)
			.then((data) => setProjectData(data))
			.catch(console.error);
	}, []);

	if (!projectData) return <div>Loading...</div>;

	return (
		<main className="bg-green-100 min-h-screen p-12">
			<section className="container mx-auto">
				<h1 className="text-5xl flex justify-center mb-2 cursive">
					My Projects
				</h1>
				<h2 className="text-lg text-gray-600 flex justify-center mb-12">
					This is what I have been building lately.
				</h2>
				<section className="flex flex-wrap mt-2 mx-2">
					{projectData &&
						projectData.map((project, index) => (
							<article className=" rounded-lg shadow-xl bg-white p-16 m-6 w-full">
								<h3 className="text-gray-800 text-3xl font-bold m-2 hover:text-gray-700">
									<a
										href={project.link}
										alt={project.title}
										target="_blank"
										rel="noopener noreferrer"
									>
										{project.title}
									</a>
								</h3>
								<div className="text-gray-500 text-xs space-x-4 m-4">
									<span>
										<strong className="font-bold">Uploaded on:</strong>:{" "}
										{new Date(project.date).toLocaleString()}
									</span>
									<p className="m-6 text-lg text-gray-700 leading-relaxed">
										{project.description}
									</p>
									<a
										href={project.link}
										rel="noopener noreferrer"
										target="_blank"
										className="text-gray-500 font-bold hover:underline hover:text-gray-400 text-xl"
									>
										View the project
									</a>
								</div>
							</article>
						))}
				</section>
			</section>
		</main>
	);
}

export default Project;
