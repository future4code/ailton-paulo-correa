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
        <Route path="trips/list" element={<ListTrips />} />
        <Route path="trips/application" element={<FormTrips />} />
        <Route path="login" element={<Login />} />
        <Route path="admin/trips/list" element={<AdminHome />} />
        <Route path="admin/trips/create" element={<CreateTrips />} />
        <Route path="admin/trips/:id" element={<TripDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
