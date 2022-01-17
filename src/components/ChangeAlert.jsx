import React from 'react'
import { useStorageListener } from '../hocs/useStorageListener'

export function ChangeAlert({ sincronize }) {
	const { show, toggleShow} = useStorageListener(sincronize)

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
