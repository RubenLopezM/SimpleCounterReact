import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Counter = props => {
	const [cont, setCont] = useState(0);
	//const [start, setStart] = useState(start);
	useEffect(() => {
		const timer = setInterval(() => {
			if (cont < 9) {
				setCont(cont + 1);
			} else {
				setCont(0);
			}
		}, props.time);
		return () => clearInterval(timer); //No es todo el rato el mismo intervalo, el clear intervalo va matando el intervalo
	}, [cont]);

	return (
		<div className="container">
			<section>
				<span>{cont}</span>
			</section>
		</div>
	);
};



Counter.propTypes = {
	time: PropTypes.number
};

export default Counter;
