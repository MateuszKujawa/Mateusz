import image1 from "../../assets/images/illustration-features-tab-1.svg";
import image2 from "../../assets/images/illustration-features-tab-2.svg";
import image3 from "../../assets/images/illustration-features-tab-3.svg";

export type Tab = {
  title: string;
  tabTitle: string;
  image: string;
  description: string;
};

export const tabs: Tab[] = [
  {
    title: "Bookmark in one click",
    tabTitle: "Simple Bookmarking",
    image: image1,
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    title: "Intelligent search",
    tabTitle: "Speedy Searching",
    image: image2,
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    title: "Share your bookmarks",
    tabTitle: "Easy Sharing",
    image: image3,
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];
