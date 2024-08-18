import styles from './ecobrands.module.scss';
import { Button, Card } from 'react-bootstrap';

import SingleBlock from '../components/SingleBlock.jsx'
import TripleBlock from '../components/TripleBlock.jsx';

// Images
import EarthHero from '../assets/brand_images/EarthHero.webp';
import ZWS from '../assets/brand_images/ZWS.webp';
import DoneGood from '../assets/brand_images/DoneGood.webp';
import BabyPenguin from '../assets/brand_images/BabyPenguin.webp';
import GreenToys from '../assets/brand_images/GreenToys.webp';
import PlanToys from '../assets/brand_images/PlanToys.webp';
import WGAC from '../assets/brand_images/WhoGivesaCrap.webp';
import SevGen from '../assets/brand_images/SeventhGen.webp';
import Preserve from '../assets/brand_images/Preserve.webp';
import EarthBrands from '../assets/brand_images/EarthBrands.webp';
import Pela from '../assets/brand_images/PelaCase.jpg';
import Scandi from '../assets/brand_images/SuperScandi.webp';
import Patagonia from '../assets/brand_images/Patagonia.webp';
import TenTree from '../assets/brand_images/tentree.png';
import Pact from '../assets/brand_images/Pact.webp';


const ecoTitle = "Discover Top Eco-Friendly Brands for Sustainable Living | Idori";

function EcoBrands() {
    document.title = ecoTitle;

    return (<>
        <div className='text-primary'>
            <SingleBlock mt = '5' mb = '5' content={<>
                <div>
                    <h2>Discover Our Favorite Eco-Friendly Brands for Sustainable Living</h2> 
                    <p>Explore our comprehensive collection of eco-friendly brands that prioritize sustainability and offer conscious alternatives for parents seeking a greener lifestyle.
                        Make a positive impact on the planet and support ethical consumption by switching to these trusted eco-friendly brands.</p>
                </div>
            </>}></SingleBlock>
        </div>
        
        <div className = "text-primary" style={{"paddingLeft" : "10svh", "paddingRight" : "10svh", "textAlign" : "left"}}>
        <h3>Eco Friendly Marketplaces</h3>
        <TripleBlock mb = "5"
            left = {<>
                <Card className='bg-primary'>
                    <div className={styles.innerCard + "p-md-2 p-1 bg-info"}>
                        <img className='card-img' src={EarthHero}/>
                        <div className="mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary text-start">
                            <h3>EarthHero</h3> <p>Earth Hero is an online marketplace that offers a wide selection of sustainable and eco-friendly products from various brands. They curate a range of items, including home goods, personal care products, and accessories, all with a focus on sustainability and reducing environmental impact. Earth Hero provides consumers with a convenient platform to find ethical and sustainable brands that offer high-quality products.</p>
                            <Button as = "a" href = "https://earthhero.com/" target="_blank" className="justify-content-center text-white">
                                Shop Now!
                            </Button>
                        </div>
                    </div>
                </Card> 
            </>} 
            middle = {<>
                <Card>
                    <div className={styles.innerCard + "p-md-2 p-1 bg-info"}>
                        <img className='card-img' src={ZWS} />
                        <div className="mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary text-start">
                            <h3>Zero Waste Store</h3> <p>Zero Waste Store is an online retailer dedicated to providing sustainable and zero waste products for everyday living. They offer a diverse range of items, including reusable alternatives to single-use plastics, eco-friendly home goods, and personal care products, all designed to help individuals reduce waste and live more sustainably. Zero Waste Store promotes a circular economy and empowers consumers to make conscious choices that contribute to a greener future.</p>
                            <Button as = "a" href = "https://zerowastestore.com/" target="_blank" className="justify-content-center text-white">
                                Shop Now!
                            </Button>
                        </div>
                    </div>
                </Card>
            </>} 
            right ={<>
                <Card>
                    <div className={styles.innerCard + "p-md-2 p-1 bg-info"}>
                        <img src={DoneGood} className='card-img'/>
                        <div className = "mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary text-start">
                            <h2>Done Good</h2> <p>DoneGood is an online platform that connects consumers with ethical and sustainable brands. They curate a wide range of products, including clothing, accessories, home goods, and personal care items, all from companies that prioritize social and environmental responsibility. DoneGood makes it easier for conscious shoppers to find and support businesses that align with their values, promoting a more sustainable and ethical marketplace.</p>
                            <Button as = "a" href = "https://donegood.co/" target="_blank" className="justify-content-center text-white">
                                Shop Now!
                            </Button>
                        </div>
                    </div>
                </Card>
            </>}>
        </TripleBlock>
        <h2>Sustainable Toys</h2>
        <TripleBlock mb = "5"
        left = {<Card>
            <div className={styles.innerCard + "p-md-2 p-1 bg-info"}>
                <img className="card-img" src={BabyPenguin} />
                <div className="mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary text-start">
                    <h2>The Baby Penguin</h2> <p>The Baby Penguin is a dedicated platform empowering parents to make sustainable choices for their children. They curate a selection of the most sustainable toys that promote learning, development, and happiness. Their toys are designed to last for generations, made from responsibly sourced wood, and contribute to reducing waste in landfills.</p>
                    <Button as = "a" href = "https://shop.thebabypenguin.com/" target="_blank" className="justify-content-center text-white">
                        Shop Now!
                    </Button>
                </div>
            </div>
        </Card>}
        middle = {
            <Card className="text-center">
            <div className={styles.innerCard + "p-md-2 p-1 bg-info"}>
                <img className="card-img" src={GreenToys} />
                <div className="mx-auto p-lg-4 text-primary text-start">
                    <h2>Green Toys</h2> <p>Green Toys is a brand that specializes in eco-friendly toys made from recycled plastic materials. Their toys are designed with sustainability in mind, prioritizing both environmental and child safety. Green Toys offers a wide range of imaginative and durable playthings that promote creative play while reducing waste and supporting a greener future.</p>
                    <Button as = "a" href = "https://www.greentoys.com/" target="_blank" className="text-white">
                        Shop Now!
                    </Button>
                </div>
            </div>
        </Card>}
        right = {<Card className="text-center">
            <div className={styles.innerCard + "p-md-2 p-1 bg-info"}>
                <img className="card-img" src={PlanToys} />
                <div className="mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary text-start">
                    <h2>Plan Toys</h2> <p>Plan Toys is a renowned brand known for their sustainable and educational wooden toys. They use eco-friendly materials, such as rubberwood, and their manufacturing process follows strict environmental standards. Plan Toys offers a diverse range of toys that foster creativity, imagination, and early childhood development, while also promoting a commitment to sustainability and natural play.</p>
                    <Button as = "a" href = "https://www.plantoys.com/" target="_blank" className="justify-content-center text-white">
                        Shop Now!
                    </Button>
                </div>
            </div>
        </Card>}/>
        <h2> Home Goods</h2>
        <TripleBlock animation={true} mb = "5"
            left = {<Card>
                <div className={styles.innerCard + "p-md-2 p-1 bg-info"}>
                    <img className="card-img" src={WGAC} />
                    <div className="mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary text-start">
                        <h2>Who Gives a Crap Toilet Paper</h2> <p>Who Gives a Crap is an innovative and socially conscious toilet paper brand that aims to make a positive impact on both people and the planet. They produce 100% recycled or bamboo toilet paper, which is all sustainably sourced. Who Gives a Crap donates 50% of their profits to build toilets to improve sanitation in underserved communities around the world.</p>
                        <Button as = "a" href = "https://us.whogivesacrap.org/" target="_blank" className="justify-content-center text-white">
                            Shop Now!
                        </Button>
                    </div>
                </div>
            </Card>}
            middle = {
                <Card className="text-center">
                <div className={styles.innerCard + "p-md-2 p-1 bg-info"}>
                    <img className="card-img" src={SevGen} />
                    <div className="mx-auto p-lg-4 text-primary text-start">
                        <h2>Seventh Generation</h2> <p>Seventh Generation is a leading brand in sustainable household and personal care products. With a commitment to environmental responsibility, their products are made from plant-based ingredients, free from harmful chemicals, and packaged in recycled materials. Seventh Generation strives to create a healthier and more sustainable future for both people and the planet.</p>
                        <Button as = "a" href = "https://www.seventhgeneration.com/" target="_blank" className="text-white">
                            Shop Now!
                        </Button>
                    </div>
                </div>
            </Card>}
            right = {<Card className="text-center">
                <div className={styles.innerCard + "p-md-2 p-1 bg-info"}>
                    <img className="card-img" src={Preserve} />
                    <div className="mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary text-start">
                        <h2>Preserve</h2> <p>Preserve is a company dedicated to creating sustainable household products made from recycled materials. They offer a wide range of everyday essentials, from toothbrushes to kitchenware, all designed with the environment in mind. Preserve's mission is to minimize waste, promote recycling, and encourage a more sustainable lifestyle through their innovative and eco-friendly products.</p>
                        <Button as = "a" href = "https://www.preserve.eco/" target="_blank" className="justify-content-center text-white">
                            Shop Now!
                        </Button>
                    </div>
                </div>
            </Card>}/>
            <TripleBlock animation={true} mb = "5"
            left = {<Card>
                <div className={styles.innerCard + "p-md-2 p-1 bg-info"}>
                    <img className="card-img" src={EarthBrands} />
                    <div className="mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary text-start">
                        <h2>Earth Brands</h2> <p>Earth Brands is a company that specializes in manufacturing 100% compostable PLA cups. Their products are designed to reduce waste and environmental impact, providing an eco-friendly alternative to traditional plastic cups. Earth Brands offers a convenient and environmentally conscious solution for individuals and businesses seeking sustainable options for their disposable cup needs.</p>
                        <Button as = "a" href = "https://earthbrands.earth/" target="_blank" className="justify-content-center text-white">
                            Shop Now!
                        </Button>
                    </div>
                </div>
            </Card>}
            middle = {
                <Card className="text-center">
                <div className={styles.innerCard + "p-md-2 p-1 bg-info"}>
                    <img className="card-img" src={Pela} />
                    <div className="mx-auto p-lg-4 text-primary text-start">
                        <h2>Pela Case</h2> <p>Pela Case is a leading brand in sustainable phone cases, committed to reducing plastic waste and promoting eco-friendly alternatives. Their phone cases are made from innovative and durable materials, such as Flaxstic®, which combines plant-based biopolymers and flax straw fibers. Pela Case offers stylish and protective phone cases that are 100% compostable, allowing consumers to make a positive impact on the environment without compromising on style or functionality.</p>
                        <Button as = "a" href = "https://pelacase.com/" target="_blank" className="text-white">
                            Shop Now!
                        </Button>
                    </div>
                </div>
            </Card>}
            right = {<Card className="text-center">
                <div className={styles.innerCard + "p-md-2 p-1 bg-info"}>
                    <img className="card-img" src={Scandi} />
                    <div className="mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary text-start">
                        <h2>Super Scandi</h2> <p>Super Scandi is a brand dedicated to providing sustainable and high-quality Scandinavian-inspired home goods and lifestyle products. With a focus on minimalism, functionality, and eco-consciousness, Super Scandi offers a range of stylish and sustainable items that enhance the modern living experience such as reusable wash cloths that are also biodegradeable.</p>
                        <Button as = "a" href = "https://superscandi.com/" target="_blank" className="justify-content-center text-white">
                            Shop Now!
                        </Button>
                    </div>
                </div>
            </Card>}/>
        <h2>Clothing and Apparel</h2>
        <TripleBlock animation={true} mb = "5"
            left = {<Card>
                <div className={styles.innerCard + "p-md-2 p-1 bg-info"}>
                    <img className="card-img" src={Patagonia} />
                    <div className="mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary text-start">
                        <h2>Patagonia</h2> <p>Patagonia is a renowned outdoor clothing and gear company that is committed to environmental and social responsibility. They prioritize sustainability by using recycled and organic materials in their products and actively work to reduce their carbon footprint. Patagonia's mission extends beyond selling outdoor gear; they are dedicated to protecting the planet and supporting environmental activism through their initiatives and campaigns.</p>
                        <Button as = "a" href = "https://www.patagonia.com/home/" target="_blank" className="justify-content-center text-white">
                            Shop Now!
                        </Button>
                    </div>
                </div>
            </Card>}
            middle = {
                <Card className="text-center">
                <div className={styles.innerCard + "p-md-2 p-1 bg-info"}>
                    <img className="card-img" src={TenTree} />
                    <div className="mx-auto p-lg-4 text-primary text-start">
                        <h2>Tentree</h2> <p>Tentree is a sustainable lifestyle brand that combines fashion with environmental activism. For every item purchased, they plant ten trees in various locations worldwide. With a focus on sustainable materials and ethical manufacturing practices, Tentree aims to create a positive impact on the planet and raise awareness about the importance of reforestation and environmental conservation.</p>
                        <Button as = "a" href = "https://www.tentree.com/" target="_blank" className="text-white">
                            Shop Now!
                        </Button>
                    </div>
                </div>
            </Card>}
            right = {<Card className="text-center">
                <div className={styles.innerCard + "p-md-2 p-1 bg-info"}>
                    <img className="card-img" src={Pact} />
                    <div className="mx-auto p-lg-4 p-md-2 p-1 bg-info text-primary text-start">
                        <h2>Pact</h2> <p>Pact is an apparel brand that focuses on creating sustainable and organic clothing for men, women, and children. They use Fair Trade Certified factories and organic materials, ensuring that their products are produced ethically and with minimal environmental impact. Pact offers a range of comfortable and stylish clothing options, all while maintaining a commitment to sustainability and social responsibility.</p>
                        <Button as = "a" href = "https://wearpact.com/" target="_blank" className="justify-content-center text-white">
                            Shop Now!
                        </Button>
                    </div>
                </div>
            </Card>}/>
        </div>
        
    </>);
}

export default EcoBrands;