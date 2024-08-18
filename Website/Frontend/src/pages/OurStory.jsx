import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';

// Images
import TitleBlock from '../components/TitleBlock.jsx'
import idoriPlanet from '../assets/planet.png';
import tractor from '../assets/tractor.png';
import fullShip from '../assets/full_ship.png';
import happyBenjy from '../assets/happy_benjy.png';
import treehoppers from '../assets/treehoppers.png';
import characters from '../assets/characters.png';
import earth from '../assets/earth.png';

import main_img from '../assets/main_img.jpg';
const homeTitle = "Idori: Building a more sustainable future for the next generation";

function OurStory (){
    document.title = homeTitle;
    return(
        <>
            <div className={styles.mainBodyDiv}>
            <TitleBlock animation={false} left={<h1>Welcome to the Planet of Idori</h1>} right={<img src={idoriPlanet} height="80%" width="80%" className="mx-auto my-auto" />} txtColor="primary" />
            <TitleBlock animation={true} left={<img src={treehoppers} height="80%" width="80%" />} right={<h2>The Idorians once lived happily together on their home planet Idori</h2>} txtColor="teal" />
            <TitleBlock animation={true} left={<h2>But they didn't know that their behaviors were bad for their planet</h2>} right={<img src={tractor} height="55%" width="55%" />} txtColor="brown" />
            <TitleBlock animation={true} left={<img src={fullShip} height="100%" width="100%" />} right={<h2>Because of this they had to leave to find a new home</h2>} txtColor="purple" />
            <TitleBlock animation={true} left={<h2>Eventually, they found a beautiful planet called Earth</h2>} right={<img src={earth} height="80%" width="80%" />} txtColor="blue" />
            <TitleBlock animation={true} left={<img src={happyBenjy} height="40%" width="40%" />} right={<h2>Now the Idorians teach the children of Earth about sustainability</h2>} txtColor="teal" />
            <TitleBlock animation={true} left={<h2>So our planet remains beautiful for many generations to come</h2>} right={<img src={characters} height="80%" width="80%" />} txtColor="white" />
            
            
        </div>
        </>
    )
}
export default OurStory