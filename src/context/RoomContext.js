import React, {createContext, useEffect} from 'react';

// data 
import {roomData} from "../data";

// create context 
export const RoomContext = createContext();

const RoomProvider = ({children}) => {

  const [rooms, setRooms] = React.useState(roomData);
  const [adults, setAdults] = React.useState('1 Adult');
  const [kids, setKids] = React.useState('0 Kids');
  const [total, setTotal] = React.useState(0);
  const [loading, setLoading] = React.useState(false);



  React.useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]))
  })

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    // filter rooms based on total 
    const newRooms = roomData.filter(room => {
      return total <= room.maxPerson
    })

    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false);
    }, 3000)
  }

  return (
    <RoomContext.Provider value={{rooms, adults, setAdults, kids, setKids, handleClick, loading}}>
      {children}
    </RoomContext.Provider>
  )
};

export default RoomProvider;
