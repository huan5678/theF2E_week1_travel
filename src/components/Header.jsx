import React,{ useState, useEffect} from "react"; 
import { Link } from "react-router-dom";
import menuBtn from '../images/menu-mobile.svg';
import menuBtnClose from "../images/menu-mobile-close.svg";
import ReactModal from "react-modal"

import "./modal.css";

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
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <div className="flex justify-between items-center pl-7">
        <h2>
          <Link to="/" className="logo">
            台灣走走
          </Link>
            </h2>
            <button onClick={() => setIsOpen(false)}>
              <img src={menuBtnClose} alt="menuBtn" />
            </button>
          </div>
        <nav>
          <Link
            className="block border-b border-gray-100 py-6 text-center"
            to="/activity"
            onClick={() => setIsOpen(!isOpen)}
          >
            探索景點
          </Link>
          <Link
            className="block border-b border-gray-100 py-6 text-center"
            to="/restaurant"
            onClick={() => setIsOpen(!isOpen)}
          >
            節慶活動
          </Link>
          <Link
            className="block py-6 text-center"
            to="/hotel"
            onClick={() => setIsOpen(!isOpen)}
          >
            品嚐美食
          </Link>
        </nav>
        </div>
      </ReactModal>
    </header>
  );
}

export default Header;
