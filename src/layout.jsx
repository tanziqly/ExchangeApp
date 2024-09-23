import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-center border-b border-[#BDBDBD] dark:border-[#545454]">
        <Header />
      </nav>
      <div className="flex-grow">{children}</div>
      <footer className="text-black border-t border-[#bcbcbc] dark:border-[#545454] w-full flex justify-center">
        <Footer />
      </footer>
    </div>
  );
}
