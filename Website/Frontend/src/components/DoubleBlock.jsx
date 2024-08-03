import { Container, Row, Col } from 'react-bootstrap';
import styles from './doubleblock.module.scss';

/*
Here are the properties:

props.left - HTML content on the left side
props.right - HTML content on the right side
props.mt - Margin from the top (in svh)
props.mb - Margin from the bottom
*/

function DoubleBlock(props) {
    return (<>
        <Container className="d-flex" fluid>
            <Row style={{marginTop: `${props.mt}svh`, marginBottom: `${props.mb}svh`}} className="w-100 text-center mx-auto">
                <Col className="m-auto">{props.left}</Col>
                <Col className="m-auto">{props.right}</Col>
            </Row>
        </Container>
    </>);
}

export default DoubleBlock;