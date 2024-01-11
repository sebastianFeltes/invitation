import { useState, useEffect } from "react";
import "./App.css";
const Timer = () => {
	const targetDate = new Date("2024-05-19T21:00:00-03:00"); // Fecha y hora objetivo en formato ISO

	const calculateTimeRemaining = () => {
		const now = new Date();
		const difference = targetDate - now;

		if (difference <= 0) {
			// La fecha objetivo ya ha pasado
			return {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			};
		}

		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((difference % (1000 * 60)) / 1000);

		return {
			days,
			hours,
			minutes,
			seconds,
		};
	};

	const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeRemaining(calculateTimeRemaining());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div>
			<p className="text-2xl">Te esperamos en:</p>
			<table className="w-full">
				<thead>
					<tr className="border-b">
						<th className="text-center border-x">Días</th>
						<th className="text-center border-x">Horas</th>
						<th className="text-center border-x">Minutos</th>
						<th className="text-center border-x">Segundos</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="text-center text-2xl border-x">{timeRemaining.days}</td>
						<td className="text-center text-2xl border-x">{timeRemaining.hours}</td>
						<td className="text-center text-2xl border-x">{timeRemaining.minutes} </td>
						<td className="text-center text-2xl border-x">{timeRemaining.seconds} </td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Timer;
