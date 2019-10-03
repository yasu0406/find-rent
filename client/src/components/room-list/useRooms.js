import { useState, useEffect } from 'react';
import axios from 'axios';

const useRooms = (area) => {
  const [rooms, setRooms] = useState([]);

  const fetchRoom = async() => {
      const response = await axios.get(`http://localhost:5000/api/rooms/${area}`)
      setRooms(response.data);
  }

  useEffect(() => {
      fetchRoom();
  })
  return rooms;
};

export default useRooms;