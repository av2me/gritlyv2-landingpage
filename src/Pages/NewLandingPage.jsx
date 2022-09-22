import { React, useState } from "react";
import styles from "../Stylesheets/newLandingPage.module.scss";
import Logo from "../Assets/Images/Gritly-logo.svg";
import Button from "@mui/material/Button";
// import Carousel from "./CarouselComponent";
// import 'react-multi-carousel/lib/styles.css'
import dope from "../Assets/Images/PartnerImages/dope.png";
import workbright from "../Assets/Images/PartnerImages/workbright.png";
import salesforce from "../Assets/Images/PartnerImages/salesforce.png";
import rpaLabs from "../Assets/Images/PartnerImages/rpaLabs.png";
import sondermind from "../Assets/Images/PartnerImages/sondermind.png";
import energizeColorado from "../Assets/Images/PartnerImages/energizeColorado.png";
import communityCollege from "../Assets/Images/PartnerImages/commmunity-college.png";
import GenericModal from "./GenericModal";
import RoleSpecificTrainingCard from "./RoleSpecificTrainingCard";
import EmployersCard from "./EmployersCard";
const partnerImages = [
  {
    key: 1,
    img: workbright,
  },
  {
    key: 2,
    img: sondermind,
  },
  {
    key: 3,
    img: dope,
  },
  {
    key: 4,
    img: rpaLabs,
  },
  {
    key: 5,
    img: salesforce,
  },
  {
    key: 6,
    img: energizeColorado,
  },
  {
    key: 7,
    img: dope,
  },
  {
    key: 8,
    img: communityCollege,
  },
];

const cardContent = [
  {
    title: "Role-Specific Training",
    desc: "With our Learning Management System, we can empower your team to launch your bootcamp, manage your curriculum and students, and get your candidates hired faster.",
    key: 1,
  },
  {
    title: "Employers",
    desc: "By providing your team with candidate performance metrics for both technical and non-technical talent, we derisk the hiring process by connecting you with talent that can actually get the job done.",
    key: 1,
  },
  {
    title: "Contact us",
    desc: "Interested in connecting outside of becoming a partner or employer? Use this form and we'll reach out to you!",
    key: 1,
  },
];
const scrollToSection = () => {
  const element = document.getElementById("about-header");
  element.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
};

const NewLandingPage = () => {
  const [toggle, updateToggle] = useState(false);
  const [toggleRoleSpecificCard, updateToggleRoleSpecificCard] =
    useState(false);
  const [toggleEmployers, updateToggleEmployers] = useState(false);
  return (
    <div className={styles["main-div"]}>
      <div className={styles["header-wrapper"]}>
        <div className={styles["logo-placeholder"]}>
          <img src={Logo} alt="Gritly" />
        </div>
        <div className={styles["right-placeholder"]}>
          <Button
            classes={{ root: styles["button-styles"] }}
            onClick={() => scrollToSection()}
          >
            About
          </Button>
        </div>
      </div>
      <div className={styles["top-wrapper"]}>
        <div className={styles["body-wrapper"]}>
          <span>The future</span>
          <span>of skill-based</span>
          <span>training&hiring</span>
        </div>
      </div>
      <div className={styles["bottom-wrapper"]}>
        <div className={styles["bottom-header"]}>
          Our Partners
          {/* <Carousel deviceType='desktop'/> */}
          <div className={styles["image-wrapper"]}>
            {partnerImages.map((item) => {
              return (
                <div className={styles["image-wrapper-styles"]} key={item.key}>
                  <div className={styles["image-wrapper-dummy-element"]}>
                    <img src={item.img} alt="partner-images" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles["about-bottom-header"]} id={"about-header"}>
          About Platform
          <GenericModal
            open={toggleRoleSpecificCard}
            togglePopUp={updateToggleRoleSpecificCard}
            className={styles["modal-styles"]}
          >
            <RoleSpecificTrainingCard
              open={toggleRoleSpecificCard}
              togglePopUp={updateToggleRoleSpecificCard}
            />
          </GenericModal>
          <GenericModal
            open={toggleEmployers}
            togglePopUp={updateToggleEmployers}
            className={styles["modal-styles"]}
          >
            <EmployersCard
              open={toggleEmployers}
              togglePopUp={updateToggleEmployers}
            />
          </GenericModal>
          <div className={styles["card-content-wrapper"]}>
            {cardContent.map((card) => {
              return (
                <div
                  className={styles["card-wrapper"]}
                  key={card.key}
                  onClick={() => {
                    if (card.title === "Role-Specific Training") {
                      updateToggleRoleSpecificCard(!toggleRoleSpecificCard);
                      updateToggle(!toggle);
                    } else if (card.title === "Employers") {
                      updateToggleEmployers(!toggleEmployers);
                      updateToggle(!toggle);
                    }
                  }}
                >
                  <div className={styles["card-content"]}>
                    <div className={styles["content-header"]}>{card.title}</div>
                    <div className={styles["content-body"]}>{card.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles["footer-bar"]}>
          <div className={styles["bottom-logo-placeholder"]}>
            <img src={Logo} alt="Gritly" />
          </div>
          <div className={styles["footer-menu-selections"]}>
            <span>About</span>
            <span>For Companies</span>
            <span>FAQ</span>
            <span>Contact Us</span>
            <span>Privacy Policy</span>
          </div>
          <div className={styles["copyrights"]}>
            © {new Date().getFullYear()} Gritly. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLandingPage;
