import character from "../../assets/cover/Harika_Bitmoji.png"
// import helloBubble from "../../assets/cover/hello.png"
import Typewriter from "typewriter-effect";

function About() {

  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <p className="text-4xl"> Hello, I am</p>
          <div className="text-6xl text-gradient">
            {/* adding typewriter effect */}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Harika Patha")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
              // loop indefinitely
              options={{
                loop: true,
              }}
            />
          </div>  
        <img
            src={character}
            alt="character"
            className="fas fa-user-circle" style={{ fontSize: "96px", alignItems: "center" }}
          />  
        <p>
        Greetings! I'm Harika, 
        an experienced Software Development Engineer in Test (SDET) dedicated to upholding the utmost quality standards in software applications. 
        With three years of immersive experience, I excel in the dynamic realm of automated testing, 
        where I architect and implement robust test frameworks to ensure seamless functionality and exceptional user experiences. 
        My expertise lies in crafting automated scripts and harnessing advanced testing methodologies to unearth bugs and vulnerabilities, 
        empowering teams to deliver superior software solutions with confidence.
        </p>
      </div>
      </div>
    </section>
  );
}

export default About;
