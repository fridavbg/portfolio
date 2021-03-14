export default {
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		{
			name: "title",
			type: "string",
		},
		{
			name: "date",
			type: "datetime",
		},
		{
			name: "place",
			type: "string",
		},
		{
			name: "description",
			type: "text",
		},
		{
			name: "projectType",
			title: "Project type",
			type: "string",
			options: {
				list: [
					{ value: "plain/vanilla", title: "Plain/Vanilla" },
					{ value: "frameworks", title: "Frameworks" },
					{ value: "network", title: "Network" },
				],
			},
		},
		{
			name: "link",
			type: "url",
		},
			{
			name: "github",
			type: "url",
		},
		{
			name: "tags",
			type: "array",
			of: [
				{
					type: "string",
				},
			],
			options: {
				layout: "tags",
			},
		},
	],
};
