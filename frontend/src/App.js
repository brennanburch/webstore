
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Navigation />
    <main className='py-3'>
      <Container>
      <Outlet />
      </Container>
    </main>
    <Footer />
    </>
  )
}

export default App