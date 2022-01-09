import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import { App } from "./App/App";

function App(props) {
	return (
		<h1>{props.saludo}, {props.nombre}</h1>
	);
	}

function withSaludo(WrappedComponent) {
	return function wrapped() {
		return function componente(props) {
			return (
				<>
					<WrappedComponent {...props}/>
					<p>Acompaño al wrapped</p>
				</>
			)
		}
	}
}

const AppWithWhatever = withSaludo(App)();
ReactDOM.render(<AppWithWhatever saludo="hey" nombre="Jesus" />, document.getElementById("root"));
