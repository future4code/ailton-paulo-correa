import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AdminHome from "../pages/AdminHome/AdminHome";
import CreateTrips from "../pages/CreateTrips/CreateTrips";
import TripDetails from "../pages/TripDetails/TripDetails";
import ListTrips from "../pages/ListTrips/ListTrips";
import FormTrips from "../pages/FormTrips/FormTrips";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="trips" element={<ListTrips />} />
        <Route path="trips/form_trips" element={<FormTrips />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<AdminHome />} />
        <Route path="admin/create_trips" element={<CreateTrips />} />
        <Route path="admin/trip_details" element={<TripDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
