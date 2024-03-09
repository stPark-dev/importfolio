import Experience from "@/components/Experience";
import FloatingButton from "@/components/FloatingButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Profile />
        <Experience />
        {/* My Project 섹션 추가 */}
        <div id="project" className="my-5" style={{ fontSize: "100px" }}>
          {" "}
          <h2>My Project</h2>
          <p>This is the project section.</p>
        </div>
        {/* Contact 섹션 추가 */}
        <div
          id="contact"
          className="my-5"
          style={{ fontSize: "200px" }}
        >
          {" "}
          <h2>Contact</h2>
          <p>This is contact section.</p>
        </div>
      </main>
      <FloatingButton />
      <Footer />
    </>
  );
}
