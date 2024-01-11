import "./App.css";
import copiIcon from "./assets/copy.png";

const CopyToClipboardButton = () => {
	const copyToClipboard = (e) => {
		const textToCopy = e.target.id;
		navigator.clipboard
			.writeText(textToCopy)
			.then(() => {
				alert("Texto copiado al portapapeles: " + textToCopy);
				//console.log(textToCopy);
			})
			.catch((err) => {
				console.error("Error al copiar al portapapeles:", err);
			});
	};

	return (
		<div>
			<p className="text-2xl">
				ALIAS: luna.miel.buzon
				<button className="mx-1" onClick={(e) => copyToClipboard(e)}>
					<img id="luna.miel.buzon" className="w-4 sombra" src={copiIcon} alt="copy icon" />
				</button>
			</p>
			<p className="text-2xl">
				CBU: 0140999803200089374608
				<button className="mx-1" onClick={(e) => copyToClipboard(e)}>
					<img id="0140999803200089374608" className="w-4 sombra" src={copiIcon} alt="copy icon" />
				</button>
			</p>
		</div>
	);
};

export default CopyToClipboardButton;
