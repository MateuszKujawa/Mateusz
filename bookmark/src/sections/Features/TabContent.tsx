import type { Tab } from "./tabsData";
import PrimaryBtn from "../../components/ui/PrimaryBtn";

interface TabContentProps {
  tab: Tab;
}

const TabContent: React.FC<TabContentProps> = ({ tab }) => {
  return (
    <div className="flex flex-col py-5 md:flex-row md:space-x-7">
      <div className="flex justify-center md:w-1/2">
        <img src={tab.image} alt={tab.title} className="relative z-10" />
      </div>

      <div className="flex flex-col space-y-8 w-full md:w-1/2 justify-center md:items-start items-center">
        <h3 className="mt-28 text-3xl font-semibold text-center md:mt-0 md:text-left">
          {tab.title}
        </h3>
        <p className="max-w-md text-center md:text-left text-gray-secondary text-lg">
          {tab.description}
        </p>
        <div className="hidden md:block">
          <PrimaryBtn>More Info</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
