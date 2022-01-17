import React from "react";

export function useStorageListener(sincronize) {
		const [storageChange, setStoreChange] = React.useState(false)

		window.addEventListener('storage', (change) => {
			if(change.key === 'TODOS') {
				setStoreChange(true)
			}
		})

		const toggleShow = () => {
			sincronize();
			setStoreChange(false)
		}

		return {
		show: storageChange,
		toggleShow
		};
}