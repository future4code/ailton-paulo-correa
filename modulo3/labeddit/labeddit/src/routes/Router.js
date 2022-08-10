import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Feed from "../pages/Feed/Feed";
import Post from "../pages/Post/Post";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import GlobalState from "../components/Global/GlobalState";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="feed"
          element={
            <GlobalState>
              <Feed />
            </GlobalState>
          }
        />
        <Route
          path="post/:id"
          element={
            <GlobalState>
              <Post />
            </GlobalState>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
