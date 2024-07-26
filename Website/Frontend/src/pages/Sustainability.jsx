import styles from './sustainability.module.scss';
import SingleBlock from '../components/SingleBlock.jsx'
import DoubleBlock from '../components/DoubleBlock.jsx'
import TripleBlock from '../components/TripleBlock.jsx'
const sustainabilityTitle = "Engage in Fun and Educational Sustainability Activities for Kids | Idori";

function Sustainability() {
    document.title = sustainabilityTitle;

    return (<>
        <SingleBlock mt="50" mb="10" content={<>
            <h1 className="text-primary">Engage in Fun and Educational Sustainability Activities for Kids</h1>
            <p style = {{"color" : "#9067CC"}}>Our curated list of engaging activities offers practical 
                and interactive ways to teach kids about sustainability while fostering a love for the environment.</p>
        </>} />

        <DoubleBlock mt="10" mb="0" left={<>
            <h1 className="text-primary">Left Side</h1>
        </>} right={<>
            <h1 className="text-primary">Right Side</h1>
        </>} />

        <TripleBlock mt="25" mb="5" left={<>
            <h1 className="text-primary">Left Side</h1>
        </>} middle={<>
            <h1 className="text-primary">Middle</h1>
        </>} right={<>
            <h1 className="text-primary">Right Side</h1>
        </>} />
    </>);
}

export default Sustainability;