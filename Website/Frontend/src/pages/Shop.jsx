import styles from './shop.module.scss';
import SingleBlock from '../components/SingleBlock.jsx';
import TripleBlock from '../components/TripleBlock.jsx';

const shopTitle = "Enter the Whimsical World of Idori | Meet the Idorians";

function Shop() {
    document.title = shopTitle;

    return (<>
        <SingleBlock mt="10" mb="0" content={<>
            <h1 className="text-start text-primary">Meet the Idorians!</h1>
            <p className="text-start text-primary">Welcome to the captivating world of Idori, where imagination meets education in the most delightful way. Get ready to embark on an enchanting journey <br />as you explore the fascinating stories, whimsical illustrations, and engaging adventures of these lovable Idorians. Join us in discovering how these <br />extraordinary characters bring sustainability to life.</p>
        </>} />
        <TripleBlock mt="10" mb="0" left={<></>} middle={<><h1>Idorians Here</h1></>} right={<></>} />
        <SingleBlock mt="10" mb="0" content={<>
            <h1 className="text-start text-primary">Idori Merchandise</h1>
            <p className="text-start text-primary">Discover sustainable, eco-friendly merchandise at Idori! From organic bucket hats to reuseable tote bags, our products are designed to complement your <br />sustainable lifestyle. Shop now to make a difference!</p>
        </>} />
        <TripleBlock mt="10" mb="0" left={<></>} middle={<><h1>Merchandise Here</h1></>} right={<></>} />
    </>);
}

export default Shop;