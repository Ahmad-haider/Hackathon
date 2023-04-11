import React from 'react'

import Navbar from '../components/header'
import Footer from '../components/footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useRouter } from 'next/router';
import useSignup from '../customhook/UseSignup';



export default function signin() {


const router = useRouter()


    const {mail,pass,signuphandler,email,password,displayName,
      setdisplayName,} = useSignup()



 

   return (
      <>

         <title>Sololearn</title>

      <Navbar/>


         <main className='d-flex align-items-center justify-content-center   col-12 ' style={{ marginTop: '20vh', alignItems: 'center',  }}>

            <div className=' mb-5 rounded-3 p-5 ' style={{ alignContent: 'center', background: '#F2F5F7', }}>

               <p className='fw-semibold fs-4 d-block pt-3' style={{ color: '#666666', textAlign: 'center', }}>Sign in</p>

               <div style={{}}>


                  <Form>


                  <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '39vh', }}>
                        <label  style={{ color: '#666666',  }}  >Name</label>
                        <br />
                     <input value={displayName} onChange={(e:any) => setdisplayName(e.target.value)} type="email" placeholder="" style={{width:'40vh', height:'4vh', }} className='form-control' />

                     </Form.Group>


                     <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '39vh', }}>
                        <label  style={{ color: '#666666',  }}  >Email address</label>
                        <br />
                     <input value={email} onChange={mail} type="email" placeholder="" style={{width:'40vh', height:'4vh', }} className='form-control' />

                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword" style={{ width: '39vh', }}>
                        <label   style={{ color: '#666666' }}>Password</label>
                        <br />
                        <input value={password} onChange={pass} type="password" placeholder="" style={{width:'40vh', height:'4vh',}} className='form-control' />
                      
                     </Form.Group>

                   
  

                     <Button  onClick={signuphandler}  variant="" className='  px-4  text-light rounded-1 ' style={{ backgroundColor: '#2493DF', padding: '0.5vw', fontSize: '2vh', marginTop: '3vh', textAlign: 'center', width: '40vh   ', }} type='submit'>Sign in</Button>
                  </Form>

                  <p className=' fs-10 d-block pt-3 text-secondary' style={{  }}>Already have an account ?<a onClick={() => router.push('./login')}  className='btn text-primary'>Login</a></p>



               </div>

            </div>

         </main>

         {/* <Footer/>  */}

      </>
   )



}


