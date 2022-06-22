import React from "react";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <div className="Ecom-Header-container">
      <nav class="navbar navbar-expand-lg navbar-light mr-1 navbar-fixed-top ">
        <a
          class="navbar-brand mr-5 text-large"
          style={{ fontSize: "20px" }}
          href="/"
        >
          SCROnUTS <span class="sr-only">(current)</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {/* <li class="nav-item">
              <a class="nav-link mr-5" href="/">
                Home
              </a>
            </li> */}
            <li class="nav-item ">
              <a class="nav-link mr-5" href="/">
                Dry Fruits <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="/">
                Nuts
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="/">
                Seeds
              </a>
            </li>
            <li class="nav-item dropdown mr-4 ">
              <a
                class="nav-link dropdown-toggle "
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dates
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/">
                  Action
                </a>
                <a class="dropdown-item" href="/">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li>
          </ul>

          <div class="form-inline my-2 my-lg-0 mr-5 ml-5 ">
            <TextField
              class="mr-sm-5 my-5 mr-5"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div className="Ecom-shopping-cart mr-4">
              <i className="fa fa-shopping-cart mr-4"></i>
            </div>
          </div>
          {/* <div class="collapse navbar-collapse mr-5"> */}
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <button class="nav-link mr-5 Ecom-header-signup-button">
                Sign Up
              </button>
              {/*  <a class="nav-link" href="/">
                  Sign Up
                </a> */}
            </li>
            <li class="nav-item mr-5">
              <a class="nav-link " href="/">
                Log In
              </a>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
