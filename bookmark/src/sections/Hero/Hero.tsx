import heroImage from "../../assets/images/illustration-hero.svg";
import PrimaryBtn from "../../components/ui/PrimaryBtn";
import SecondaryBtn from "../../components/ui/SecondaryBtn";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="container flex flex-col-reverse mx-auto max-w-7xl p-6 lg:flex-row lg:mb-0">
          <div className="flex flex-col space-y-8 mt-18 lg:mt-16 lg:w-1/2">
            <h1 className="text-3xl font-semibold text-center lg:text-5xl lg:text-left px-4 md:px-0">
              A Simple Bookmark Manager
            </h1>
            <p className="max-w-md mx-auto text-lg text-center text-gray-secondary lg:text-left lg:mt-0 lg:mx-0">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>

            <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
              <PrimaryBtn>Get It On Chrome</PrimaryBtn>
              <SecondaryBtn>Get It On Firefox</SecondaryBtn>
            </div>
          </div>

          <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
            <div className="w-[2000px] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[300px] xl:h-[400px] left-[20%] md:left-[20%] lg:left-[30%] absolute top-[3rem] sm:top-[7rem] lg:top-[12rem] xl:top-[8rem] rounded-l-full bg-blue-primary"></div>
            <img
              src={heroImage}
              alt="Hero image"
              className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
