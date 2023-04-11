import React,{useState} from 'react'
import { useRouter } from 'next/router';
import {auth, createUserWithEmailAndPassword }from '../config/firebase'
import { updateProfile } from 'firebase/auth';

const useSignup = () => {



  const [email, setemail] = useState('');
  const [router, setrouter] = useState(useRouter);
  const [displayName, setdisplayName] = useState('');
  const [password, setpassword] = useState('');



const pass  = (e:any) => {


setpassword(e.target.value)


}

const mail  = (e:any) => {


  setemail(e.target.value)
  
  
  }






const signuphandler = async (e:any) => {

try{

  e.preventDefault();


  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update the user's profile with the display name
      const user = userCredential.user
      updateProfile(user,{
        displayName: displayName,
      });
   router.push("/")
}
catch(e){
}




  
 
  }

    
  return {

signuphandler,
email,
password,
pass,
mail,
setemail,
setpassword,
displayName,
setdisplayName,

 

  }
    
}


export default useSignup
