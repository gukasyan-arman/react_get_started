import React from "react";
import classes from "./DeleteButton.module.css"

function DeleteButton ({children, ...props}) {
	return ( 
		<button {...props} className={classes.deleteBtn}>
			{children}
		</button>
	);
}

export default DeleteButton; 