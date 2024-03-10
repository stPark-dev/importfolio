import Image from "next/image";

const Intro = () => {
  return (
    <>
      <div className="relative w-screen h-[40vh]">
        <Image
          className="object-cover object-center opacity-80"
          src="/intro.jpg"
          priority
          fill
          alt="intro image example"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-amber-600/90">[ " stPark " ]</h1>
          <p className="text-2xl text-yellow-50/90">
            The Consistent Developer
          </p>
        </div>
      </div>
      {/* <div className="relative w-full max-h-96">
        <Image
          src="/intro.jpg"
          sizes="500px"
          fill
          style={{
            objectFit: "contain",
          }}
          alt="intro"
          className="opacity-70"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <p className="text-white text-4xl font-bold">
            Welcome to Our Website
          </p>{" "}
        </div>
      </div> */}
    </>
  );
};

export default Intro;
