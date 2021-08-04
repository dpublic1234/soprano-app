import './App.css';

function AboutMe() {

    var currentCarouselImage = 1;
    function setCarouselImage(move) {
        let imageList = document.getElementsByClassName("carousel-image-container");

        Array.prototype.forEach.call(imageList, function(element) {
            element.style.display = 'none';
        });

        const MAX_CAROUSEL_IMAGES = imageList.length;
        if (move === "back") {
            currentCarouselImage = (currentCarouselImage === 1) ? MAX_CAROUSEL_IMAGES : currentCarouselImage - 1;
        } else {
            currentCarouselImage = (currentCarouselImage === MAX_CAROUSEL_IMAGES) ? 1 : currentCarouselImage + 1;
        }

        console.log(currentCarouselImage);
        imageList[currentCarouselImage - 1].style.display = 'inline-block';
    }

    const carouselDataJson = [{
        title: "Website Landing",
        imgsrc: "images/website-landing.png",
        description: "Landing Website"
    },
    {
        title: "Modern Landing",
        imgsrc: "images/app-modern-landing.png",
        description: "Landing Modern App Page"
    }
    ];

    function getCarouselSet(id, imgSrc, title, description) {
        return (
            <div key={"carousel-image-"+id} id={"carousel-image-"+id} className="carousel-image-container">
                <p className="carousel-title">{title}</p>
                <img src={imgSrc} alt={title} width="100%" />
                <p className="carousel-description">{description}</p>
            </div>
        );
    }

    const MATRIX_SIZE = 3;
    const matrixArray = Array.from(Array(MATRIX_SIZE).keys());

    return (
        <>
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
            <div id="aboutme-carousel">
                <span className="carousel-arrow" onClick={() => setCarouselImage("back")}>&lt;</span>
                {
                    carouselDataJson.map((obj, id)=> {
                        return getCarouselSet(id, obj.imgsrc, obj.title, obj.description);
                    })
                }
                <span className="carousel-arrow" onClick={() => setCarouselImage("front")}>&gt;</span>
            </div>
            <table>
        <tbody>
          {matrixArray.map((rowVal, i) => {
            return (
              <tr key={"row" + i}>
                {matrixArray.map((cellVal, j) => {
                  let value = j*MATRIX_SIZE + (i+1);
                  return (<td key={"cell-"+i+j} >{value}</td>);
                })}
              </tr>)
          })}
        </tbody>
      </table>
        </>
    );
}

export default AboutMe;
