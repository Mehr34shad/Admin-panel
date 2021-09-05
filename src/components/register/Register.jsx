import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import { withRouter } from 'react-router-dom'
import { loginUser,registerUser } from 'services/userService';
import { errorMessage,successMessage } from 'utils/message';


const Register = ({history}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const resetStates = () => {
        setUsername("");
        setEmail("");
        setPassword("");
    }

    const handleLogin = async event => {
        event.preventDefault();
        const user = {email,password};
        try {
            const { status, data } = await loginUser(user);
            if (status === 200) {
                successMessage('You Are Logged in')
                localStorage.setItem("token", data.token);
                history.replace("/admin/UserList")
                resetStates();
            }
        } catch (ex) {
            console.log(ex)
            errorMessage('User not found!')
        }

    }

    const handleSignup = async event => {
        event.preventDefault();
        const user = {
            username,
            email,
            password
        }
        try {
            const { status, data } = await registerUser(user);
            if (status === 200) {
                successMessage('Registration completed successfully')
                localStorage.setItem("token", data.token);
                resetStates();
            }
        } catch (ex) {
            console.log(ex)
            errorMessage('Registration is not possible!')

        };
    }

    const animationForm = useRef(null);

    const signUp = () => {
        $(findDOMNode(animationForm.current)).addClass('sign-up-mode');
    }
    const signIn = () => {
        $(findDOMNode(animationForm.current)).removeClass('sign-up-mode');
    }

    return (
        <div className="wrapper" ref={animationForm} >
            <div className="forms-container">
                <div className="signin-signup">
                    <form
                        onSubmit={e => handleLogin(e)}
                        className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input
                                type="email"
                                placeholder="Email"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <input
                            // onClick={handleLogin}
                            type="submit" value="Login" class="bot solid" />
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <Link to="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link to="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link to="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </Link>
                            <Link to="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                        </div>
                    </form>
                    <form
                        onSubmit={e => handleSignup(e)}
                        className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input
                                type="text"
                                placeholder="Username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input
                                type="email"
                                placeholder="Email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <input
                            // onClick={handleSignup}
                            type="submit" className="bot" value="Sign up" />
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <Link to="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link to="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link to="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </Link>
                            <Link to="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3 className="text-white">New here ?</h3>
                        <p>
                            If you are not registered, you can apply from this section!
                        </p>
                        <button
                            class="bot trans"
                            id="sign-up-btn"
                            onClick={signUp}
                        >
                            Sign up
                        </button>
                    </div>
                    <img
                        className="image"
                        alt="..."
                        src={require('../../assets/img/fm/log.svg').default}
                    />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3 className="text-white">One of us ?</h3>
                        <p>
                            Create your Admin Member profile and get first access to the Admin-Panel, inspiration and community.
                        </p>
                        <button
                            class="bot trans"
                            id="sign-in-btn"
                            onClick={signIn}
                        >
                            Sign in
                        </button>
                    </div>
                    <img
                        className="image"
                        alt="..."
                        src={require('../../assets/img/fm/register.svg').default}
                    />
                </div>
            </div>
        </div>
    );
};

export default withRouter(Register);
