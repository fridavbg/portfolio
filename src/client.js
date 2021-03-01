import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "84hotol6",
	dataset: "production",
	useCdn: true,
});
