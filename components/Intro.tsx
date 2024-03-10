import Image from "next/image";

const Intro = () => {
  return (
    <>
      <div className="relative w-screen h-[40vh] md:h-[50vh]">
        <Image
          className="object-cover object-center opacity-80"
          src="/intro.jpg"
          priority
          fill
          alt="intro image example"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold text-amber-600/90 mb-4 md:mb-8">
            [&quot; stPark &quot;]
          </h1>
          <p className="text-xl md:text-2xl" style={{color: "#FFF9CB"}}>
            The Consistent Developer
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
