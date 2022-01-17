import React from "react";

export function withStorageListener(Component) {
	return function wrappedComponent(props) {
		console.log(props)
		const [storageChange, setStoreChange] = React.useState(false)

		window.addEventListener('storage', (change) => {
			if(change.key === 'TODOS') {
				setStoreChange(true)
			}
		})

		const toggleShow = () => {
			props.sincronize();
			setStoreChange(false)
		}

		return <Component 
		show={storageChange} 
		toggleShow={toggleShow} 
		/>;
	}
}