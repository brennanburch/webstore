import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>Your Webstore &copy; {currentYear}</Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer