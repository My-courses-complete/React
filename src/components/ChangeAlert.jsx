import React from 'react'
import { withStorageListener } from '../hocs/withStorageListener'

function ChangeAlert({ show, toggleShow}) {
	if (show) {
		return (
			<div>
				<p>
					<strong>
						<span role="img" aria-label="warning">
							⚠️
						</span>
					</strong>
					<span>
						Se han hecho cambios en el estado de la aplicación.
					</span>
				</p>
				<button onClick={() => toggleShow(false)}>
					Refrescar
				</button>
			</div>
		)
	} else {
		return null
	}
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }