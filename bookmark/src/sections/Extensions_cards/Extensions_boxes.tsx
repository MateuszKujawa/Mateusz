import chromeIcon from "../../assets/icons/logo-chrome.svg";
import firefoxIcon from "../../assets/icons/logo-firefox.svg";
import operaIcon from "../../assets/icons/logo-opera.svg";
import dots from "../../assets/images/bg-dots.svg";

const Extensions_boxes = () => {
  return (
    <section id="download-boxes" className="pb-16">
      <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-20 md:px-6 md:space-y-0 md:space-x-7 md:flex-row py-16">
        {/* Box 1 */}
        <div className="flex flex-col w-full pt-16 pb-6 space-y-4 text-center rounded-xl shadow-xl shadow-blue-900/10 md:w-1/3">
          <div>
            <div className="flex justify-center">
              <img src={chromeIcon} alt="" />
            </div>

            <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
            <p className="text-gray-secondary text-lg mt-1">Minimum Version 62</p>
          </div>

          <div className="pt-6 pb-2 mx-auto w-full">
            <img src={dots} alt="" className="w-full" />
          </div>

          <div className="px-4 lg:px-6 w-full">
            <a
              href="#"
              className="text-sm font-medium bg-blue-primary text-white w-full py-2.5 px-4 md:px-2 rounded border-blue-primary border-2 hover:bg-white hover:text-blue-primary duration-300 cursor-pointer transition block"
            >
              Add & Install Extension
            </a>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-full md:w-1/3">
          <div className="flex flex-col w-full pt-16 pb-6 space-y-4 text-center rounded-xl shadow-xl shadow-blue-900/10 md:mt-18">
            <div>
              <div className="flex justify-center">
                <img src={firefoxIcon} alt="" />
              </div>
              <h5 className="pt-6 text-xl font-bold">Add to Firefox</h5>
              <p className="text-gray-secondary text-lg mt-1">Minimum Version 55</p>
            </div>

            <div className="pt-6 pb-2 mx-auto w-full">
              <img src={dots} alt="" className="w-full" />
            </div>

            <div className="px-4 lg:px-6 w-full">
              <a
                href="#"
                className="text-sm font-medium bg-blue-primary text-white w-full py-2.5 px-4 md:px-2 rounded border-blue-primary border-2 hover:bg-white hover:text-blue-primary duration-300 cursor-pointer transition block"
              >
                Add & Install Extension
              </a>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="w-full md:w-1/3">
          <div className="flex flex-col w-full pt-16 pb-6 space-y-4 text-center rounded-xl shadow-xl shadow-blue-900/10 md:mt-32">
            <div>
              <div className="flex justify-center">
                <img src={operaIcon} alt="" />
              </div>
              <h5 className="pt-6 text-xl font-bold">Add to Opera</h5>
              <p className="text-gray-secondary text-lg mt-1">Minimum Version 46</p>
            </div>

            <div className="pt-6 pb-2 mx-auto w-full">
              <img src={dots} alt="" className="w-full" />
            </div>

            <div className="px-4 lg:px-6 w-full">
              <a
                href="#"
                className="text-sm font-medium bg-blue-primary text-white w-full py-2.5 px-4 md:px-2 rounded border-blue-primary border-2 hover:bg-white hover:text-blue-primary duration-300 cursor-pointer transition block"
              >
                Add & Install Extension
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extensions_boxes;
