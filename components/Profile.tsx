import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex flex-row items-center justify-center my-10">
      <div className="profile-container">
        <Image
          src="/profile.png"
          alt="profile"
          width={300}
          height={200}
          className="profile-image"
        />
      </div>
      <span className="mx-5" style={{ fontSize: "50px" }}>카드 디자인 들어갈 공간</span>
    </div>
  );
};

export default Profile;
