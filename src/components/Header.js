import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { logos, /*socialMediaUrl */ } from "../Details";
import ModalDownloadCV from "./Modal";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";

function Header() {
  const { t, i18n } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedLangue, setSelectedLangue] = useState("en");

  useEffect(() => {
    setSelectedLangue(i18n.language)
  }, [t, i18n.language])

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsOpenModal(!isOpenModal);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }

  const downloadCV = () => {
    alert("ok");
  }

  const handleChangeLanguage = () => {
    if (i18n.language === 'fr') {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('fr')
    }
  }

  return (
    <>
      <header className="container mx-auto md:flex justify-between py-2 max-width">
        <div className="flex justify-between items-center py-2 md:py-10">
          <NavLink to="/">
            <img className="w-14" src={logos.logogradient} alt="logo" />
          </NavLink>
          <div onClick={toggleClass} className="cursor-pointer">
            <svg
              className="stroke-dark-heading dark:stroke-white md:hidden"
              width="25"
              height="20"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
                strokeWidth="1.875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <nav className={` ${!isOpen ? "hidden" : null} text-center md:flex justify-between`}>
          <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
            <li className="pb-1 md:pb-0">
              <NavLink to="/" onClick={toggleClass}>
                {t("Home")}
              </NavLink>
            </li>
            <li className="pb-1 md:pb-0">
              <NavLink to="/about" onClick={toggleClass}>
                {t("About")}
              </NavLink>
            </li>
            <li className="pb-1 md:pb-0">
              <NavLink to="/technologies" onClick={toggleClass}>
                {t("Technologies")}
              </NavLink>
            </li>
            <li className="pb-1 md:pb-0">
              <NavLink to="/projects" onClick={toggleClass}>
                {t("Projects")}
              </NavLink>
            </li>
            <li className="pb-1 md:pb-0">
              <NavLink to="/contact" onClick={toggleClass}>
                {t("Contact")}
              </NavLink>
            </li>
            <li className="py-1 md:pb-1">
              <button
                type="button"
                onClick={openModal}
              >
                <span className="flex justify-between items-center btn bg-greenbg text-ms inline-block rounded-3xl px-3 py-1 min-w-fit">
                  <AiOutlineDownload style={{ fontSize: "1.2em" }} /> {t("DownloadCV")}
                </span>
              </button>
            </li>
            <li className="pb-1 md:pb-0">
              <button
                type="button"
                onClick={handleChangeLanguage}
              >
                <span className="flex justify-between items-center btn text-ms text-blue-900 px-2 py-2 min-w-fit">
                  <MdLanguage style={{ fontSize: "1.2em" }} /> <sup>{t(selectedLangue)}</sup>
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <ModalDownloadCV
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        downloadCV={downloadCV}
        title="Payment successful"
        description="Your payment has been successfully submitted. We’ve sent
        you an email with all of the details of your order."
        cancel={t("Got it, thanks!")}
        actionModal={t("DownloadCV")}
      />
    </>
  );
}

export default Header;
