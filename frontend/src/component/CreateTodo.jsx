import { useState } from "react";

export function AddAnime() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function update() {
    fetch("http://localhost:3000/animelist/add", {
      method: "POST",
      body: JSON.stringify({
        name: title,
        description: description,
        completion: true,
      }),
      headers:{
        "Content-type": "application/json"
      }
    }).then(async (Response) => {
      window.alert("added");
    });
  }


  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />{" "}
      <br />
      <button onClick={update}>Add</button>
    </div>
  );
}
