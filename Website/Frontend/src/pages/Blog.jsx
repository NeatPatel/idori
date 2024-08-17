import styles from './blog.module.scss';
import SingleBlock from '../components/SingleBlock.jsx';
import DoubleBlock from '../components/DoubleBlock.jsx';
import TripleBlock from '../components/TripleBlock.jsx';

const blogTitle = "Explore Insights and Expertise on Sustainability and Education | Our Future – Idori";

function Blog() {
    document.title = blogTitle;
    
    // Here is an example implementation of each component!
    // NOTE: DO NOT FORGET TO IMPORT THE COMPONENTS AT THE TOP!
    return (<>
        <SingleBlock mt="10" mb="0" content={<>
            <h1 className="text-primary">Hello There! This is an example</h1>
        </>} />
        <SingleBlock mt="10" mb="10" content={<>
            <h1 className="text-primary">Blog API Content here</h1>
        </>} />
    </>);
}

export default Blog;