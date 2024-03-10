import Image from "next/image";
import { Orbit,Gowun_Dodum } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Cake, Mail, MapPin, Pencil, Phone, User } from "lucide-react";

const gowun = Gowun_Dodum({ weight: "400", subsets: ["latin"] });

const profileClassName = twMerge("grid gap-20 grid-cols-1 md:grid-cols-3", gowun.className);

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div className="profile-container">
        <Image
          src="/profile.png"
          alt="profile"
          width={300}
          height={200}
          className="profile-image"
        />
      </div>
      <div className={`${profileClassName} bg-white shadow-lg rounded-lg p-4 my-4`}>
        <div className="flex items-center justify-center text-lg">
          <User className="mr-2" /> 박성태
        </div>
        <div className="flex items-center justify-center text-lg">
          <Mail className="mr-2" /> dmc6618@gmail.com
        </div>
        <div className="flex items-center justify-center text-lg">
          <MapPin className="mr-2" /> 서울
        </div>
        <div className="flex items-center justify-center text-lg">
          <Phone className="mr-2" /> 010-6335-6618
        </div>
        <div className="flex items-center justify-center text-lg">
          <Pencil className="mr-2" /> 국민대학교(경영정보 정보시스템전공)
        </div>
        <div className="flex items-center justify-center text-lg">
          <Cake className="mr-2" /> 1993. 01. 10
        </div>
      </div>
    </div>
  );
};

export default Profile;
