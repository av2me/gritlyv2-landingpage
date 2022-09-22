import { React, useState } from "react";
import styles from "../Stylesheets/newLandingPage.module.scss";
import Logo from "../Assets/Images/Gritly-logo.svg";
import Button from "@mui/material/Button";
import GenericModal from "./GenericModal";
import RoleSpecificTrainingCard from "./RoleSpecificTrainingCard";
import EmployersCard from "./EmployersCard";

import workbright from "../Assets/Images/PartnerImages/SVG/workbright.svg";
import sondermind from "../Assets/Images/PartnerImages/SVG/sondermind.svg";
import dope from "../Assets/Images/PartnerImages/SVG/dope.svg";
import rpaLabs from "../Assets/Images/PartnerImages/SVG/rpalabs.svg";
import salesforce from "../Assets/Images/PartnerImages/SVG/salesforce.svg";
import skupos from "../Assets/Images/PartnerImages/SVG/skupos.svg";
import misla from "../Assets/Images/PartnerImages/SVG/misla.svg";
import community_college from "../Assets/Images/PartnerImages/SVG/communityCollegeOfAurora.svg";
import energizeColorado from "../Assets/Images/PartnerImages/SVG/energizeColorado.svg";
import inside_voice from "../Assets/Images/PartnerImages/SVG/insidevoices.svg";
import gr8_insight from "../Assets/Images/PartnerImages/SVG/gr8insight.svg";
import bedrock from "../Assets/Images/PartnerImages/Bedrock-logo-purple-1.png";
import binti from "../Assets/Images/PartnerImages/binti-logo2x.png";

import ContactUs from "./ContactUs";
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
    img: skupos,
  },
  {
    key: 7,
    img: misla,
  },
  {
    key: 8,
    img: community_college,
  },
  {
    key: 9,
    img: energizeColorado,
  },
  {
    key: 10,
    img: inside_voice,
  },
  {
    key: 11,
    img: gr8_insight,
  },
  {
    key: 12,
    img: bedrock,
  },
  {
    key: 13,
    img: binti,
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
  const [toggleContactUs, updateToggleContactUs] = useState(false);
  return (
    <div className={styles["main-div"]}>
      <div className={styles["header-wrapper"]}>
        <div className={styles["logo-placeholder"]}>
          <a href="https://gritly.us">
            <img src={Logo} alt="Gritly" />
          </a>
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
          {/* <Carousel deviceType='desktop' /> */}
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
          <GenericModal
            open={toggleContactUs}
            togglePopUp={updateToggleContactUs}
            className={styles["modal-styles"]}
          >
            <ContactUs
              open={toggleContactUs}
              togglePopUp={updateToggleContactUs}
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
                    } else if (card.title === "Contact us") {
                      updateToggleContactUs(!toggleContactUs);
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
            {/* <span>About</span>
            <span>For Companies</span>
            <span>FAQ</span>
            <span>Contact Us</span> */}
            <span>
              <a href="">Privacy Policy</a>
            </span>
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
