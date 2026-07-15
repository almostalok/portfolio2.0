import "./styles/TechStackNew.css";

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: ["JavaScript (ES6+)", "TypeScript", "SQL", "Python"]
  },
  {
    title: "FRONTEND",
    skills: ["React.js", "Next.js 14", "React Native", "Tailwind CSS", "Redux", "Context API"]
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "GraphQL", "WebSockets"]
  },
  {
    title: "DATABASES",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase"]
  },
  {
    title: "DEVOPS & TOOLS",
    skills: ["Docker", "AWS (EC2, S3, Lambda)", "Git", "CI/CD", "Vercel", "Linux", "Postman", "Figma"]
  },
  {
    title: "PRACTICES",
    skills: ["System Design", "Database Schema Design", "API Design", "Performance Optimization", "Agile"]
  }
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      <div className="techstack-header-grid">
        <h2 className="title">TECH STACK <span>/</span> INFRASTRUCTURE</h2>
        <p className="techstack-subtitle">
          A collection of languages, frameworks, databases, and DevOps tools that I use to design and deploy production-grade software.
        </p>
      </div>

      <div className="techstack-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="techstack-card">
            <div className="techstack-card-num">0{index + 1}</div>
            <h3>{category.title}</h3>
            <div className="techstack-skills-list">
              {category.skills.map((skill, sIndex) => (
                <div key={sIndex} className="techstack-skill-item">
                  <span className="skill-dot"></span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackNew;
