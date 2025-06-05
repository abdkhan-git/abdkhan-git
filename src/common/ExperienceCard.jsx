// ExperienceCard.jsx
import React from "react";
import styles from "./ExperienceCardStyles.module.css";

function ExperienceCard({ experience, index }) {
  const { title, company, period, location, description, technologies, type } =
    experience;

  return (
    <div className={`${styles.timelineItem}`}>
      <div className={styles.timelineContent}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.titleSection}>
              <div>
                <h3 className={styles.jobTitle}>{title}</h3>
                <h4 className={styles.company}>{company}</h4>
              </div>
            </div>
            <div className={styles.timeLocation}>
              <span className={styles.period}>{period}</span>
              <span className={styles.location}>{location}</span>
            </div>
          </div>

          <p className={styles.description}>{description}</p>

          <div className={styles.technologies}>
            {technologies.map((tech, techIndex) => (
              <span key={techIndex} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.timelineMarker}></div>
      </div>
    </div>
  );
}

export default ExperienceCard;
