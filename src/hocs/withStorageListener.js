import React from "react";

export function withStorageListener(Component) {
	return function wrappedComponent(props) {
		const [storageChange, setStoreChange] = React.useState(false)

		return <Component
			show={storageChange}
			toggleShow={() => setStoreChange(!storageChange)}
			{...props}
			onStorageChange={(key, value) => {
				if (key === "user") {
				props.onUserChange(value);
				}
			}}
		/>
	}
}