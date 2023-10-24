import NavbarComponent from "../Components/Navbar/navbar";
import Footer from "../Components/HomeComponents/footer";
import BookSlotComp from "../Components/BookSlot/bookSlotComp";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookSlot = () => {
  const [activeStation, setActiveStation] = useState({});

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${BASE_URL}/ev/station-id/${id}`).then((res) => {
      console.log("response details", res.data.data);
      setActiveStation(res.data.data);
    });
  }, []);

  return (
    <>
      <NavbarComponent />
      <BookSlotComp activeStation={activeStation} />
      <Footer />
    </>
  );
};
export default BookSlot;
