
import { attendeeType } from "./attendeesType"



export  type eventType = {
  id: string,
  title: string,
  date: string,
  time: string,
  location: string,
  description: string,
  createdAt: object,
  userID:string
  attendees: attendeeType[]
  creator:null|string




}

