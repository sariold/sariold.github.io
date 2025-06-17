import styles from "./ProjectsStyles.module.css";
import DisplayCard from "../../common/DisplayCard";

import nftGame from "../../assets/nft-game.png";
import btcDiploma from "../../assets/btc-diploma.png";
import btcGold from "../../assets/bitGold.png";
import caloriego from "../../assets/caloriego.png";
import fitness from "../../assets/fitness.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <DisplayCard
          src={nftGame}
          link="https://github.com/sariold/Matic-Stone"
          h3="$MATIC Stone"
          p="NFT Testnet Card Game"
        />
        <DisplayCard
          src={btcDiploma}
          link="https://github.com/sariold/Bitcoin-Nano"
          h3="Bitcoin Nanodegree"
          p="Smart Contracts & Projects"
        />
        <DisplayCard
          src={btcGold}
          link="https://github.com/sariold/BitGold"
          h3="Bitcoin Price Prediction"
          p="Time Series Analysis"
        />
        <DisplayCard
          src={caloriego}
          link="https://sariol.dev/Caloriego"
          h3="Caloriego"
          p="Macronutrient Calculator Tool"
        />
        <DisplayCard
          src={fitness}
          link="https://sariol.dev/Fitness-Tracker"
          h3="Fitness Tracker"
          p="Data Visualization Dashboard"
        />
      </div>
    </section>
  );
}

export default Projects;
