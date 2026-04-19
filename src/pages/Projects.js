function Projects() {
  return (
    <div className="container">

      <div className="profile-card">
        <h1>My Projects</h1>

        <div className="projects-container">

          <div className="project-card">
            <h3>Digital Complaint and Grievance Management System</h3>
            <ul>
              <li>Developed a role based complaint management system using React,Spring Boot,Node.js and Express.js.</li>
              <li>Built REST APIs for handling complaint registration and resolution workflows.</li>
              <li>Enabled real time tracking of complaint status through the web application.</li>
            </ul>
            <a href="____LINK____">View Project</a>
          </div>

          <div className="project-card">
            <h3>Expense Teacker API-QR Based Ticket Validation</h3>
            <ul>
              <li>Developed a full stack event management backend using Node.js and TypeScript with REST API.</li>
              <li>Implemented authentication, event and attendee management and QR based ticket validation.</li>
              <li>Integrated payment system and automated email notifications.</li>
            </ul>
            <a href="https://github.com/Vaishnavi14122005/event-management-platform.git">View Project</a>
          </div>

          <div className="project-card">
            <h3>Human Uncertainity-Aware Image Classification(CIFAR-10H)</h3>
            <ul>
              <li>Built a model to predict class probability distributions (human disagreement) on CIFAR-10H.</li>
              <li>Compared KL, JS Divergence, and Cosine Similarity with entropy & correlation metrics.</li>
              <li>VVisualized performance to analyze impact of different loss functions.</li>
            </ul>
            <a href="https://github.com/Vaishnavi14122005/DNN_Project_CIFAR10H.git">View Project</a>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Projects;