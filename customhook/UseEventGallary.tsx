import React from 'react'
import { useState, useEffect } from 'react'
import { auth,  onAuthStateChanged, addDoc, collection, db, getDocs } from '../config/firebase'

import { eventType } from '../types/eventsType'

import { updateDoc, doc } from 'firebase/firestore'



const useSignup = () => {



 


  const [Galllary, setGallary] = useState<eventType[]>([])
  const [button, setbutton] = useState(false)
  const [searchText, setsearchText] = useState("")
  const [selectedItemId, setselectedItemId] = useState("")



  useEffect(() => {


    const get_todo = async () => {



    

      try {

        const querySnapshot = await getDocs(collection(db, 'events'));
        let todolist: eventType[] = []
        querySnapshot.forEach((doc) => {
          todolist.push({

            description: doc.data().description,
            id: doc.id,
            createdAt: doc.data().createdAt,
            title: doc.data().title,
            date: doc.data().date,
            time: doc.data().time,
            location: doc.data().location,
            userID: doc.data().userID,
            attendees: doc.data().attendees,
            creator: doc.data().creator,


          })
          console.log(doc.id, " => ", doc.data());
        });

        setGallary(todolist)

      }

      catch (error) {



      }

    }


    get_todo()

  }, []);

  
  const attendEventHandler = async (item: eventType, index:any) => {


    onAuthStateChanged(auth, async (user) => {
      if (user) {

 

    try {
      setbutton(true)
      const user = auth.currentUser;
      if (user) {
        const attendeeName = user.displayName;
        const attendeeId = user.uid;
        
        // check if the user's ID is already in the attendees list
        const alreadyAttending = item.attendees.some((a) => a.id === attendeeId);
        if (alreadyAttending) {
          alert("You're already attending this event!");

          return;
        }

       
  
        const updatedAttendees = [...item.attendees, {name: attendeeName, id: attendeeId}];
        await updateDoc(doc(db, "events", item.id), {attendees: updatedAttendees});
        
        const updatedTodos = Galllary.map((todo: eventType) => {
          if (item.id === todo.id) {
            return {
              ...todo,
              attendees: updatedAttendees
            };
          } else {
            return todo;
          }
        });
        setGallary(updatedTodos);
      }
    } catch (error) {
      alert(error);
    }

    const uid = user.uid;
    // ...
  } else {
    alert('please sign in')
  } 

});
  };
  
 




  return {

   
    Galllary, setGallary,
    button, setbutton,
    searchText, setsearchText,
    selectedItemId, setselectedItemId,
    attendEventHandler
    
    
    
    
      }
       



  
 
  }

    
  
    



export default useSignup
