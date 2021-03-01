import { NavLink } from "react-router-dom";

function NavBar() {
	return (
		<header className="bg-purple-800">
			<div className="container mx-auto flex justify-between">
				<nav className="flex">
					<NavLink
						to="/"
						exact
						activeClassName="text-black-800"
						className="inline-flex items-center py-6 px-3 mr-4 text-green-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
					>
						Home
					</NavLink>
					<NavLink
						to="/about"
						activeClassName="text-black-800 bg-green-600"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-800"
					>
						About
					</NavLink>
					<NavLink
						to="/project"
						activeClassName="text-black-800 bg-green-600"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-800"
					>
						Projects
					</NavLink>
					<NavLink
						to="/post"
						activeClassName="bg-green-600"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-800"
					>
						Blog Posts
					</NavLink>
					{/*				<NavLink
						to="/network"
						activeClassName="text-black-800 bg-green-600"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-800"
						disabled={true}
					>
						Network
					</NavLink>
*/}{" "}
				</nav>
			</div>
		</header>
	);
}

export default NavBar;
