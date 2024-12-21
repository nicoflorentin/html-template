import React from "react"
import {
	Body,
	Button,
	coldarkCold,
	Column,
	Container,
	Font,
	Head,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Tailwind,
	Text,
} from "@react-email/components"

import { ResponsiveColumn, ResponsiveRow } from "@responsive-email/react-email"

const baseUrl = process.env.NODE_ENV === "development" ? "/" : ""
const assetsFolderName = process.env.NODE_ENV === "development" ? "static" : "images"

console.log(process.env)

const MOBILE_WIDTH = 480
const DESKTOP_WIDTH = 680

const Test = () => {
	return (
		<Html>
			<Preview>Prueba de Preview</Preview>;
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap' rel='stylesheet' />
				<style>
					{`
            @media only screen and (max-width: 619px) {
              .desktop-img {
                display: none !important;
              }
              .mobile-img {
                display: block !important;
              }
							.mobile-text {
								font-size: 25px !important;
							}
            }
            @media only screen and (min-width: 620px) {
              .desktop-img {
                display: block !important;
              }
              .mobile-img {
                display: none !important;
              }
            }
          `}
					{/*  */}
				</style>
				<Font
					fontFamily='Montserrat'
					fallbackFontFamily='sans-serif'
					// webFont={{
					// 	url: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
					// 	format: "woff2",
					// }}
					fontWeight={400}
					fontStyle='normal'
				/>
			</Head>
			<Body style={{ margin: "0" }}>
				<Container style={styles.container}>
					<Section style={{ position: "relative" }}>
						<Link href="https://google.com">
							<Img
								src={`${baseUrl}${assetsFolderName}/logo-laroche.png`}
								width='200'
								style={styles.logoMain}
								alt='Plaid'
							/>
						</Link>
					</Section>
					<Text style={styles.firmeza}>¿Perdiste la firmeza en la piel?</Text>
					<Img src={`${baseUrl}${assetsFolderName}/hyalu.png`} style={{ width: "100%" }} alt='Plaid'></Img>
					<Section style={styles.porqueContainer}>
						<Text className='mobile-text' style={styles.porque1}>
							POR QUÉ ES FUNDAMENTAL TENER
						</Text>
						<Text className='mobile-text' style={styles.porque2}>
							LA PIEL HIDRATADA EN VERANO?
						</Text>
					</Section>
					<Section style={styles.headerContainer}>
						<Img
							className='desktop-img'
							src={`${baseUrl}${assetsFolderName}/arrugas.png`}
							style={{ width: "100%" }}
							alt='Plaid'
						></Img>
						<Img
							className='mobile-img'
							src={`${baseUrl}${assetsFolderName}/arrugas-mobile.png`}
							style={{ width: "100%" }}
							alt='Plaid'
						></Img>
					</Section>
					<Section style={styles.xTextContainer}>
						<Text style={styles.xText}>"X XXXXXXXXXX XX</Text>
						<Text style={styles.xText}>XXXXXXXXXXXXXXXX</Text>
						<Text style={styles.xTextBold}>XX XX XXXXX"</Text>
						<Section style={styles.draTextContainer}>
							<Text style={styles.xTextBold}>DRA. VALERIA VILLORDO</Text>
							<Text style={styles.xText}>M.N (COMPLETAR)</Text>
						</Section>
						<Button style={styles.button1}>QUIERO CONOCER MÁS</Button>
					</Section>
					<ResponsiveRow>
						<ResponsiveColumn style={styles.column} span={1}>
							<Img
								className='image-resize'
								width={"100%"}
								src={`${baseUrl}${assetsFolderName}/botellita.png`}
								alt='Plaid'
							/>
						</ResponsiveColumn>
						<ResponsiveColumn style={styles.column} span={1}>
							<Img
								className='image-resize'
								width={"100%"}
								src={`${baseUrl}${assetsFolderName}/beneficios.png`}
								alt='Plaid'
							/>
						</ResponsiveColumn>
					</ResponsiveRow>
					<Button style={styles.button2}>SUMÁ HYALU B5 SERUM A TU RUTINA</Button>
					<Section>
						<Text style={styles.firmeza}>FÓRMULA SUPERIOR</Text>
					</Section>
					<Img style={{ width: "100%" }} src={`${baseUrl}${assetsFolderName}/formula.png`} alt='Plaid' />
					<Button style={styles.button3}>COMPRAR</Button>
					<Section style={styles.footer}>
						<Row>
							<Column align='center'>
								<Img
									width='200'
									style={styles.logo}
									src={`${baseUrl}${assetsFolderName}/black-logo.webp`}
									alt='Plaid'
								/>
							</Column>
							<Column align='right'>
								<Row>
									<Column align='right'>
										<Text style={styles.seguinos}>SEGUINOS EN</Text>
									</Column>
									<Column>
										<Img
											width='20'
											src={`${baseUrl}${assetsFolderName}/facebook-white.png`}
											alt='Plaid'
										></Img>
									</Column>
									<Column>
										<Img
											width='20'
											src={`${baseUrl}${assetsFolderName}/instagram-white.png`}
											alt='Plaid'
										></Img>
									</Column>
									<Column>
										<Img
											width='25'
											src={`${baseUrl}${assetsFolderName}/youtube-white.png`}
											alt='Plaid'
										></Img>
									</Column>

									<Column>
										<Img
											width='20'
											src={`${baseUrl}${assetsFolderName}/whatsapp-white.png`}
											alt='Plaid'
										></Img>
									</Column>
								</Row>
							</Column>
						</Row>
					</Section>
					<Text style={styles.endInfo}>
						﻿ Este correo ha sido enviado por L'Oréal Argentina S.A. (Av. Libertador 7208, piso 8, CABA, Bs. As.,
						Argentina). Lo recibís porque estás registrado en nuestra base de datos. Es importante que sepas que
						en nuestro sitio web encontrarás nuestra Política de Privacidad. Si no queres seguir recibiendo estas
						comunicaciones, podes desuscribirte. Como fitular de los datos personales tenes derecho a solicitar
						el acceso, rectificación, actualización o supresión de tus datos (Ley 25.326). La Agencia de Acceso a
						la Información Pública en su carácter de Órgano de Control de la Ley N°25.326, tiene la atribución de
						atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por
						incumplimiento de las normas vigentes en materia de protección de datos personales.
					</Text>
				</Container>
			</Body>
		</Html>
	)
}

const styles: Record<string, React.CSSProperties> = {
	container: {
		margin: "0 auto",
		// padding: "0",
		maxWidth: "620px",
		backgroundColor: "white",
		textAlign: "center" as const,
	},
	logo: {
		margin: "0 auto",
	},
	logoMain: {
		margin: "0 auto 20px auto",
	},
	firmeza: {
		backgroundColor: "#00A0E6",
		color: "white",
		fontSize: "25px",
		margin: "0",
		padding: "8px 0",
		textAlign: "center" as const,
		fontWeight: 100,
	},
	porqueContainer: {
		margin: "20px 0",
	},
	porque1: {
		fontSize: "30px",
		margin: "10px 0",
	},
	porque2: {
		fontSize: "30px",
		fontWeight: "800",
		margin: "10px 0",
		color: "rgb(42, 154, 214)",
	},
	headerContainer: {
		width: "100%",
		backgroundColor: "#9BE0F2",
	},
	xTextContainer: {
		textAlign: "center" as const,
		margin: "50px 0",
	},
	xText: {
		fontSize: "30px",
		margin: "0",
	},
	xTextBold: {
		fontSize: "30px",
		fontWeight: "bold",
		margin: "0",
	},
	draTextContainer: {
		margin: "20px 0",
	},
	button1: {
		backgroundColor: "black",
		fontSize: "20px",
		width: "250px",
		display: "block",
		margin: "10px auto",
		color: "white",
		padding: "10px 20px",
		fontWeight: "bolder",
		textAlign: "center" as const,
	},
	button2: {
		backgroundColor: "black",
		width: "400px",
		fontSize: "20px",
		display: "block",
		margin: "30px auto",
		color: "white",
		padding: "10px 0",
		fontWeight: "bolder",
		textAlign: "center" as const,
	},
	button3: {
		backgroundColor: "black",
		width: "150px",
		fontSize: "20px",
		display: "block",
		margin: "20px auto",
		color: "white",
		padding: "10px 0",
		fontWeight: "bolder",
		textAlign: "center" as const,
	},
	column: {
		// importantisima esta linea, tambien se puede usar minWidth
		// Hardcoded column size to align with the intended media query.
		maxWidth: "302.5px",
	},
	seguinos: {
		fontSize: "10px",
		color: "white",
		margin: "0 20px",
	},
	footer: {
		backgroundColor: "black",
		padding: "20px 20px",
	},
	endInfo: {
		fontSize: "10px",
		lineHeight: "15px",
		padding: "10px 30px",
	},
}

export default Test
