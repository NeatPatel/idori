import { Row, Col } from 'react-bootstrap';
import { useRef, useState, useEffect } from 'react';
import styles from './centerblock.module.scss';

/*
Component props:
props.left - The left side of the html
props.right - The right side of the html
props.txtColor - Text color of the html
props.animation - Whether to animate or not
*/

function CenterBlock(props) {
    // hooks for IntersectionObserver API
    const centerBlockRef = useRef();
    const [ centerBlockIsVisible, setCenterBlockIsVisible ] = useState();

    // TitleBlock classes to be changed based on props
    const classesBlock = " mx-auto text-center " + ((props.txtColor != null) ? `text-${props.txtColor} ` : "");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    // IntersectionObserver API callback Function to run when observed element is viewable
    const callbackFunction = ((entries) => {
        entries.forEach((entry) => {
            if(entry.target == centerBlockRef.current && props.animation) {
                setCenterBlockIsVisible(entry.isIntersecting);
            } 
        });
    });

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);

        observer.observe(centerBlockRef.current);
    }, []);

    return (<>
        <Row id={props.id} className={(props.animation ? styles.centerBlock : styles.topCenterBlock) + classesBlock}>
            <Col ref={centerBlockRef} className={`${centerBlockIsVisible ? styles.centerBlock : ""} my-auto ${props.animation ? styles.innerBlock : ""}`}>
                {props.center}
            </Col>
        </Row>
    </>);
}

export default CenterBlock;