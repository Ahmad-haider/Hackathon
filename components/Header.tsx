import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'
import logo from '../public/logo.ico'
import { useRouter } from 'next/router'




const header = () => {



  const router = useRouter()


  return (


    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href={''} onClick={() => router.push('/')}><Image src={logo} alt=''></Image></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="" className='fs-5 mx-3 fw-semibold' onClick={() => router.push('/')}>Home</Nav.Link>
              <Nav.Link href="" className='fs-5 mx-2 fw-semibold' onClick={() => router.push('./eventCreate')} >organize event</Nav.Link>
              <Nav.Link href="" className='fs-5 mx-2 fw-semibold' onClick={() => router.push('./eventsGallary')} >Attend</Nav.Link>

              <Nav.Link href="" className='fs-5 mx-2 fw-semibold ' onClick={() => router.push('./my-events')} >My events</Nav.Link>


            </Nav>


           

            <div className='d-flex '> <Nav.Link onClick={() => router.push('./sign_in')} className='fs-5 mx-2 fw-semibold btn p-2 ' style={{ backgroundColor: '#FFA310', }} > Register Now!</Nav.Link>
                <Nav.Link href="./login" className='fs-5 mx-2 fw-semibold ' onClick={() => router.push('./login')} >Login</Nav.Link> </div>
           
    

         




          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>


  )
}

export default header