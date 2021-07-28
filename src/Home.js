import './App.css';

function Home() {
    var xStart = null;
    var yStart = null;
    var lastSwipe = Date.now();
    const MIN_WAIT_TIME = 1 * 1000;

    function handleSwipeStart(evt) {
        xStart = evt.touches[0].clientX;
        yStart = evt.touches[0].clientY;
    };

    function handleSwipeEnd(evt) {
        if (!xStart || !yStart || (Date.now() - lastSwipe) <= MIN_WAIT_TIME) {
            return;
        }

        var xEnd = evt.touches[0].clientX;
        var yEnd = evt.touches[0].clientY;

        var xDiff = xStart - xEnd;
        var yDiff = yStart - yEnd;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                setCarouselImage("back");
            } else {
                setCarouselImage("back");
            }
        }

        xStart = null;
        yStart = null;
        lastSwipe = Date.now();
    }

    document.addEventListener('touchstart', handleSwipeStart, false);
    document.addEventListener('touchmove', handleSwipeEnd, false);

    var currentCarouselImage = 1;
    const MAX_CAROUSEL_IMAGES = 4;
    function setCarouselImage(move) {
        let imageList = document.querySelectorAll("figure");
        imageList.forEach(element => {
          element.style.display = 'none';
        });

        if (move === "back") {
          currentCarouselImage = ( currentCarouselImage === 1 ) ? MAX_CAROUSEL_IMAGES: currentCarouselImage - 1;
        } else {
          currentCarouselImage = ( currentCarouselImage === MAX_CAROUSEL_IMAGES ) ? 1: currentCarouselImage + 1;
        }
        imageList[currentCarouselImage - 1].style.display = 'inline-block';
    }

    return (
        <div id="home">
            <div id="intro-container" className="section-container">
                <img src="images/intro-bg.png" alt="Intro Background" width="100%" />
                <div id="intro-content">
                    <h1>Essential Mobile App Landing for Workspaces</h1>
                    <p>A mobile app landing page is important and essential for right amount of information about your product. Start increasing your user base upon the launch of your product</p>
                </div>
                <button>Explore Demos &#8594;</button>
            </div>
            <hr width="70%" />
            <div id="explore-demos" className="section-container">
                <h2>Explore our demos</h2>
                <p>Explore our landing Page demos on different kind of topics. More Demos are coming soon.</p>
                <div id="demo-carousel">
                    <span className="arrows" onClick={()=>setCarouselImage("back")}>&lt;</span>
                    <figure>
                        <img src="images/website-landing.png" alt="Website Landing" width="100%" />
                        <figcaption>Website Landing</figcaption>
                    </figure>
                    <figure style={{ display: 'none' }}>
                        <img src="images/app-modern-landing.png" alt="App Modern Landing" width="100%" />
                        <figcaption>App Modern Landing</figcaption>
                    </figure>
                    <figure style={{ display: 'none' }}>
                        <img src="images/website-landing.png" alt="Website Landing" width="100%" />
                        <figcaption>Website Landing</figcaption>
                    </figure>
                    <figure style={{ display: 'none' }}>
                        <img src="images/app-modern-landing.png" alt="App Modern Landing" width="100%" />
                        <figcaption>App Modern Landing</figcaption>
                    </figure>
                    <span className="arrows" onClick={()=>setCarouselImage("front")}>&gt;</span>
                </div>
            </div>
            <hr width="70%" />
            <div id="business-section" className="section-container">
                <h2>Start your business journey with Soprano</h2>
                <p>Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business.</p>
                <div id="business-journey">
                    <div>
                        <img src="images/globe.svg" alt="Globe" width="50%" />
                        <h2>Move Your Business Online</h2>
                        <p>Create a business, whether you’ve got a fresh idea or are looking for a new way to make money.</p>
                    </div>
                    <div>
                        <img src="images/switch-to-soprano.svg" alt="Switch to Soprano" width="60%" />
                        <h2>Switch to Soprano</h2>
                        <p>Bring your business to Soprano, no matter which ecommerce platform you’re currently using.</p>
                    </div>
                    <div>
                        <img src="images/benefits.svg" alt="Enjoy your benefits" width="50%" />
                        <h2>Enjoy ur benefits</h2>
                        <p>Get set up with the help of a trusted freelancer or agency from the Shopify Experts Marketplace.</p>
                    </div>
                </div>
            </div>
            <hr width="70%" />
            <div id="clients" className="section-container">
                <h2>What Clients say about our product</h2>
                <div>
                    <div className="clients-card">
                        <div>
                            <img src="images/profile-1.png" alt="Profile" />
                            <h2>Allen Jones</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="clients-card">
                        <div>
                            <img src="images/profile-2.png" alt="Profile" />
                            <h2>Allen Jones</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <div id="newsletter" className="section-container">
                <div id="newsletter-content">
                    <h1>Subscribe our newsletter</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore</p>
                </div>
                <div id="email-container">
                    <input type="email" placeholder="Email Address" />
                    <button>Get Access</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
