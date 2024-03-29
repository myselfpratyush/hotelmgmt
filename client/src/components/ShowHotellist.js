import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HotelCard from './HotelCard';


function ShowHotellist() {

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/hotels`)
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowHotellist ->');
        console.log(err)
      });
  }, []);

  const hotelList =
    hotels.length === 0
      ? 'there is no book record!'
      : hotels.map((hotel, k) => <HotelCard hotel={hotel} key={k} />);

  return (
    <div className='ShowHotellist'>
      

      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Room Bookings</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-hotel'
              className='btn btn-outline-warning float-right'
            >

              + Add New Hotel Rooms
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{hotelList}</div>
      </div>
    </div>
  );
}


export default ShowHotellist