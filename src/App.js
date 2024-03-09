import React, { useState } from "react";
import axios from "axios";

const App = () => {
  //get request related to String
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  //post request related to String
  const data = "Hello";
  const postDataFromfrontend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  //post request related to form
  const [formData, setFormData] = useState("");

  const postFormFromfrontend = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
      formData,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  return (
    <div className="App">
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>
      <br />
      <br />
      <button onClick={postDataFromfrontend}>Post Data</button>
      <p id="para"></p>
      <br />
      <form onSubmit={postFormFromfrontend}>
        <input
          type="text"
          name="formData"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        ></input>

        <input type="submit" value="Test Form"></input>
      </form>
    </div>
  );
};

export default App;
