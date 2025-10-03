import "./hero.css";
const Hero = () => {
     return (
          <div className="hero_container">
               <div className="hero">
                    <h1>grap up to 50% off on selected headphone</h1>
                    <button>shop now</button>
               </div>
               <img
                    className="hero_image"
                    src="/assets/images/music_photo.png"
                    alt="hero_image"
               />
          </div>
     );
};

export default Hero;
