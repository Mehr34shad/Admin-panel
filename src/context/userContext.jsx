// import React, { useState} from 'react';
// import { loginUser,registerUser } from 'services/userService';
// import { errorMessage,successMessage } from 'utils/message';
// import { context } from "./context";
// import { withRouter } from 'react-router-dom';

// // const validator = useRef(
// //     new SimpleReactValidator({
// //         messages: {
// //             required: "Filling this field is required",
// //             min: "Must not be less than 5 characters",
// //             email: "The email was not entered correctly"
// //         },
// //         element: message => <div style={{ color: "red" }}>{message}</div>
// //     })
// // );


// const UserContext = ({ children, history }) => {
//     // const [username, setUsername] = useState("");
//     // const [email, setEmail] = useState("");
//     // const [password, setPassword] = useState("");

    // const handleDeletePerson = (id) => {
    //     const persons = [...Name];
    //      const filtredPerson = persons.filter(p => p.id !== id);
    //     setName(filtredPerson);

    //  }

//     // const resetStates = () => {
//     //     setUsername("");
//     //     setEmail("");
//     //     setPassword("");
//     // }

//     // const handleLogin = async event => {
//     //     event.preventDefault();
//     //     const user = {email,password};
//     //     try {
//     //         const { status, data } = await loginUser(user);
//     //         if (status === 200) {
//     //             // toast.success('You Are Logged in', {
//     //             //     position: 'top-right',
//     //             // });
//     //             successMessage('You Are Logged in')
//     //             localStorage.setItem("token", data.token);
//     //             history.replace("/admin/UserList")
//     //             resetStates();
//     //         }
//     //     } catch (ex) {
//     //         console.log(ex)
//     //         // toast.error('User not found!', {
//     //         //     position: 'top-left',
//     //         // });
//     //         errorMessage('User not found!')
//     //     }

//     // }

//     // const handleSignup = async event => {
//     //     event.preventDefault();
//     //     const user = {
//     //         username,
//     //         email,
//     //         password
//     //     }
//     //     try {
//     //         const { status, data } = await registerUser(user);
//     //         if (status === 200) {
//     //             // toast.success('Registration completed successfully', {
//     //             //     position: 'top-right',
//     //             // });
//     //             successMessage('Registration completed successfully')
//     //             localStorage.setItem("token", data.token);
//     //             resetStates();
//     //         }
//     //     } catch (ex) {
//     //         console.log(ex)
//     //         // toast.error('Registration is not possible!', {
//     //         //     position: 'top-left',
//     //         // });
//     //         errorMessage('Registration is not possible!')

//     //     };
//     // }

//     return (
//         <context.Provider
//             value={{
//                 username,
//                 setUsername,
//                 email,
//                 setEmail,
//                 password,
//                 setPassword,
//                 // validator,
//                 handleLogin,
//                 handleSignup,
//             }}
//         >
//             {children}
//         </context.Provider>
//     )
// }

// export default withRouter(UserContext);

