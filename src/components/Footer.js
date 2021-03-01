import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
	return (
		<footer className="fixed bottom-0 w-full bg-purple-400">
			<div className="flex justify-center py-6 tracking-widest">
				<SocialIcon
					url="https://github.com/fridavbg"
					className="mr-4"
					target="_blank"
					fgColor="#fff"
					style={{ height: 30, width: 30 }}
				/>
				<SocialIcon
					url="https://www.linkedin.com/in/fridavbg/"
					className="mr-4"
					target="_blank"
					fgColor="#fff"
					style={{ height: 30, width: 30 }}
				/>
			</div>
		</footer>
	);
}

export default Footer;
