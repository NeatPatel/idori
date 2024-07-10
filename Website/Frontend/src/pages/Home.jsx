import { Button, Card } from 'react-bootstrap';
import main_img from '../assets/main_img.png';
import styles from './home.module.scss';

function Home() {
    return (<>
        <img className={styles.mainImg} src={main_img} width="100%" height="auto" alt="main image" />
        <Card className={styles.imageCard + " text-primary bg-info"}>
            <h2>Adopt an Idorian Today!</h2>
            <p>These eco-friendly, adorable, huggable friends are on a mission to save 
                the planet! Purchase one today and engage your kids with a new form of environmental 
                learning!</p>
            <Button className="text-white">
                Shop Now!
            </Button>
        </Card>
    </>);
}

export default Home;