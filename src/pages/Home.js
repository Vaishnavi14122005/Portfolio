function Home() {
  return (
    <div className="container">

      <div className="profile-card">

        {/* Profile Image */}
        <img 
          src="/profile.jpg " 
          alt="profile" 
          className="profile-img top-right"
        />

        <h1>Sanikommu Vaishnavi Reddy</h1>

        <h2>About Me</h2>
        <p>I am an undergraduate student studying in Mahindra University</p>

        <h2>Research Interests</h2>
        <p>I am interested in full stack development and data-driven problem solving to create effective solutions for business and users.</p>

        <h2>Personal Details</h2>
        <p>Phone: 9885369899</p>
        <p>Email: se23ucse156@mahindrauniversity.edu.in</p>

        <h2>Skills</h2>
        <p>C, Python, React, NodeJS, CSS, HTML, API</p>

      </div>

    </div>
  );
}

export default Home;