import BackPage from "../components/BackPage";
import MobileNavigation from "../components/MobileNavigation/MobileNavigation";

import AvatarImage from "../../assets/mobile-navigation/avatar.jpg";

function page() {
  const mobileUser = {
    name: "Rachel Solando",
    role: "Architect",
    image: AvatarImage,
  };

  return (
    <div className="h-screen bg-slate-100 flex items-center justify-center">
      <BackPage />
      <MobileNavigation
        name={mobileUser.name}
        role={mobileUser.role}
        image={mobileUser.image}
      />
    </div>
  );
}

export default page;
