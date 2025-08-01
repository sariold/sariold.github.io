import { useEffect, useState } from "react";

import styles from "./HeroStyles.module.css";
import { useTheme } from "../../common/ThemeContext";
import { Typewriter } from "react-simple-typewriter";

import heroImg from "../../assets/avatar.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import contactLight from "../../assets/contact-light.svg";
import contactDark from "../../assets/contact-dark.svg";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const contactIcon = theme === "light" ? contactLight : contactDark;

  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        {showBubble && (
          <div className={styles.speechBubble}>
            👋 Explore my work through the icons below.
          </div>
        )}

        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Diego Renzo Sariol"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Diego
          <br />
          Renzo
          <br />
          Sariol
        </h1>
        <h2>Software & ML Engineer</h2>
        <span>
          <a href="https://github.com/sariold" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/sariold" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="mailto:diego@sariol.dev" target="_blank">
            <img src={contactIcon} alt="Contact icon" />
          </a>
        </span>
        <p className={styles.description}>
          With hands-on experience building <br />{" "}
          <span className="typewriter">
            <Typewriter
              words={[
                "deep learning models",
                "blockchain applications",
                "full-stack systems",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>
        <a
          href="https://drive.google.com/file/d/1uhwtBoL28Gv5HGEbIL9tay5n3muA8JoK/view?usp=sharing"
          target="_blank"
        >
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
