import React from 'react'
import { withStorageListener } from '../hocs/withStorageListener'

function ChangeAlert({ show, toggleShow}) {
	if (show) {
		return <p>Hubo cambios</p>
	} else {
		null
	}
}

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)