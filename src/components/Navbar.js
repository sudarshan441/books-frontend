import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Links = [
    {
        name: 'Books',
        path: '/books',
    },
    {
        name: 'MyBooks',
        path: '/mybooks',
    },

];

const Navbar = () => {

    return (
        <div style={{ backgroundColor: "#3498db",boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}>
          <div style={{ width: "90%", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1>
              <NavLink style={{ textDecoration: "none", color: "white", fontSize: "24px" }} to="/">BOOK FEED</NavLink>
            </h1>
            <div style={{ width: "40%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <input
                  style={{ width: "200px", height: "15px", padding: "10px", borderRadius: "20px", border: "none" }}
                  type="text"
                  placeholder="Search books"
                />
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                {Links.map((link, index) => (
                  <NavLink
                    key={index}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                    to={link.path}
                    activeStyle={{ color: "#f39c12" }}
                   >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
};

export default Navbar;
