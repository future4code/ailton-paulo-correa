import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Feed from "../pages/Feed/Feed";
import Post from "../pages/Post/Post";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="feed" element={<Feed />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
