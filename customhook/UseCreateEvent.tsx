import React from 'react'
import {useState} from 'react'
import { auth,  onAuthStateChanged, addDoc, collection, db } from '../config/firebase'
import {eventType} from '../types/eventsType'
import { useRouter } from 'next/router'

export default function useCreateEvent() {


   
   
    
  const [title, settitle] = useState('')
  const [date, setdate] = useState('')
  const [time, settime] = useState('')
  const [location, setlocation] = useState('')
  const [description, setdescription] = useState('')
  const [event, setevent] = useState<eventType[]>([])
  const [toast, settoast] = useState(false)

  const router = useRouter()




  const addEventhandler = async (e: any) => {


    e.preventDefault();


    onAuthStateChanged(auth, async (user) => {
      if (user) {



if(title && time && date && location && description){


        try {

          settitle('')
          setdate('')
          settime('')
          setlocation('')
          setdescription('')

         settoast(true)


         const name = auth.currentUser;

          const newDoc = {

            title,
            time,
            date,
            location,
            description,
            createdAt: new Date(),
            userID: user.uid,
            attendees: [],
            creator:user.displayName

          }


          const docRef = await addDoc(collection(db, "events"), newDoc);
          console.log("Document written with ID: ", docRef.id);

          setevent([...event, { ...newDoc, id: docRef.id }])


        }


        

        catch (e) {
          console.error("Error adding document: ", e);
        }
      }



      


      const uid = user.uid;
      // ...
    } else {
      alert('please sign in')
    }
});


  }
    

  return {

event,
title,
date,
time,
location,
description,


settitle,
setdate,
settime,
setlocation,
setdescription,
setevent,
addEventhandler





  }
   
  
}
