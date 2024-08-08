import styles from './philanthropy.module.scss';
import SingleBlock from '../components/SingleBlock';
import oneTreeLogo from '../assets/One-Tree-Planted-2-1.png'
import blockPhoto from '../assets/test.svg'
import DoubleBlock from '../components/DoubleBlock';
const philanthropyTitle = "Empowering Change through Philanthropy | Idori";

function Philanthropy() {
    document.title = philanthropyTitle;

    return (<>
        <SingleBlock content = {<>
            <h1 className='text-primary' style={{'fontSize' : '30px'}}> EMPOWERING CHANGE THROUGH <br/> PHILANTHROPY</h1>
            <p className='text-primary'> At Idori, we believe in the power of giving back. 
                Discover the impactful organizations and initiatives we <br /> donate to, each focused on creating a positive environmental and educational impact.</p>
            </>}></SingleBlock>

        <SingleBlock content ={<>
            <img style={{"width" : "1000px"}} src={blockPhoto} alt="" />
            </>}></SingleBlock>
    </>);
}

export default Philanthropy;