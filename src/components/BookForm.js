import React, { useContext } from 'react';

// components 
import CheckIn from "./CheckIn"
import AdultsDropdown from "./AdultsDropdown"
import KidsDropdown from "./KidsDropdown"
import CheckOut from "./CheckOut" 
import { RoomContext } from '../context/RoomContext';

const BookForm = () => {
  const {handleClick} = useContext(RoomContext);
  return <form className='h-[300px] w-full lg:h-[70px]' id='book-form'>
    <div className='flex flex-col w-full h-full lg:flex-row'>
      <div className='flex-1 border-r'>
        <CheckIn />
      </div>
      <div className='flex-1 border-r'>
        <CheckOut />
      </div>
      <div className='flex-1 border-r'>
        <AdultsDropdown />
      </div>
      <div className='flex-1 border-r'>
        <KidsDropdown />
      </div>
      {/* btn  */}
      <button type='submit' onClick={(e) => handleClick(e)} className="btn btn-primary">Check Now</button>
    </div>
  </form>;
};

export default BookForm;
