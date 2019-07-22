import Document, { Head, Main, NextScript } from "next/document";

//import Footer from '../components/Footer/Footer'
export default class MyDocument extends Document {
	render() {
		return(
			<html>
					<Head>						
								<link rel="stylesheet" href="/_next/static/style.css" />
								<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
							  <script type="text/javascript" src="../static/slider.js"></script> 
					</Head>
			
					<body>
					
						<Main/>
						
						<NextScript/>
					</body>
			</html>
		)
	}
}