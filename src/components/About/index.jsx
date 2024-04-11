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
        a seasoned Software Manual Test Engineer driven by a passion
        for ensuring the highest quality in software applications.
        With 3 years of hands-on experience, I specialize in the meticulous art of manual testing, 
        where each click and keystroke is an exploration to 
        guarantee a flawless user experience. 
        </p>
      </div>
      </div>
    </section>
  );
}

export default About;
