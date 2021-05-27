import React, { useEffect } from "react";
import Home from "./components/Home/Home";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";


import "./App.css";


import HelpDetails from "./components/HelpDetails/HelpDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  dispatchLogin,
  fetchUser,
  dispatchGetUser,
} from "./actions/authActions";

import axios from "axios";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";

import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import HelpPage from "./components/HelpPage/HelpPage"
import ActivationEmail from "./components/Activation/ActivationEmail";
import Profile from "./components/Profile/Profile";
import EditUser from "./components/EditUser/EditUser";


import NotFound from "./utils/notFound/notFound";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";


import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Services from "./components/pages/Services";

const App = () => {

    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const auth = useSelector((state) => state.auth);

    const { isLogged, isAdmin } = auth;

    useEffect(() => {
        const firstLogin = localStorage.getItem("firstLogin");
        if (firstLogin) {
            const getToken = async () => {
                const res = await axios.post("/api/user/refresh_token", null);
                // console.log(res)
                dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
            };
            getToken();
        }
    }, [auth.isLogged, dispatch]);

    useEffect(() => {
        if (token) {
            const getUser = () => {
                dispatch(dispatchLogin());

                return fetchUser(token).then((res) => {
                    dispatch(dispatchGetUser(res));
                });
            };

            getUser();
        }
    }, [token, dispatch]);

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/"     exact component={Home} />
                <Route path="/auth" exact component={Auth} />
                {/* <Route path="/" exact component={() => <Redirect to="/helps" />} /> */}
                <Route path="/helps" exact component={HelpPage} />
                <Route path="/helps/:id"  component={HelpDetails} />
                <Route path="/Contact" exact component={Contact} />
                <Route path="/contactPage/:id" exact component={ContactForm} />
                
                <Route path="/Services" exact component={Services} />
                <Route path="/About" exact component={About} />
              
                
                <Route
                    path="/forgot_password"
                    component={isLogged ? NotFound : ForgotPassword}
                    exact
                />
                <Route
                    path="/reset/:token"
                    component={isLogged ? NotFound : ResetPassword}
                    exact
                />

                <Route
                    path="/profile"
                    component={isLogged ? Profile : NotFound}
                    exact
                />
                <Route
                    path="/edit_user/:id"
                    component={isAdmin ? EditUser : NotFound}
                    exact
                />

                <Route
                    path="/activate/:activation_token"
                    component={ActivationEmail}
                    exact
                />
            </Switch>
            <Footer/>
        </BrowserRouter>
   
    );

};

export default App;
