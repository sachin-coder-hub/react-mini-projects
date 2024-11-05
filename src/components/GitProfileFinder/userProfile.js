import styles from "./git.css";

export default function UserProfile({ user }) {
  const {
    avatar_url,
    followers,
    public_repos,
    name,
    location,
    html_url,
    login,
    created_at,
    following,
  } = user;

  const createdDate = new Date(created_at);
  return (
    <div className="user-profile">
      <div>
        <img src={avatar_url} alt="user-img" className="git-avatar" />
      </div>
      <div>
        <a href={html_url}>{name || login}</a>
        <p>
          User Joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
        <p>{location}</p>
        <div className="profile-info">
          <div>
            <p>Public Repos</p>
            <p>{public_repos}</p>
          </div>
          <div>
            <p>Followers</p>
            <p>{followers}</p>
          </div>
          <div>
            <p>Following</p>
            <p>{following}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
