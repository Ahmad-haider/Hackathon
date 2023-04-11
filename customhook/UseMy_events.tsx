import React from 'react'
import { useState, useEffect } from 'react'
import { eventType } from '../types/eventsType'
import {  collection, db, getDocs, deleteDoc } from '../config/firebase'
import { doc, updateDoc } from 'firebase/firestore';


export default function useMy_events() {


    const [myEvents, setmyEvents] = useState<eventType[]>([])
    const [title, settitle] = useState('')
    const [date, setdate] = useState('')
    const [time, settime] = useState('')
    const [location, setlocation] = useState('')
    const [description, setdescription] = useState('')
    const [updatefirld, setupdatefield] = useState(false)
    const [selectedItemId, setselectedItemId] = useState('')
    const [userID, setuserID] = useState('')




    const deletehandler = async (items: eventType) => {


        try {


            console.log('deleted');

            await deleteDoc(doc(db, "events", items.id));

            var ondelete =
                myEvents.filter((event: eventType) => event.id !== items.id)

            setmyEvents(ondelete)





        }




        catch (e) {

            console.log(e);


        }

    }




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

                setmyEvents(todolist)

            }

            catch (error) {



            }

        }


        get_todo()

    }, []);





    const todoUpdateHandler = async (e: any, item: eventType) => {





        if (title && time && date && location && description) {



            try {
                await updateDoc(doc(db, "events", item.id), {
                    title: title,
                    date: date,
                    time: time,
                    location: location,
                    description: description
                });
                let updatedTodos = myEvents.map((todo: eventType) => {
                    console.log('====================================');
                    console.log(item.id, todo.id);
                    console.log('====================================');
                    if (item.id === todo.id) {
                        return {

                            description: todo.description,
                            createdAt: new Date(),
                            id: todo.id,
                            title: todo.title,
                            time: todo.time,
                            date: todo.date,
                            location: todo.location,
                            userID,
                            creator:todo.creator,
                            attendees: todo.attendees,
                            

                        }
                    }
                    else {
                        return todo
                    }



                })

                console.log('====================================');
                console.log("updatedTodos", updatedTodos);
                console.log('====================================');

                setmyEvents(updatedTodos)
            } catch (error) {
                alert(error)
            }
        }

    }


    const fieldhandler = (item: eventType) => {


        setupdatefield(true)
        setselectedItemId(item.id)

        item.date = ''
        item.description = ''
        item.title = ''
        item.time = ''
        item.location = ''




    }




    return {

        myEvents, setmyEvents,
        title, settitle,
        date, setdate,
        time, settime,
        location, setlocation,
        description, setdescription,
        updatefirld, setupdatefield,
        selectedItemId, setselectedItemId,
        userID, setuserID,
        deletehandler,
        todoUpdateHandler,
        fieldhandler,


    }


}

