import React, { createContext, use, useEffect, useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar/NavBar";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../public/firebase.init";

// 1.0  the login and signup form is created in specific page. Sometimes requirement is that the login form is also additionally added to any other page. In that case context api is used. This context api is used in that page where whole application can be accessed. i.e Where we applied Outlet. যে value টাকে আমরা pass করবো সেখানে create context করতে হবে।
// Note: Concept of context api is avail the value in a specific area.

// 1.1 create context and export it
export const valueContext = createContext();

const Root = () => {
  // 2.0 My requirement is show the user information to the about page by using useState
  const [user, setUser] = useState(null);

  // 1.3 now create the previously created handleSignUp. as we need the email and password here so receive the email, password as parameter
  const handleSignUp = (email, password) => {
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        console.log(currentUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        console.log(currentUser);
        // 2.1 set the user value (commented due to setUser will be set in onAuthStateChange)
        // setUser(currentUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  //   1.4 as we want to sent multiple value u cannot pass it using comma, that's why created an object and pass the object through provider. Because valueContext.Provider value can pass value like object or array. That's why created as object.
  const userObj = {
    handleSignUp,
    handleSignIn,

    // 2.3 or 4.4 pass user
    // setUser,
    user,
  };

  //  4.0 Applying onAuthStateChange in useEffect because because it can render 5 times or 10 without useEffect. using useEffect with empty dependency it will render one time. this auth works by monitoring the user state. if the auth state is changed i.e. user sign in or sing out. It calls the arrow function with user as parameter.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);

      // 4.2 set the setUser
      setUser(user);
      /* if (user) {
        } else {
        } */
    });
    // 4.3 if application is unmount or sign out it will erase all the data of user
    return () => unsubscribe();
  }, []);

  return (
    <>
      <NavBar></NavBar>
      {/* 1.2 wrap the outlet inside the valueContext.Provider*/}
      {/* 1.4 pass the handleSignUp in a value */}
      <valueContext.Provider value={userObj}>
        <Outlet></Outlet>
      </valueContext.Provider>
    </>
  );
};

export default Root;
