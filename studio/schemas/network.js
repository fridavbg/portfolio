export default {
	name: "network",
	title: "Network",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "link",
			type: "url",
		},
		{
			name: "description",
			type: "text",
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		},
	],
};
