import React, { useState } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ListTrips from "./pages/ListTrips/ListTrips";
import AdminHome from "./pages/AdminHome/AdminHome";
import CreateTrips from "./pages/CreateTrips/CreateTrips";
import TripDetails from "./pages/TripDetails/TripDetails";
import FormTrips from "./pages/FormTrips/FormTrips";
import { Container } from "./styled";

export default function App() {
  const [page, setPage] = useState("listTrips");
  return (
    <Container>
      {page === "home" && <Home setPage={setPage} />}
      {page === "login" && <Login setPage={setPage} />}
      {page === "listTrips" && <ListTrips setPage={setPage} />}
      {page === "adminHome" && <AdminHome setPage={setPage} />}
      {page === "createTrips" && <CreateTrips setPage={setPage} />}
      {page === "tripDetails" && <TripDetails setPage={setPage} />}
      {page === "formTrips" && <FormTrips setPage={setPage} />}
    </Container>
  );
}
