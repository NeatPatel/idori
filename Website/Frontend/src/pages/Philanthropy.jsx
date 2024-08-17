import styles from './philanthropy.module.scss';
import SingleBlock from '../components/SingleBlock';
import blockPhoto from '../assets/test.svg'
import DoubleBlock from '../components/DoubleBlock';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const philanthropyTitle = "Empowering Change through Philanthropy | Idori";

function Philanthropy() {
    document.title = philanthropyTitle;

    return (<>
        <SingleBlock mt = "5" content = {<>
            <h1 className='text-primary' style={{'fontSize' : '30px'}}> EMPOWERING CHANGE THROUGH <br/> PHILANTHROPY</h1>
            <p className='text-primary'> At Idori, we believe in the power of giving back. 
                Discover the impactful organizations and initiatives we <br /> donate to, each focused on creating a positive environmental and educational impact.</p>
            </>}></SingleBlock>

        <SingleBlock content ={<>
            <img style={{"width" : "1000px"}} src={blockPhoto} alt="" />
            </>}></SingleBlock>

        <DoubleBlock mb = "10" left = {<>
            <img style = {{"width" : "500px"}} src="https://idori.com/cdn/shop/files/images.jpg?v=1688601221" alt="" />
            </>} right = {<>
                <h2 className='text-primary'>One Tree Planted</h2>
                <p className='text-primary'>One Tree Planted is a remarkable organization that focuses on
                    global reforestation, working tirelessly to combat deforestation and restore vital ecosystems by planting trees in areas that need it most, 
                    creating a lasting positive impact on our planet.</p>
                <Button target="_blank" href="https://onetreeplanted.org/" className="text-light" variant="primary">Visit Website</Button>
            </>}></DoubleBlock>

        <DoubleBlock mb = "10" left = {<>
        <img style = {{"width" : "500px"}} src="https://idori.com/cdn/shop/files/Capture-d_ecran-2022-04-20-a-09.56.50.png?v=1688601329" alt="" />
        </>} right = {<>
        <div className='text-primary'>
            <h2 >Trees for the Future</h2>
            <p>Trees for the Future is an impactful organization 
                dedicated to restoring degraded lands and improving livelihoods through the planting of trees, 
                fostering sustainable agroforestry systems, and empowering communities around the world to create a greener and more resilient future.</p>
            <Button target="_blank" href="https://trees.org/" className="text-light" variant="primary">Visit Website</Button>
        </div>
            
        </>} />
    </>);
}

export default Philanthropy;