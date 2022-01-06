import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [user, setUser] = useState();
  const [label, setLabel] = useState("");
  const [title, setTitle] = useState("My name is");
  const [value, setValue] = useState("random person");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.results[0]);
    setUser(data.results[0]);
    setLoading(false)
    
  };

  const handleMouseOver = (e) => {
    console.log(e.currentTarget.getAttribute("data-label"));
    setLabel(e.currentTarget.getAttribute("data-label"));
  };

  useEffect(() => {
    switch (label) {
      case "name":
        setTitle("My name is");
        setValue(user?.name?.first);
        break;

      case "age":
        setTitle("My age is");
        setValue(user?.dob?.age);
        break;

      case "email":
        setTitle("My email is");
        setValue(user?.email);
        break;

      case "phone":
        setTitle("My phone is");
        setValue(user?.cell);
        break;

      case "street":
        setTitle("My street is");
        setValue(user?.location?.city);
        break;

      case "password":
        setTitle("My password is");
        setValue(user?.phone);
        break;

      default:
        break;
    }
  }, [handleMouseOver]);

  return (
    <>
      <main>
        <div className="block bcg-black"></div>
        <div className="block">
          <div className="container">
            <img
              src={loading ? defaultImage : user?.picture?.large}
              alt="random-user"
              className="user-img"
            />
            <p className="user-title">{loading ? "My name is" : title }</p>
            <p className="user-value">{loading ? value : user?.name?.first}</p>
            <div className="values-list">
              <button
                className="icon"
                data-label="name"
                onMouseOver={handleMouseOver}
              >
                <FaUser />
              </button>
              <button
                className="icon"
                data-label="email"
                onMouseOver={handleMouseOver}
              >
                <FaEnvelopeOpen />
              </button>
              <button
                className="icon"
                data-label="age"
                onMouseOver={handleMouseOver}
              >
                <FaCalendarTimes />
              </button>
              <button
                className="icon"
                data-label="street"
                onMouseOver={handleMouseOver}
              >
                <FaMap />
              </button>
              <button
                className="icon"
                data-label="phone"
                onMouseOver={handleMouseOver}
              >
                <FaPhone />
              </button>
              <button
                className="icon"
                data-label="password"
                onMouseOver={handleMouseOver}
              >
                <FaLock />
              </button>
            </div>
            <button className="btn" onClick={getData}>{loading ? "loading..." : "random user"}</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
