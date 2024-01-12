import "./App.css";
import wspIcon from "./assets/whatsapp.png";
const WhatsAppButton = () => {
	const handleWhatsAppClick = () => {
		const phoneNumber = "+5492215585782"; // Reemplaza con el número de teléfono al que quieres enviar el mensaje
		const message = "Hola, gracias por la invitación, confirmo mi asistencia"; // Mensaje preestablecido

		// Construir la URL de WhatsApp
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

		// Abrir la URL en una nueva ventana o pestaña
		window.open(whatsappUrl, "_blank");
	};

	return (
		<button
			className="wsp bg-customPastel2 border-2 border-customGreen font-semibold text-3xl p-2 rounded-3xl m-6 shadow-lg"
			onClick={handleWhatsAppClick}
		>
			<span className="flex flex-row sombra p-2">
				Confirmar
				<img className="w-8 block mr-auto ml-2" src={wspIcon} alt="" />
			</span>
		</button>
	);
};

export default WhatsAppButton;
