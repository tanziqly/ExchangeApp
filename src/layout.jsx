import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function layout({ children }) {
  return (
    <>
      <nav className="flex justify-center border-b border:[#BDBDBD] dark:border-[#545454]">
        <Header />
      </nav>
      {children}
      <footer className="absolute text-black bottom-0 border-t border-[#bcbcbc] dark:border-[#545454] w-full flex justify-center">
        <Footer />
      </footer>
    </>
  );
}
