import Document, { Head, Main, NextScript } from "next/document";

//import Footer from '../components/Footer/Footer'
export default class MyDocument extends Document {
	render() {
		return(
			<html>
					<Head>						
					<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
								integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
								crossorigin="anonymous"></script>
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