import { Row, Col } from 'react-bootstrap';
import { useRef, useState, useEffect } from 'react';
import styles from './titleblock.module.scss';

/*
Component props:
props.left - The left side of the html
props.right - The right side of the html
props.txtColor - Text color of the html
props.animation - Whether to animate or not
*/

function TitleBlock(props) {
    // hooks for IntersectionObserver API
    const leftBlockRef = useRef();
    const rightBlockRef = useRef();
    const [ leftBlockIsVisible, setLeftBlockIsVisible ] = useState();
    const [ rightBlockIsVisible, setRightBlockIsVisible ] = useState();

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
            if(entry.target == leftBlockRef.current && props.animation) {
                setLeftBlockIsVisible(entry.isIntersecting);
            } else if(props.animation) {
                setRightBlockIsVisible(entry.isIntersecting);
            }
        });
    });

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);

        observer.observe(leftBlockRef.current);
        observer.observe(rightBlockRef.current);
    }, []);

    return (<>
        <Row id={props.id} className={(props.animation ? styles.titleBlock : styles.topTitleBlock) + classesBlock}>
            <Col ref={leftBlockRef} className={`${leftBlockIsVisible ? styles.leftBlock : ""} my-auto ${props.animation ? styles.innerBlock : ""}`}>
                {props.left}
            </Col>
            <Col ref={rightBlockRef} className={`${rightBlockIsVisible ? styles.rightBlock : ""} my-auto ${props.animation ? styles.innerBlock : ""}`}>
                {props.right}
            </Col>
        </Row>
    </>);
}

export default TitleBlock;