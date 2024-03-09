import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="profile-container">
        <Image
          src="/profile.png"
          alt="profile"
          width={300}
          height={200}
          className="profile-image"
        />
      </div>
      <span style={{ fontSize: "50px" }}>아무 의미없는 문자열의 연속</span>
    </div>
  );
};

export default Profile;
