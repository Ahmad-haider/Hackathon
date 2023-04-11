import React,{useState} from 'react'
import { useRouter } from 'next/router';
import {auth, signInWithEmailAndPassword }from '../config/firebase'

const useSignup = () => {



  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');
 



const pass  = (e:any) => {


setpassword(e.target.value)


}

const mail  = (e:any) => {


  setemail(e.target.value)
  
  
  }




  const login = () => {
       
       
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
    })
  
  }

 

    
  return {
login, 
email,
password,
name,
setname,
pass,
mail,
setemail,
setpassword

 

  }
    
}


export default useSignup
