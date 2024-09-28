// import React from 'react';
// import LoginForm from './LoginForm';
// import SignUpForm from './SignUpForm';

// const AuthContainer = (props) => {
//     return (
//         <div className="row">
//             <div className="col-md-6 offset-md-3">
//                 <div className="ci sw_widget sw_wrap">
//                     <ul className="nav nav-tabs d-none sw-sign-form-tabs" role="tablist">
//                         <li className="nav-item">
//                             <a className="nav-link log-in" href="#log-in-form" role="tab" data-toggle="tab">
//                                 {props.langCheck('Log in')}
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link sign-up" href="#sign-up-form" role="tab" data-toggle="tab">
//                                 {props.langCheck('Sign Up')}
//                             </a>
//                         </li>
//                     </ul>
//                     <div className="forms-_row_area">
//                         <div className="tab-content">
//                             <LoginForm {...props} />
//                             <SignUpForm {...props} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AuthContainer;

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import LoginForm from './LoginForm';
import SignupForm from './SignUpForm';
import dummyUserData from './dummyUserData.json';
import { useNavigate } from 'react-router-dom';
import { createDummyJWT ,isTokenExpired} from './hello';

import "./AuthContainer.css";
import "./common.css";
import "./commonsecond.css";

const AuthContainer = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [activeTab, setActiveTab] = useState('log-in-form'); // Default is login form
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        // Check if a user session exists on component mount
        // const savedUser = Cookies.get('currentUser');
        // if (savedUser) {
        //     setCurrentUser(JSON.parse(savedUser));
        // }
        const savedtoken = localStorage.getItem('jwtToken');
        if (savedtoken  && !isTokenExpired(savedtoken)) {
            const payload = JSON.parse(atob(savedtoken.split('.')[1]));
            setCurrentUser({ username: payload.username, email: payload.email });
            setCurrentUser(payload);
            navigate('/dummy'); // Navigate if already logged in
        }
        else{
            localStorage.removeItem('jwtToken');
        }
    }, [navigate]);

    const handleLogin = (username, password) => {
        const user = dummyUserData.users.find(
            (user) => user.username === username && user.password === password
        );
        if (user) {
            const token = createDummyJWT(user);
            setCurrentUser(user);
            localStorage.setItem('jwtToken', token);
            setMessage("Login successful");
            console.log(username, password);
            alert("Login successful");
            navigate('/dummy');
            
        } else {
            setMessage("Invalid credentials");
            console.log(username, password);
            alert("Invalid credentials");
        }
    };

    const handleSignup = (newUser) => {
        dummyUserData.users.push(newUser);
        setMessage("Signup successful");
        console.log(newUser);
        alert("Signup successful");
    };
    const handleLogout = () => {
        setCurrentUser(null);
        localStorage.removeItem('jwtToken'); // Remove session
        setMessage("Logged out successfully");
    };
    return (
        <div className="wrapper ConTentFlex Body_back_Img">
            <div className="container">
                <div className="selio_sw_win_wrapper LoginRegister_page">
                    <div className="Topar_logo_head text-center">
                        <a href="/homepage" className="navbar-brand">
                            <img width="250" src="/footer-logo.png" alt="TownManor" />
                        </a>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="ci sw_widget sw_wrap">
                                <ul className="nav nav-tabs sw-sign-form-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link log-in ${activeTab === 'log-in-form' ? 'active' : ''}`}
                                            href="#log-in-form"
                                            role="tab"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveTab('log-in-form');
                                            }}
                                        >
                                            Log in
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link sign-up ${activeTab === 'sign-up-form' ? 'active' : ''}`}
                                            href="#sign-up-form"
                                            role="tab"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveTab('sign-up-form');
                                            }}
                                        >
                                            Sign Up
                                        </a>
                                    </li>
                                    
                                </ul>
                                <div className="forms-_row_area">
                                    <div className="tab-content">
                                        {activeTab === 'log-in-form' && (
                                            <div className="tab-pane fade active show" id="log-in-form">
                                                <LoginForm onLogin={handleLogin} />
                                            </div>
                                        )}
                                        {activeTab === 'sign-up-form' && (
                                            <div className="tab-pane fade active show" id="sign-up-form">
                                                <SignupForm onSignup={handleSignup} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthContainer;
