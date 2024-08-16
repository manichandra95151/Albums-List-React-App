import React, { useEffect } from "react";
import { useState } from "react";

const EditAlbum = (props) => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  

  // retrieving data from local storage and setting in the "state" variables

  useEffect(() => {
    setTitle(localStorage.getItem("title"));
    setId(localStorage.getItem("id"));
  }, []);

  console.log(id, title);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("ID", id);

    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      props.data[id-1] = json;
    })

    alert("Updated successfully!")  
    setTitle("");
  
  };

  return (
    <div className="add-album">
      <form>
        <label htmlFor="title">Enter New Title</label>
        <input
          type="text"
          placeholder="New title here"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          value={title}
          required
        />
        <hr />
        <button onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
};

export default EditAlbum;
