import styles from './sustainability.module.scss';
import SingleBlock from '../components/SingleBlock.jsx'
import DoubleBlock from '../components/DoubleBlock.jsx'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const sustainabilityTitle = "Engage in Fun and Educational Sustainability Activities for Kids | Idori";

function Sustainability() {
    document.title = sustainabilityTitle;

    return (<>
    <div>
    <SingleBlock mt="10" mb="5" content={<>
            <h1 className="text-primary">Engage in Fun and Educational Sustainability Activities for Kids</h1>
            <p style = {{"color" : "#9067CC"}}>Our curated list of engaging activities offers practical 
                and interactive ways to teach kids about sustainability while fostering a love for the environment.</p>
        </>} />

        <DoubleBlock mt="10" mb="0" left={<>
                <img style={{"width":"500px"}} src='https://idori.com/cdn/shop/files/kids_recycling.webp?v=1688579856&width=1500'></img>
        </>} right={<>
        <div className = "text-primary">
        <h1>Ready, Set, Recycle!</h1>
            <p>Get ready for a hands-on adventure in recycling!
                     The 'Ready, Set, Recycle!' activity is a fun and interactive way to teach kids about the importance of recycling and how to properly sort recyclable materials. 
                     Through this engaging activity, children will not only learn about different types of recyclable items,
                     but also develop an understanding of the positive impact recycling has on the environment!</p>
            <Button target="_blank" href="https://idori.com/blogs/sustainability-activities/ready-set-recycle" className="text-light" variant="primary"> See Activity</Button>
        </div>
            
        </>} />

        <DoubleBlock mt="10" mb="0" left={<>
                <img style={{"width":"500px"}} src='https://idori.com/cdn/shop/files/CuriousGeorge_How-to-Make-a-Plastic-Bottle-Birdfeeder_Mezz-Image-2-908x510.jpg?v=1688580994'></img>
        </>} right={<>
        <div className = "text-primary">
        <h1>DIY Upcycled Bird Feeder</h1>
            <p>This hands-on project combines the joy of crafting with a commitment to sustainability.
                By repurposing a simple plastic bottle, we'll transform it into a delightful bird 
                feeder that not only provides nourishment for our feathered friends but also helps reduce waste.</p>
            <Button target="_blank" href="https://idori.com/blogs/sustainability-activities/diy-upcycled-bird-feeder" className="text-light" variant="primary"> See Activity</Button>
        </div>
            
        </>} />
        <DoubleBlock mt="10" mb="10" left={<>
                <img style={{"width":"500px"}} src='https://idori.com/cdn/shop/files/IMG_8432.jpg?v=1688581589'></img>
        </>} right={<>
        <div className = "text-primary">
        <h1>Extreme Toilet Paper Recycling</h1>
            <p>In this exciting project, children will embark on an artistic exploration, 
                transforming their doodles on toilet paper into beautiful, recycled paper using the power of water and sunlight.
                Through this immersive experience, they will learn the value of recycling,
                reducing waste, and giving new life to everyday materials.</p>
            <Button target="_blank" href="https://idori.com/blogs/sustainability-activities/extreme-toilet-paper-recycling" className="text-light" variant="primary"> See Activity</Button>
        </div>
        
        
        </>} />
    </div>        
    </>);
}

export default Sustainability;