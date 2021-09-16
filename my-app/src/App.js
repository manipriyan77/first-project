import "./App.css";
import React from "react";
import MainHeader from "./Components/Header/MainHeader";
import "bootstrap/dist/css/bootstrap.min.css";

import Mainpage from "./Components/MainPage/Mainpage";
import Ourservice from "./Components/Ourservice/OurService";
import Whatwedo from "./Components/Whatwedo/Whatwedo";
import Aboutus from "./Components/Aboutus/Aboutus";
import Features from "./Components/Features/Features";
import Testimonials from "./Components/Testimonials/Testiomonials";
import Customers from "./Components/Customers/Customers";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="">
      <MainHeader></MainHeader>
      <Mainpage />
      <Ourservice />
      <Whatwedo />
      <Aboutus />
      <Features />
      <Testimonials />
      <Customers />
      <Form />
    </div>
    // <h1>Mani</h1>

    // React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'it works now'))
  );
}

export default App;
