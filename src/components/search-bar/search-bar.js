import "./search-bar.css";
import { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import MyList from "../list/my-list";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [gists, setGists] = useState([]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`https://api.github.com/users/${username}/gists`).then((resp) => {
      setGists(resp.data);
    });
  };

  return (
    <div className="search-bar-wrapper">
      <form className="search-input" onSubmit={handleSubmit}>
        <div style={{ width: "100%", margin: "5px" }}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Username"
            onChange={handleUsernameChange}
          />
        </div>
        <button type="submit" style={{ margin: "5px" }}>
          Seach
        </button>
      </form>

      <MyList gists={gists} />
    </div>
  );
};

export default SearchBar;
