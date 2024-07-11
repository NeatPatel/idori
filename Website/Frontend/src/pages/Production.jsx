import styles from './production.module.scss';

const productionTitle = "Learn About Our Eco-Friendly Process | Idori";

function Production() {
    document.title = productionTitle;

    return (<>
        <h1>Production</h1>
    </>);
}

export default Production;