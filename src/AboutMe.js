import './App.css';

function AboutMe() {
    return (
        <div id="aboutme">
            <div id="aboutme-profile">
                <img src="images/aboutme-profile.png" alt="Profile" />
                <h2>Man Parvesh Singh Randhawa</h2>
                <p>CS Graduate Student</p>
                <p>The University Of Texas, Dallas</p>
            </div>
            <div id="aboutme-description">
                <h2>Biography</h2>
                <p>I am a Graduate student in the Department of Computer Science at the University of Texas at Dallasgraduating in May 202. J have a Bachelor of Technology degree from the Indian institue of Technology (IIT) Guwahati</p>
                <p>Previously, I wokred at Works Applications, Signapore as a Software Engineer, where i worked on delivering central libraries, micorservices and distributed multi-tenant architecture to thousands of developers inside the company who utilized them to build various products for our customers. Aside from work, I am also anopen-source enthusiast and have created projects that were listed in Github trending.</p>
                <p>My interests lie in solving problems related to large-scale distributed software systems.</p>
            </div>
        </div>
    );
}

export default AboutMe;
