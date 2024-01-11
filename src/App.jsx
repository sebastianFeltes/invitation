import "./App.css";
import CopyToClipboardButton from "./CopyToClipboard";
import Timer from "./Timer";
import audio from "./assets/Adele - Easy On Me - Violin Cover.ogg";
import corazonLogo from "./assets/JS-logo-corazon.png";
import letrasLogo from "./assets/JS-logo-letras.png";
import locationIcon from "./assets/location.png";
import downArrow from "./assets/arrow.png";
import { useRef } from "react";
import WhatsAppButton from "./WhatsAppButton";
import LoadingSpinner from "./LoaderSpinner";

function App() {
	const song = new Audio(audio);

	// En tu archivo JavaScript o en el bloque de script en tu componente React

	/* 	window.addEventListener("load", () => {
		// Código a ejecutar una vez que se han cargado todos los recursos de la página

		// Por ejemplo, podrías mostrar un elemento que inicialmente estaba oculto
		const contenido = document.getElementById("contenido"); // Reemplaza 'contenido' con el ID de tu elemento
		contenido.style.display = "block";
	}); */
	function start() {
		handleNextClick(section1Ref);
		song.play();
	}

	const scrollToRef = (ref) => {
		window.scrollTo({
			top: ref.current.offsetTop,
			behavior: "smooth",
		});
	};

	const section1Ref = useRef(null);
	const section2Ref = useRef(null);
	const section3Ref = useRef(null);
	const section4Ref = useRef(null);
	const section5Ref = useRef(null);
	const section6Ref = useRef(null);
	// Agrega más referencias para cada sección

	const handleNextClick = (ref) => {
		scrollToRef(ref);
	};

	const handleManualScroll = () => {
		// Detener cualquier animación automática en curso
		document.documentElement.style.scrollBehavior = "auto";
		// Esperar un momento para que el navegador aplique el cambio
		setTimeout(() => {
			document.documentElement.style.scrollBehavior = "smooth";
		}, 0);
	};

	return (
		<div>
			<LoadingSpinner />
			<div id="contenido">
				<div className="bg-image">
					<div id="section0" className="hero min-h-screen bg-transparent">
						<div className="hero-content text-center w-full h-3/4">
							<div className="max-w-md h-3/4 flex flex-col justify-center items-center">
								<div className="mt-auto mb-auto">
									<h2 className="text-5xl">Hola</h2>
									<p className="text-3xl">Tenemos una noticia para darte...</p>
								</div>
								<button className="flecha w-8 mb-0 mt-auto" onClick={() => start()}>
									<img className="w-8" src={downArrow} alt="arrow icon" />
								</button>
							</div>
						</div>
					</div>

					<div ref={section1Ref} id="section1" className="hero min-h-screen bg-transparent">
						<div className="hero-content text-center main-hero w-full h-3/4">
							<div className="max-w-md">
								<h1 className="text-5xl titulo">Nos casamos!</h1>
								<p className="py-6 text-3xl italic">Acompañanos a celebrar...</p>
								<button className="flecha" onClick={() => handleNextClick(section2Ref)}>
									<img className="w-8" src={downArrow} alt="arrow icon" />
								</button>
							</div>
						</div>
					</div>

					<div ref={section2Ref} id="section2" className="hero min-h-screen main-hero bg-customPastel">
						<div className="hero-content text-center">
							<div className="max-w-md">
								<div className="">
									<button
										className="flecha transform pb-2"
										onClick={() => handleNextClick(section1Ref)}
									>
										<img className="w-8 rotate-180" src={downArrow} alt="arrow icon" />
									</button>
									<p className="text-2xl mt-4">
										Damos el <span className="text-customRed text-2xl">SI</span>
									</p>
									<p className="text-2xl">
										Y queremos que seas testigo de nuestra alegría en ese día tan especial. Así que
										prepara tus mejores pasos de baile y tu sonrisa más grande, porque vamos a
										celebrar nuestro gran amor.
									</p>
								</div>
								<div className="w-full flex flex-row justify-center">
									<img
										src={corazonLogo}
										className="w-3/4 relative z-30 corazon"
										alt="Jacke y Seba logo"
									/>
									<img
										src={letrasLogo}
										className="w-3/4 absolute z-50 letras"
										alt="Jacke y Seba logo"
									/>
								</div>
								<button className="flecha" onClick={() => handleNextClick(section3Ref)}>
									<img className="w-8 mt-2" src={downArrow} alt="arrow icon" />
								</button>
							</div>
						</div>
					</div>

					<div ref={section3Ref} id="section3" className="hero min-h-screen bg-transparent">
						<div className="hero-content main-hero text-center h-3/4">
							<div className="max-w-md">
								<button className="flecha transform pb-2" onClick={() => handleNextClick(section2Ref)}>
									<img className="w-8 rotate-180" src={downArrow} alt="arrow icon" />
								</button>
								<h2 className="text-3xl">Ceremonia</h2>
								<p className="text-2xl">
									Además, nos emociona compartir con vos un momento muy especial, durante la
									celebración realizaremos una ceremonia simbólica para sellar nuestra unión. Será una
									ocasión llena de amor, en la que seremos guiados por personas especiales en nuestras
									vidas.
								</p>
								<p className="text-2xl">¡Estamos ansiosos por compartir este momento único!</p>
								<button className="flecha mt-2" onClick={() => handleNextClick(section4Ref)}>
									<img className="w-8" src={downArrow} alt="arrow icon" />
								</button>
							</div>
						</div>
					</div>

					<div ref={section4Ref} id="section4" className="hero min-h-screen main-hero bg-customPastel2">
						<div className="hero-content text-center">
							<div className="max-w-md">
								<button className="flecha transform pb-2" onClick={() => handleNextClick(section3Ref)}>
									<img className="w-8 rotate-180" src={downArrow} alt="arrow icon" />
								</button>
								<div className="mb-8">
									<p className="text-3xl">¿Cuándo?</p>
									<p className="text-3xl">Sábado 18 de Mayo de 2024</p>
									<p className="text-3xl">21:00 hs</p>
									<p className="text-xl">(Ser puntual)</p>
								</div>
								<div className="text-center flex flex-col justify-center">
									<h2 className="text-3xl">¿Dónde?</h2>
									<p className="text-3xl">Salón de Eventos -Kampus-</p>
									<p className="text-3xl">174 e/ 82 y 84, Berisso</p>
									<p className="text-xl mt-2">Ubicación</p>
									<a
										className="mr-auto ml-auto"
										href="https://maps.app.goo.gl/zAJ6EKnZBjDdwTGNA"
										target={"_blank"}
										rel={"noreferrer"}
									>
										<img src={locationIcon} alt="location icon" className="w-8 sombra" />
									</a>
								</div>
								<button className="mt-2 flecha" onClick={() => handleNextClick(section5Ref)}>
									<img className="w-8" src={downArrow} alt="arrow icon" />
								</button>
							</div>
						</div>
					</div>

					<div ref={section5Ref} id="section5" className="hero min-h-screen main-hero bg-transparent">
						<div className="hero-content text-center main-hero h-3/4">
							<div className="max-w-md">
								<button className="flecha transform pb-4" onClick={() => handleNextClick(section4Ref)}>
									<img className="w-8 rotate-180" src={downArrow} alt="arrow icon" />
								</button>
								<div className="mb-2">
									<p className="text-2xl">
										Nuestro mayor regalo en esa noche tan especial, será tu presencia.
									</p>
									<p className="text-2xl">
										Pero si deseas colaborar con nuestra luna de miel habrá un buzón en el salón o
										en estas cuentas:
									</p>
									<CopyToClipboardButton />
								</div>
								<button className="mt-2 flecha" onClick={() => handleNextClick(section6Ref)}>
									<img className="w-8" src={downArrow} alt="arrow icon" />
								</button>
							</div>
						</div>
					</div>

					<div ref={section6Ref} id="section6" className="hero min-h-screen main-hero bg-customPastel3">
						<div className="hero-content text-center">
							<div className="max-w-md p-0">
								<button className="flecha transform pb-4" onClick={() => handleNextClick(section5Ref)}>
									<img className="w-8 rotate-180" src={downArrow} alt="arrow icon" />
								</button>
								<h2 className="text-3xl">¿Nos confirmás tu asistencia?</h2>
								<WhatsAppButton />
								<div>
									<Timer />
								</div>
								<p className="text-3xl mt-8">Jacke y Seba...</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
