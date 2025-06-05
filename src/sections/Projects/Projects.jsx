import styles from "./ProjectsStyles.module.css";
import lawdoc from "../../assets/lawdoc.png";
import stockinsight from "../../assets/stockinsight.png";
import teamdocs from "../../assets/teamdocs.png";
import kartenchaos from "../../assets/kartenchaos.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={lawdoc}
          link="https://github.com/abdkhan-git/lawdoc-ai"
          h3="LawDoc AI"
          p="AI Legal Assistant"
        />
        <ProjectCard
          src={stockinsight}
          link="https://github.com/abdkhan-git/StockInsightsTracker"
          h3="Congress' Trades"
          p="Trade Tracker"
        />
        <ProjectCard
          src={teamdocs}
          link="https://github.com/abdkhan-git/TeamDocs"
          h3="TeamDocs"
          p="Google Docs Clone"
        />
        <ProjectCard
          src={kartenchaos}
          link="https://github.com/abdkhan-git/Kartenchaos"
          h3="Kartenchaos"
          p="Self-Created Card Game"
        />
      </div>
    </section>
  );
}

export default Projects;
