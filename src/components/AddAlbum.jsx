import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AddAlbum = (props) => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const albums = props.data;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify({
        title: title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((response) => response.json())
    .then((json) => {
      albums.push(json); // Add the new album
      window.alert("Album added successfully at the bottom!");
      setTitle("");
      navigate('/'); // Navigate to the home page after the album is added
    })
    .catch((error) => {
      console.error("Error adding album:", error);
    });
  };

  return (
    <div className="add-album">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title goes here"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          value={title}
          required
        />
        <hr />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAlbum;
