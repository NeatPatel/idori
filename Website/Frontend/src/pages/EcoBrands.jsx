import styles from './ecobrands.module.scss';
import { Button, Card } from 'react-bootstrap';

import TitleBlock from '../components/TitleBlock.jsx'
import CenterBlock from '../components/CenterBlock.jsx'
import ThreeBlock from '../components/ThreeBlock.jsx'

// Images
import EarthHero from '../assets/brand_images/EarthHero.webp';
import ZWS from '../assets/brand_images/ZWS.webp';
import DoneGood from '../assets/brand_images/DoneGood.webp';

const ecoTitle = "Discover Top Eco-Friendly Brands for Sustainable Living | Idori";

function EcoBrands() {
    document.title = ecoTitle;

    return (<>
        <div className={styles.mainBodyDiv}>
        <CenterBlock animation={false} center = {<div><h2>Discover Our Favorite Eco-Friendly Brands for Sustainable Living</h2> <p>Explore our comprehensive collection of eco-friendly brands that prioritize sustainability and offer conscious alternatives for parents seeking a greener lifestyle. Make a positive impact on the planet and support ethical consumption by switching to these trusted eco-friendly brands.</p></div>} txtColor="primary"/>

        <ThreeBlock animation={false} 
            left = {<Card className="text-center">
                <div className={styles.innerCard + "mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary"}>
                    <img src={EarthHero} height="300vh" width="300vh"/>
                    <div className="mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary">
                        <h3>EarthHero</h3> <p>Earth Hero is an online marketplace that offers a wide selection of sustainable and eco-friendly products from various brands. They curate a range of items, including home goods, personal care products, and accessories, all with a focus on sustainability and reducing environmental impact. Earth Hero provides consumers with a convenient platform to find ethical and sustainable brands that offer high-quality products.</p>
                        <Button className="justify-content-center text-white">
                            Shop Now!
                        </Button>
                    </div>
                </div>
            </Card>}
            center = {
                <Card className="text-center">
                <div className={styles.innerCard + "mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary"}>
                    <img src={ZWS} height="300vh" width="300vh"/>
                    <div className="mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary">
                        <h3>Zero Waste Store</h3> <p>Zero Waste Store is an online retailer dedicated to providing sustainable and zero waste products for everyday living. They offer a diverse range of items, including reusable alternatives to single-use plastics, eco-friendly home goods, and personal care products, all designed to help individuals reduce waste and live more sustainably. Zero Waste Store promotes a circular economy and empowers consumers to make conscious choices that contribute to a greener future.</p>
                        <Button className="justify-content-center text-white">
                            Shop Now!
                        </Button>
                    </div>
                </div>
            </Card>}
            right = {<Card className="text-center">
                <div className={styles.innerCard + "mx-auto p-lg-4 p-md-2 p-1 bg-info"}>
                    <img src={DoneGood} height="120vh" width="120vh"/>
                    <div className = "mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary">
                        <h2>Done Good</h2> <p>DoneGood is an online platform that connects consumers with ethical and sustainable brands. They curate a wide range of products, including clothing, accessories, home goods, and personal care items, all from companies that prioritize social and environmental responsibility. DoneGood makes it easier for conscious shoppers to find and support businesses that align with their values, promoting a more sustainable and ethical marketplace.</p>
                        <Button className="justify-content-center text-white">
                            Shop Now!
                        </Button>
                    </div>
                </div>
            </Card>}/>
            <ThreeBlock animation={true} 
            left = {<Card className="text-center">
                <div className={styles.innerCard + " d-flex flex-column justify-content-end mt-auto card-img-overlay"}>
                    <img className="card-img" src={EarthHero} />
                    <div className="mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary">
                        <h2>EarthHero</h2> <p>Earth Hero is an online marketplace that offers a wide selection of sustainable and eco-friendly products from various brands. They curate a range of items, including home goods, personal care products, and accessories, all with a focus on sustainability and reducing environmental impact. Earth Hero provides consumers with a convenient platform to find ethical and sustainable brands that offer high-quality products.</p>
                        <Button className="justify-content-center text-white">
                            Shop Now!
                        </Button>
                    </div>
                </div>
            </Card>}
            center = {
                <Card className="text-center">
                <div className={styles.innerCard}>
                    <img className="card-img" src={EarthHero} />
                    <div className="mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary">
                        <h2>EarthHero</h2> <p>Earth Hero is an online marketplace that offers a wide selection of sustainable and eco-friendly products from various brands. They curate a range of items, including home goods, personal care products, and accessories, all with a focus on sustainability and reducing environmental impact. Earth Hero provides consumers with a convenient platform to find ethical and sustainable brands that offer high-quality products.</p>
                        <Button className="text-white">
                            Shop Now!
                        </Button>
                    </div>
                </div>
            </Card>}
            right = {<Card className="text-center">
                <div className={styles.innerCard}>
                    <img className="card-img" src={EarthHero} />
                    <div className="mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary">
                        <h2>EarthHero</h2> <p>Earth Hero is an online marketplace that offers a wide selection of sustainable and eco-friendly products from various brands. They curate a range of items, including home goods, personal care products, and accessories, all with a focus on sustainability and reducing environmental impact. Earth Hero provides consumers with a convenient platform to find ethical and sustainable brands that offer high-quality products.</p>
                        <Button className="justify-content-center text-white">
                            Shop Now!
                        </Button>
                    </div>
                </div>
            </Card>}/>
        </div>
    </>);
}

export default EcoBrands;