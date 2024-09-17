import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function layout({ children }) {
  return (
    <>
      <nav className="flex justify-center border-b border-[#545454]">
        <Header />
      </nav>
      {children}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
