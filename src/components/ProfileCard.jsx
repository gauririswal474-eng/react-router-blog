import pencil from "../assets/pencil.svg";

export default function ProfileCard() {
  return (
    <section className="card profile-card">
      <img src={pencil} alt="Profile" />
      <div className="card-body">
        <h3>My Name</h3>
        <p>
          Just me, myself and I, exploring the universe of uknownment. I have a
          heart of love and a interest of lorem ipsum and mauris neque quam
          blog. I want to share my world with you.
        </p>
      </div>
    </section>
  );
}
