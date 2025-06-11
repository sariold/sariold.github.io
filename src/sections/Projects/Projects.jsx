import styles from "./ProjectsStyles.module.css";
import DisplayCard from "../../common/DisplayCard";

import nftGame from "../../assets/nft-game.png";
import btcDiploma from "../../assets/btc-diploma.png";
import btcGold from "../../assets/bitGold.png";
import caloriego from "../../assets/caloriego.png";

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
          p="Blockchain Developer Certified"
        />
        <DisplayCard
          src={btcGold}
          link="https://github.com/sariold/BitGold/blob/main/BitGold.ipynb"
          h3="Bitcoin Price Prediction"
          p="Time Series Forecasting"
        />
        <DisplayCard
          src={caloriego}
          link="https://sariol.dev/Caloriego"
          h3="Caloriego"
          p="Macronutrients Calculator"
        />
      </div>
    </section>
  );
}

export default Projects;
