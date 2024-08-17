import styles from './partners.module.scss';
import SingleBlock from '../components/SingleBlock.jsx';
import { Card, Button } from 'react-bootstrap';

const partnersTitle = "Collaborating with Leading Sustainable Educational Leaders | Idori Partners";

function Partners() {
    document.title = partnersTitle

    return (<>
        <SingleBlock mt="10" mb="0" content={<>
            <h1 className="text-primary">Our Educational Partners</h1>
            <p className="text-primary">Meet the educational partners that are helping bring our resources to life. With the help of parents, <br />educators, and other early childhood experts, we hope to design content and resources that lead to real <br />long-term behavioral changes that positively impact our planet.</p>
        </>} />
        <SingleBlock mt="10" mb="10" content={<>
            <Card className="text-primary row no-gutters d-flex border-0">
                <Card.Img src="//idori.com/cdn/shop/files/Screen_Shot_2023-07-05_at_8.37.34_PM.png?v=1688603858&width=375 375w,//idori.com/cdn/shop/files/Screen_Shot_2023-07-05_at_8.37.34_PM.png?v=1688603858&width=550 550w,//idori.com/cdn/shop/files/Screen_Shot_2023-07-05_at_8.37.34_PM.png?v=1688603858&width=750 750w,//idori.com/cdn/shop/files/Screen_Shot_2023-07-05_at_8.37.34_PM.png?v=1688603858 1056w" alt="Card image" />
                <Card.ImgOverlay className="align-items-end mt-auto mb-5 d-flex">
                    <div className="bg-white w-50 p-3 mx-auto">
                        <Card.Title>Boston Outdoor Preschool Network</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button target="_blank" href="https://www.bopn.org/" className="text-light" variant="primary">Visit Website</Button>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </>} />
    </>);
}

export default Partners;