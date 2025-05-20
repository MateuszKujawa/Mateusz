import { useState } from "react";
import TabSelector from "./TabSelector";
import TabContent from "./TabContent";
import { tabs } from "./tabsData";

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section id="features">
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div className="container mx-auto mt-16 px-6">
            <h2 className="mb-6 text-4xl font-semibold text-center">
              Features
            </h2>
            <p className="max-w-lg mx-auto text-center text-gray-secondary text-lg">
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </div>
          <div className="container relative mx-auto my-12 px-6">
            <TabSelector
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabContent tab={tabs[activeTab]} />
          </div>

          <div className="w-[2000px] h-[200px] sm:h-[350px] md:h-[280px] lg:h-[300px] xl:h-[350px] right-[20%] md:right-[58%] absolute top-[35.1rem] sm:top-[32.5rem] md:top-[24.3rem] lg:top-[24.7rem] xl:top-[25.3rem] rounded-r-full bg-blue-primary"></div>
        </div>
      </section>
    </>
  );
};

export default Features;
