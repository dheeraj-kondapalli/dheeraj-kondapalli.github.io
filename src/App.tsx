import "./index.css";
import "./App.css"

export default function App() {
  return (
    <div>
      <header>
        <h1>Dheeraj Kondapalli</h1>
        <p>Java Developer | Cloud | GenAI Enthusiast</p>
      </header>

      <main>
        <section>
          <h2>About Me</h2>
          <p>
            I am a Java developer with experience building scalable backend systems
            using Spring Boot, Kafka, Redis, Azure, and Kubernetes. Currently exploring
            Generative AI and integrating it into real-world applications.
          </p>
        </section>

        <section>
          <h2>Projects</h2>
          <ProjectCard
            title="Event Processing Platform"
            description="Kafka-based event-driven system with Spring Boot, Redis caching, and Azure AKS deployment."
          />
          <ProjectCard
            title="GenAI POC"
            description="Retrieval-Augmented Generation app using LLMs with Java backend APIs."
          />
        </section>

        <section>
          <h2>Skills</h2>
          <ul className="skills">
            {[
              "Java 21",
              "Spring Boot",
              "Kafka",
              "Azure",
              "AKS",
              "Docker",
              "Redis",
              "React",
              "TypeScript",
            ].map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <p>📧 dheeraj@example.com</p>
          <p>🔗 github.com/dheeraj-kondapalli</p>
          <p>🔗 linkedin.com/in/dheerajkondapalli</p>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} Dheeraj Kondapalli
      </footer>
    </div>
  );
}

function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
