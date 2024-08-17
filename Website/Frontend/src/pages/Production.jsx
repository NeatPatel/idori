import styles from './production.module.scss';
import SingleBlock from '../components/SingleBlock.jsx';
import DoubleBlock from '../components/DoubleBlock.jsx';
import { Card, Button, Row, Col, Image } from 'react-bootstrap';

const productionTitle = "Learn About Our Eco-Friendly Process | Idori";

function Production() {
    document.title = productionTitle;

    return (<>
        <SingleBlock mt="10" mb="0" content={<>
            <h2 className="text-primary">Learn about Our Eco-Friendly Practices</h2>
            <p className="text-primary">Discover the story behind our sustainable production process on our dedicated "Production" page. At Idori, <br />we prioritize eco-conscious practices to bring our books and stuffed animals to life. Dive into the details of <br />our environmentally friendly materials, responsible sourcing, and ethical manufacturing methods. Every<br /> step of our production journey is guided by a commitment to sustainability. As part of our mission, we also <br />take pride in our tree-planting initiative. For each book purchased, a tree is planted, contributing to <br />reforestation efforts and combatting deforestation.</p>
        </>}  />
        <SingleBlock mt="10" mb="0" content={<>
            <Card className="bg-dark row no-gutters d-flex">
                <Card.Img className="opacity-25" src="//idori.com/cdn/shop/files/Screen_Shot_2023-08-03_at_12.46.27_AM.png?v=1691037996&width=375 375w,//idori.com/cdn/shop/files/Screen_Shot_2023-08-03_at_12.46.27_AM.png?v=1691037996&width=550 550w,//idori.com/cdn/shop/files/Screen_Shot_2023-08-03_at_12.46.27_AM.png?v=1691037996&width=750 750w,//idori.com/cdn/shop/files/Screen_Shot_2023-08-03_at_12.46.27_AM.png?v=1691037996&width=1100 1100w,//idori.com/cdn/shop/files/Screen_Shot_2023-08-03_at_12.46.27_AM.png?v=1691037996 1168w" alt="Bears Image" />
                <Card.ImgOverlay className="overflow-auto d-flex text-center align-items-center m-auto">
                    <Row className="m-auto">
                        <Col lg="12" sm="12">
                            <Card.Title className="text-primary display-6">We partner with bears for <br />humanity so that each one of our <br />plush toys are safe, sustainable, <br />and hand-crafted with love</Card.Title>
                            <Card.Text className="text-primary">
                            Bears for Humanity was born out of a mother’s desire to keep her children safe. When the <br />co-founder Renju found that no organic plush toys existed, she was shocked. Together <br />with her husband, Vijay, she started out on a mission to bring the world beautiful,<br /> organic plush toys that are safe for children.
                            </Card.Text>
                            <Button target="_blank" href="https://www.bearsforhumanity.com/pages/sustainability" variant="primary text-center text-light" style={{fontFamily: "Rammetto One"}}>Read More</Button>
                        </Col>
                    </Row>
                </Card.ImgOverlay>
            </Card>
        </>}  />
        <DoubleBlock mt="10" mb="0" left={<>
            <h2 className="text-primary text-start mx-5">Sustainable <br />sourcing of organic <br />cotton</h2>
            <p className="text-primary text-start mx-5">Bears for Humanity sources cotton from small co-ops, whose farms practice crop rotation, use natural fertilizer and healthy water to ensure the health of the soil.</p>
            <p className="text-primary text-start mx-5">All products pass the Global Organic Textile Standard Chemical Composition test not just by having ‘legally acceptable’ levels of toxins, but by being 100% free of them.</p>
        </>} right={<>
            <Image src="https://idori.com/cdn/shop/files/2_-2.png?v=1690681801&width=750" fluid />
        </>} />
        <DoubleBlock mt="10" mb="0" left={<>
            <Image src="https://idori.com/cdn/shop/files/5.png?v=1690662236&width=750" fluid />
        </>} right={<>
            <h2 className="text-primary text-start mx-5">Handcrafted by<br /> small artisan CO-<br />OPS</h2>
            <p className="text-primary text-start mx-5">The cotton passes hands for each one of these processes.</p>
            <p className="text-primary text-start mx-5">They work with small, artisanal co-ops for each step of processing, from washed to dyed.</p>
            <p className="text-primary text-start mx-5">Each co-op must adhere to strict safety requirements so that finished products will contain no trace of harsh chemicals, kids can touch and play with them safely.</p>
        </>} />
        <DoubleBlock mt="10" mb="0" left={<>
            <h2 className="text-primary text-start mx-5">Water soluble ECO-<br/>DYES</h2>
            <p className="text-primary text-start mx-5">Their products are dyed with 100% non-toxic water-soluble eco-dyes, which do not harm the environment.</p>
            <p className="text-primary text-start mx-5">As they are free of harsh chemicals, they are safe for even the most sensitive child.</p>
        </>} right={<>
            <Image src="https://idori.com/cdn/shop/files/3_-2.png?v=1690672424&width=750" fluid />
        </>} />
        <DoubleBlock mt="10" mb="0" left={<>
            <Image src="https://idori.com/cdn/shop/files/4_-2.png?v=1690673362&width=750" fluid />
        </>} right={<>
            <h2 className="text-primary text-start mx-5">Eco-friendly packaging</h2>
            <p className="text-primary text-start mx-5">Their bear’s hang tags are made of recycled paper and printed with water-soluble eco-ink.</p>
            <p className="text-primary text-start mx-5">They are packaged in biodegradable bags that protect the bears and the environment.</p>
        </>} />
    </>);
}

export default Production;