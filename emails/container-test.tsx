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
					<Section style={{ position: "relative" }}>
						<Img src={`${baseUrl}/static/logo-laroche.png`} style={styles.img} alt='Plaid' />
					</Section>
				</Container>
			</Body>
		</Html>
	)
}

const styles = {
	container: {
		backgroundColor: "#f7f7f7",
		border : "1px solid red",
		padding: "0",
		maxWidth: "680px",
	},
	img: {
		width: "100%",
		// height: "auto",
	},
}

export default Test
