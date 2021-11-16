import React,{ useState, useEffect} from "react"; 
import { Link } from "react-router-dom";
import menuBtn from '../images/menu-mobile.svg';
import ReactModal from "react-modal"

const modal = {
  position: "absolute",
  top: "0%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}

const overlay = {
  position: "fixed",
  top: "0%",
  left: "0%",
  right: "0%",
  bottom: "0%",
  backgroundColor: "rgba(0,0,0,0.15)",
  zIndex: "10",
  backdropFilter: "blur(2px)",
}

const Header = () => {
  ReactModal.setAppElement("#root");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
  }, [isOpen]);
  return (
    <header className="sticky border-b border-gray-100">
      <div className="container relative flex justify-end md:justify-between items-center py-6">
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:top-auto md:left-auto md:translate-x-0 md:translate-y-0">
          <Link to="/" className="logo">
            台灣走走
          </Link>
        </h2>
        <nav className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={menuBtn} alt="menuBtn" />
          </button>
        </nav>
        <nav className="hidden md:flex gap-x-10 text-gray">
          <Link to="/activity">探索景點</Link>
          <Link to="/restaurant">節慶活動</Link>
          <Link to="/hotel">品嚐美食</Link>
        </nav>
      </div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className={modal}
        overlayClassName={overlay}
      >
          <nav
            className={`bg-white border border-gray-100 rounded space-y-4 transition duration-300 ${
              isOpen ? "" : "opacity-0 invisible"
            }`}
          >
            <Link
              className="block border-b border-gray-100 py-3 px-8"
              to="/activity"
              onClick={() => setIsOpen(!isOpen)}
            >
              探索景點
            </Link>
            <Link
              className="block border-b border-gray-100 py-3 px-8"
              to="/restaurant"
              onClick={() => setIsOpen(!isOpen)}
            >
              節慶活動
            </Link>
            <Link
              className="block border-b border-gray-100 py-3 px-8"
              to="/hotel"
              onClick={() => setIsOpen(!isOpen)}
            >
              品嚐美食
            </Link>
          </nav>
      </ReactModal>
    </header>
  );
}

export default Header;
