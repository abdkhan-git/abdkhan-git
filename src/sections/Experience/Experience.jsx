import React from "react";
import styles from "./ExperienceStyles.module.css";
import ExperienceCard from "../../common/ExperienceCard";

function Experience() {
  const experiences = [
    {
      title: "Software & IT Intern",
      company: "Total Deployment Solutions",
      period: "June 2025 – Present",
      location: "New York, NY",
      description:
        "Incoming software and IT intern, as part of a tech consultant company which provides software solutions and IT support to contracted clients like BlackRock, LinkedIn, and JPMorgan Chase. Responsibilities will include assisting in software development projects, IT support, and system administration tasks.",
      technologies: ["Intune", "Python", "SQL", "AWS", "ServiceNow"],
      type: "internship",
    },
    {
      title: "CS Teaching Assistant",
      company: "FSC - Center for Academic Success & Tutoring",
      period: "September 2024 – Present",
      location: "Farmingdale, NY",
      description:
        "Mentoring students in computer science courses, assisting with programming assignments, and conducting review sessions. Focused on enhancing students' understanding of algorithms and data structures, object-oriented programming, and software development practices.",
      technologies: ["Java", "Python", "DSA", "OOP"],
      type: "academic",
    },
    {
      title: "IT Infrastructure & Automation Intern",
      company: "International Cricket Council",
      period: "May 2024 – August 2024",
      location: "East Meadow, NY",
      description:
        "Worked on automating IT infrastructure processes, improving system reliability, and enhancing network security protocols. Collaborated with the IT team to implement new software solutions, to support the seamless operation of ICC's T20 World Cup 2024.",
      technologies: ["Ansible", "Python", "AWS", "Docker"],
      type: "internship",
    },
    {
      title: "Software Engineer\nIntern",
      company: "Engageathon",
      period: "January 2024 – May 2024",
      location: "Remote",
      description:
        "Assisted in developing a mobile application for a non-profit organization, focusing on allowing users to create and manage community events, allowing schools, colleges, and companies to host events and engage with their communities.",
      technologies: ["React Native", "Node.js", "MongoDB", "Express.js"],
      type: "internship",
    },
  ];

  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.timeline}>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
