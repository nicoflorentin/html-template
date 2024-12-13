import React from "react"
import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Tailwind,
	Text,
} from "@react-email/components"

console.log(process.env)

const baseUrl = process.env.NODE_ENV === "development" ? "" : "."

const MOBILE_WIDTH = 480
const DESKTOP_WIDTH = 680

const Test = () => {
	return (
		<Html>
			<Head>
				<style>
					{`
            @media only screen and (max-width: 699px) {
              .desktopimg {
                display: none !important;
              }
              .mobile-img {
                display: block;
              }
            }
            @media only screen and (min-width: 700px) {
              .desktopimg {
                display: block !important;
              }
              .mobile-img {
                display: none;
              }
            }
          `}
				</style>
			</Head>
			<Body>
				<Container style={styles.container}>
					<Img src={`${baseUrl}/static/logo-laroche.png`} style={styles.logo} width='200' alt='Plaid' />
					<Section style={{ position: "relative" }}>
						<Text style={styles.bannerText}>¿Perdiste la firmeza en la piel?</Text>
						<Section style={{ position: "relative" }}>
							<Img
								className=''
								style={styles.image}
								src={`${baseUrl}/static/hyalu-conocemas.png`}
								alt='Plaid'
							></Img>
							<Button style={styles.conoceMasButton} href='https://www.laroche-posay.com.ar'>
								CONOCÉ MÁS
							</Button>
						</Section>
						<Text style={styles.dividerText}>POR QUÉ ES FUNDAMENTAL TENER</Text>
						<Text style={styles.dividerTextColored}>LA PIEL HIDRATADA EN VERANO ?</Text>
					</Section>
					<Section style={{ position: "relative" }}>
						<Img style={styles.image} src={`${baseUrl}/static/arrugas.png`} alt='Plaid' />
						<Button style={styles.arrugasButton}> COMPRAR</Button>
					</Section>
					<Section>
						<Text style={styles.xText}>"XXXXXXXXXX XX</Text>
						<Text style={styles.xText}>XXX XXXX XXXXXXXX</Text>
						<Text style={styles.xText}>XX XX XXXXX"</Text>
						<Text style={styles.textDoctora}>DRA. VALERIA VILLORNO</Text>
						<Text style={styles.xText}>MIN (COMPLETAR)</Text>
						<Button style={styles.button}>QUIERO CONOCER MAS</Button>
					</Section>
				</Container>
			</Body>
		</Html>
	)
}

const styles = {
	container: {
		backgroundColor: "white",
		// margin: "0 auto",
		padding: "0",
		maxWidth: "680px",
		width: "auto",
	},
	logo: {
		margin: "0 auto",
	},
	button: {
		color: "white",
		margin: "auto",
		fontSize: "20px",
		textTrasform: "uppercase",
		fontWeight: "bold",
		padding: "10px 30px",
		backgroundColor: "rgb(19, 19, 19)",
	},
	bannerText: {
		color: "white",
		fontSize: "20px",
		margin: "0 auto",
		textTrasform: "uppercase",
		padding: "8px 0",
		textAlign: "center" as const,
		backgroundColor: "#00A0E6",
	},
	image: {
		position: "relative" as const,
		margin: "0",
		width: "100%",
	},
	conoceMasButton: {
		color: "white",
		fontSize: "20px",
		textTrasform: "uppercase",
		position: "absolute" as const,
		bottom: "20%",
		left: "5%",
		fontWeight: "bold",
		padding: "10px 15px",
		borderRadius: "2px",
		textAlign: "center" as const,
		backgroundColor: "rgb(19, 19, 19)",
	},
	dividerText: {
		fontSize: "30px",
		textAlign: "center" as const,
	},
	dividerTextColored: {
		fontSize: "30px",
		textAlign: "center" as const,
		color: "#00A0E6",
		fontWeight: "bold",
	},
	arrugasButton: {
		color: "white",
		fontSize: "20px",
		textTrasform: "uppercase",
		position: "absolute" as const,
		bottom: "80px",
		left: "410px",
		fontWeight: "bold",
		padding: "10px 30px",
		borderRadius: "2px",
		textAlign: "center" as const,
		backgroundColor: "rgb(19, 19, 19)",
	},
	xText: {
		textAlign: "center" as const,
		fontSize: "25px",
	},
	textDoctora: {
		marginTop: "50px",
		textAlign: "center" as const,
		fontSize: "25px",
		fontWeight: "bold",
	},
}

export default Test
