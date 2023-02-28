import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import ControlledInput from "./controlledInput.jsx";
import UncontrolledInput from "./UncontrolledInput.jsx";

//create your first component
const Home = () => {
	const [on, setOn] = useState(true)
	console.log("Render home Component")
	return (
	<>
		   {on ? 
		   (<>
		   <button onClick={()=> setOn(false)}>Show</button> 
		    <ControlledInput/>
			</>
			): (
			<>
			<button onClick={() => setOn(true)}>Hide</button>
			<UncontrolledInput/>
			</>
			)}
		  
    </>
	);
};

export default Home;
