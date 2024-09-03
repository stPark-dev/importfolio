import Experience from "@/components/Experience";
import FloatingButton from "@/components/FloatingButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Profile />
        <Experience />
        <div id="project" className="my-5 text-3xl md:text-5xl">
          <h2>My Project</h2>
          <p className="text-base md:text-xl">This is the project section.</p>
        </div>
        <div id="contact" className="my-5 text-4xl md:text-6xl">
          <h2>Contact</h2>
          <p className="text-base md:text-xl">This is the contact section.</p>
        </div>
      </main>
      <FloatingButton />
      <Footer />
    </>
  );
}
