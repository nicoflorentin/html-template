import React from "react"
import {
	Body,
	Button,
	coldarkCold,
	Column,
	Container,
	Font,
	Head,
	Heading,
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

const Verano = () => {
	return (
		<Html>
			<Preview>Prueba de Preview</Preview>
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
			<Body>
				<Container style={styles.container}>
					<Img
						style={styles.logoImg}
						src={`${baseUrl}${assetsFolderName}/verano-logo1.png`}
						width={200}
						alt='logo'
					/>
					<Text style={styles.textHola}>¡Hola NOMBRE!</Text>
					<Img
						style={{ width: "100%" }}
						className='desktop-img'
						src={`${baseUrl}${assetsFolderName}/verano-botellasDesktop.png`}
						alt='botellas'
					/>
					<Img
						style={{ width: "100%" }}
						className='mobile-img'
						src={`${baseUrl}${assetsFolderName}/verano-botellasMobile.png`}
						alt='botellas'
					/>

					<Img
						style={{ width: "100%" }}
						src={`${baseUrl}${assetsFolderName}/verano-mercado.png`}
						alt='mercadolibre'
					/>
					<Container style={styles.textContainer1}>
						<Text style={styles.textEmpezamos}>Empezamos una nueva aventura</Text>
						<Text style={styles.textMardelplata}>Y nos mudamos a mar del plata!</Text>
					</Container>
					<Img
						style={{ width: "100%" }}
						src={`${baseUrl}${assetsFolderName}/verano-costa-argentina.png`}
						alt='si seguis en la costa'
					/>
					<Section style={styles.orangeBg}>
						<Button style={styles.buttonRecordatorio} href='https://www.mercadolibre.com.ar'>
							RECORDATORIO
						</Button>
						<Img
							style={{ width: "100%" }}
							src={`${baseUrl}${assetsFolderName}/verano-vichylover.png`}
							width={500}
							alt='bichilover'
						/>
						<Img
							style={styles.imgMercado}
							src={`${baseUrl}${assetsFolderName}/verano-beneficio.png`}
							alt='quiero mi beneficio'
						/>
						<Text>Nos vemos pronto</Text>
					</Section>
					<Section style={styles.footer}>
						<Row>
							<Column>
								<Img width={150} src={`${baseUrl}${assetsFolderName}/verano-logo-white.png`} alt='Plaid' />
							</Column>
							<Column>
								<Row>
									<Column>
										<Text style={styles.seguinos}>SEGUINOS EN</Text>
									</Column>
									<Column>
										<Img
											style={styles.socialLogo}
											width='20'
											src={`${baseUrl}${assetsFolderName}/facebook-white.png`}
											alt='Plaid'
										></Img>
									</Column>
									<Column>
										<Img
											style={styles.socialLogo}
											width='20'
											src={`${baseUrl}${assetsFolderName}/instagram-white.png`}
											alt='Plaid'
										></Img>
									</Column>
									<Column>
										<Img
											style={styles.socialLogo}
											width='25'
											src={`${baseUrl}${assetsFolderName}/youtube-white.png`}
											alt='Plaid'
										></Img>
									</Column>

									<Column>
										<Img
											style={styles.socialLogo}
											width='20'
											src={`${baseUrl}${assetsFolderName}/whatsapp-white.png`}
											alt='Plaid'
										></Img>
									</Column>
								</Row>
							</Column>
						</Row>
					</Section>
					<Text>Legales</Text>
				</Container>
			</Body>
		</Html>
	)
}

const styles: Record<string, React.CSSProperties> = {
	container: {
		border: "1px solid red",
		maxWidth: "620px",
		backgroundColor: "white",
		textAlign: "center" as const,
	},
	logoImg: {
		margin: "20px auto",
	},
	textHola: {
		fontSize: "20px",
		fontWeight: 700,
		letterSpacing: "1px",
		// lineHeight: "40px",
		padding: "8px",
	},
	imgMercado: {
		margin: "0 auto",
		width: "100%",
	},
	textContainer1: {
		margin: "20px 0",
	},
	textEmpezamos: {
		fontSize: "20px",
		margin: "0",
		fontWeight: "normal",
		letterSpacing: "1px",
	},
	textMardelplata: {
		margin: "0",
		fontSize: "20px",
		fontWeight: "bold",
		letterSpacing: "1px",
	},
	buttonRecordatorio: {
		backgroundColor: "#FE7E49",
		color: "white",
		fontWeight: "bold",
		padding: "10px 30px",
		margin: "20px 0",
	},
	orangeBg: {
		backgroundColor: "#FFECCD",
	},
	footer: {
		backgroundColor: "black",
		padding: "20px 20px",
	},
	seguinos: {
		fontSize: "10px",
		color: "white",
		padding: "0 10px",
	},
	socialLogo: {
		margin: "0 3px",
	},
}

export default Verano
