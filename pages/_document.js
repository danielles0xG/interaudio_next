import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return(
			<html>
					<Head>
								<title>Interaudio | Sound Rent - Alquiler de Bocinas equipo de Luz y Sonido</title>
								<link rel="stylesheet" href="../css/style.css"></link>
					</Head>
					<body>
						<Main/>
						<NextScript/>
					</body>
			</html>
		)
	}
}