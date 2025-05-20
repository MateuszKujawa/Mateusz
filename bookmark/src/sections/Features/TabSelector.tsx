import type { Tab } from "./tabsData";

interface TabSelectorProps {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({
  tabs,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 md:border-b border-gray-secondary md:space-x-10 md:flex-row text-base">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`flex justify-center text-center cursor-pointer border-b md:border-b-0 hover:text-red-primary md:w-1/3 tab ${
            activeTab === index ? "text-black" : "text-gray-secondary"
          }`}
          onClick={() => setActiveTab(index)}
          data-target={`panel-${index + 1}`}
        >
          <div
            className={`py-5 ${
              activeTab === index
                ? "border-red-primary border-b-4 w-fit md:w-full"
                : "border-b-4 border-transparent"
            }`}
            data-target={`panel-${index + 1}`}
          >
            {tab.tabTitle}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabSelector;
