import '../scss/main.scss'
import Link from "next/link"
import MenuDrawer from '../components/MenuDrawer/MenuDrawer'
import Header from '../components/Header/Header'
const index = () => (
	<section>
		<nav><MenuDrawer /></nav>
		 <Header />

		 <section class="section-about">
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>

                <div class="row">
                    <div class="col-1-of-2">
                        <h3 class="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                            ducimus quam nisi exercitationem omnis earum qui.
                        </p>

                        <h3 class="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                        </p>

                        <a href="#" class="btn-text">Learn more &rarr;</a>
                    </div>
                    <div class="col-1-of-2">
    
                    </div>
                </div>
            </section>




	</section>

)

export default index;