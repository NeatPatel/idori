import styles from './singleblock.module.scss';
import { Row, Col, Container } from 'react-bootstrap';

/*
Here are the props (properties) that you can apply:

props.content - The centered HTML content that you want to display
props.mt - Margin from the top (in svh; a unit of measurement)
props.mb - Margin from the bottom (in svh; a unit of measurement)
*/

function SingleBlock(props) {
    return (<>
        <Container className="d-flex" fluid>
            <Row style={{marginTop: `${props.mt}svh`, marginBottom: `${props.mb}svh`}} className="w-100 text-center mx-auto">
                <Col className="m-auto">{props.content}</Col>
            </Row>
        </Container>
    </>);
}

export default SingleBlock;