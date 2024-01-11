import { useState, useEffect } from "react";
import "./App.css"; // Asegúrate de tener el archivo de estilos

const LoadingSpinner = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simula la carga de datos (puedes ajustar esto según tus necesidades)
		const fakeDataLoading = setTimeout(() => {
			setLoading(false);
		}, 2000);

		// Limpia el temporizador al desmontar el componente
		return () => clearTimeout(fakeDataLoading);
	}, []);

	return (
		<div className={loading ? "loader-wrapper bg-customPastel" : "hidden"}>
			<div className="loader"></div>
			<p className="fixed bottom-0 w-full text-center border font-mono">Powered by Programma Ad Futura</p>
		</div>
	);
};

export default LoadingSpinner;
