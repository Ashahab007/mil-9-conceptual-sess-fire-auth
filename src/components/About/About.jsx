import React, { useContext } from "react";
import { valueContext } from "../../Root/Root";

const About = () => {
  // 2.4 destructured it to use the user value
  const { user } = useContext(valueContext);
  console.log(user?.email);

  //  2.5 here u can show the data but after reload it will lost that's why we use onAuthStateChange

  return (
    <div>
      <h1>I am about</h1>
      <p>{user?.email}</p>
    </div>
  );
};

export default About;
