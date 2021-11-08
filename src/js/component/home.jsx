import React, { useState } from "react";
import Counter from "./Counter.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<section>
				<Counter time={100000000} />
				<Counter time={10000000} />
				<Counter time={1000000} />
				<Counter time={100000} />
				<Counter time={10000} />
				<Counter time={1000} />
			</section>
		</div>
	);
};

export default Home;
