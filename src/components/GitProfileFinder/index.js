import { useEffect, useState } from "react";
import UserProfile from "./userProfile";
import styles from "./git.css";

export default function GitProfileFinder() {
  const [userName, setUserName] = useState("sachin-coder-hub");
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchGitProfile() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      console.log(data);
    }
  }

  const handleSubmit = () => {
    fetchGitProfile();
  };

  useEffect(() => {
    fetchGitProfile();
  }, []);

  if (loading) {
    return <p>Please wait while we load data for you..!</p>;
  }
  return (
    <div className="profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-name"
          type="text"
          placeholder="Enter github username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Find</button>
      </div>
      {userData !== null ? <UserProfile user={userData} /> : null}
    </div>
  );
}
