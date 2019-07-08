import Link from "next/link"
import '../css/style.css'

const index = () => (
	<section>
		<h1 className="header">HEADER</h1>
		<Link href="About">
			<a title="About Interaudio">
				About this site
			</a>
		</Link>


	</section>
	
)

export default index;