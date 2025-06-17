import styles from "./ProjectsStyles.module.css";
import DisplayCard from "../../common/DisplayCard";

import certifications from "../../assets/certifications.png";
import sentientStocks from "../../assets/sentient-stocks.png";
import imitationAgent from "../../assets/imitation-agent.png";
import ensembleLearning from "../../assets/ensemble-learning.png";
import viralParticles from "../../assets/viral-particles.png";
import ethicalCars from "../../assets/ethical-cars.png";

function Academia() {
  return (
    <section id="academia" className={styles.container}>
      <h1 className="sectionTitle">Academia</h1>
      <div className={styles.projectsContainer}>
        <DisplayCard
          src={certifications}
          link="https://github.com/sariold/Certifications"
          h3="Certifications"
          p="UT Austin & More"
        />
        <DisplayCard
          src={sentientStocks}
          link="https://github.com/sariold/Research-Papers/blob/main/Sentient%20Stocks%20-%20Discovering%20Market%20Mysteries%20Through%20Sectorized%20Sentiment%20Analysis%20and%20Predictive%20Modeling.pdf"
          h3="Sentient Stocks"
          p="Sector-Based Sentiment Analysis"
        />
        <DisplayCard
          src={imitationAgent}
          link="https://github.com/sariold/Research-Papers/blob/main/Analyzing%20the%20Behavior%20of%20an%20Imitation-Based%20Agent%20in%20a%20Simulated%20Setting.pdf"
          h3="Imitation Learning Agent"
          p="Simulated Behavior Modeling"
        />
        <DisplayCard
          src={ensembleLearning}
          link="https://github.com/sariold/Research-Papers/blob/main/Mitigating%20Dataset%20Artifacts%20Through%20Fine%20Tuning%20and%20Ensemble-Based%20Training.pdf"
          h3="Ensemble-Based Tuning"
          p="Reducing Dataset Artifacts"
        />
        <DisplayCard
          src={viralParticles}
          link="https://github.com/sariold/Research-Papers/blob/main/Analysis%20of%20Spread%20of%20Viral%20Particles%20in%20a%20Supermarket.pdf"
          h3="Viral Spread Simulation"
          p="Supermarket Transmission Model"
        />
        <DisplayCard
          src={ethicalCars}
          link="https://github.com/sariold/Research-Papers/blob/main/Who%20answers%20for%20the%20machine.pdf"
          h3="Autonomous Vehicle Ethics"
          p="Decision Accountability"
        />
      </div>
    </section>
  );
}

export default Academia;
