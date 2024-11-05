import { useEffect, useState } from "react";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [show, setShow] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchKey(query);
    if (query.length > 1) {
      const filterdData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1) // Basically we are checking the searched key in users list if it present or not.
          : [];
      setFilteredUsers(filterdData);
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleClick = (e) => {
    setSearchKey(e.target.innerText);
    setShow(false);
    setFilteredUsers([]);
  };

  async function fetchListofUsers() {
    setLoading(true);
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    if (data && data.users && data.users.length) {
      setUsers(data.users.map((item) => item.firstName));
      console.log(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListofUsers();
  }, []);

  if (loading) {
    <p>Please Wait for the results</p>;
  }
  console.log(users);
  return (
    <div className="search-container">
      <input
        value={searchKey}
        name="user-search"
        placeholder="Search users here"
        onChange={handleChange}
      />
      {show && (
        <div className="search-results">
          {filteredUsers.map((item, index) => (
            <li onClick={handleClick} key={index}>
              {item}
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
