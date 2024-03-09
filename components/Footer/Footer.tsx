import Image from "next/image";

const Footer = () => {
  return (
    <>
      <Image
        alt="Mask"
        src="/banner.png"
        width={1440}
        height={173}
        style={{
          opacity: 1,
          zIndex: 0,
          width: "100vw",
          height: "auto",
          bottom: "20px",
        }}
      />
      <div style={{ fontSize: "100px", fontWeight: "bold" }}>Footer</div>
    </>
  );
};

export default Footer;