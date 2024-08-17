import styles from './play.module.scss';
import SingleBlock from '../components/SingleBlock.jsx';
import TripleBlock from '../components/TripleBlock.jsx';
import { Image, Card, Button } from 'react-bootstrap';

const playTitle = "Embark on an Educational Sustainable Adventure with Our Virtual World | Idori";

function Play() {
    document.title = playTitle;

    return (<>
        <SingleBlock mt="10" mb="0" content={<>
            <Image fluid width="100%" src="//idori.com/cdn/shop/files/Screen_Shot_2023-08-03_at_12.51.59_AM.png?v=1691038328&width=375 375w,//idori.com/cdn/shop/files/Screen_Shot_2023-08-03_at_12.51.59_AM.png?v=1691038328&width=550 550w,//idori.com/cdn/shop/files/Screen_Shot_2023-08-03_at_12.51.59_AM.png?v=1691038328&width=750 750w,//idori.com/cdn/shop/files/Screen_Shot_2023-08-03_at_12.51.59_AM.png?v=1691038328&width=1100 1100w,//idori.com/cdn/shop/files/Screen_Shot_2023-08-03_at_12.51.59_AM.png?v=1691038328&width=1500 1500w,//idori.com/cdn/shop/files/Screen_Shot_2023-08-03_at_12.51.59_AM.png?v=1691038328&width=1780 1780w,//idori.com/cdn/shop/files/Screen_Shot_2023-08-03_at_12.51.59_AM.png?v=1691038328 1802w" />
            <h1 className="mt-5 text-primary text-start">Play Now! (Virtual World Coming Soon!)</h1>
        </>} />
        <TripleBlock mt="0" mb="10" left={<>
            <Card className="text-primary">
                <Card.Img height="300svh" variant="top" src="https://idori.com/cdn/shop/files/Screen_Shot_2024-07-02_at_2.11.49_PM.png?v=1719944020&width=710" />
                <Card.Body>
                    <Card.Title>Treehopping with Benjy</Card.Title>
                    <Card.Text>
                        Help Benjy save the forest by hopping on trees and collecting as many seeds as possible!
                    </Card.Text>
                    <Button target="_blank" href="https://play.unity.com/en/games/6cc0c33c-38da-4b12-84e2-f5ef289749ce/treehopping-with-benjy" className="text-light" variant="primary">Play Now!</Button>
                </Card.Body>
            </Card>
        </>} middle={<>
            <Card className="text-primary">
                <Card.Img height="300svh" variant="top" src="https://idori.com/cdn/shop/files/Screen_Shot_2023-08-03_at_1.15.35_AM.png?v=1691040962" />
                <Card.Body>
                    <Card.Title>Flo the Ocean-Dweller</Card.Title>
                    <Card.Text>
                        Help Flo in this fun underwater arcade game! Catch the bottles before they touch the ocean floor!
                    </Card.Text>
                    <Button target="_blank" href="https://scratch.mit.edu/projects/704141390/fullscreen/" className="text-light" variant="primary">Play Now!</Button>
                </Card.Body>
            </Card>
        </>} right={<>
            <Card className="text-primary">
                <Card.Img height="300svh" variant="top" src="https://idori.com/cdn/shop/files/Screen_Shot_2023-08-03_at_1.27.30_AM.png?v=1691040973&width=710" />
                <Card.Body>
                    <Card.Title>Geebo the Puffball</Card.Title>
                    <Card.Text>
                        Help Geebo keep the air clean in this arcade game. Snatch the CO2 before it enters the atmosphere!
                    </Card.Text>
                    <Button target="_blank" href="https://scratch.mit.edu/projects/708131450/fullscreen/" className="text-light" variant="primary">Play Now!</Button>
                </Card.Body>
            </Card>
        </>} />
    </>);
}

export default Play;