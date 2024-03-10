import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="relative w-full">
        <Image
          alt="Mask"
          src="/banner.png"
          layout="responsive"
          width={1440}
          height={173}
          quality={100}
          className="z-0"
        />
      </div>
      <div className="text-8xl md:text-9xl font-bold text-center">Footer</div>
    </>
  );
};

export default Footer;