import Avatar from "../../assets/profile-card/avatar.png";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import BackPage from "../components/BackPage";

function page() {
  const user = {
    fullName: "John Round",
    bio: "I'm  a good guy!",
    username: "@johnround",
    avatar: Avatar,
    socials: [
      {
        name: "facebook",
        link: "https://facebook.com",
      },
      {
        name: "instagram",
        link: "https://facebook.com",
      },
      {
        name: "x",
        link: "https://facebook.com",
      },
      {
        name: "openai",
        link: "https://facebook.com",
      },
      {
        name: "linkedin",
        link: "https://facebook.com",
      },
    ],
  };
  return (
    <div className="h-screen bg-[#f0f3c0] p-5">
      <BackPage />
      <ProfileCard
        avatar={user.avatar}
        fullName={user.fullName}
        bio={user.bio}
        username={user.username}
        socials={user.socials}
      />
    </div>
  );
}

export default page;
