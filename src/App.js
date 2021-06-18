import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//COMPONENTS
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Network from "./components/Network";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route component={Home} path="/" exact />
					<Route component={About} path="/about" />
					<Route component={SinglePost} path="/post/:slug" />
					<Route component={Post} path="/post" />
					<Route component={Project} path="/project" />
					<Route component={Network} path="/network" />
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
