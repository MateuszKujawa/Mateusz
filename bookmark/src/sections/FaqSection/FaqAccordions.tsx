import faqData from "./faqData";
import PrimaryBtn from "../../components/ui/PrimaryBtn";

type FaqItem = {
  question: string;
  answer: string;
};

const FaqAccordions = () => {
  return (
    <section id="faq-accordions">
      <div className="container mx-auto px-6 mb-32">
        <div className="max-w-2xl m-8 mx-auto overflow-hidden">
          {faqData.map((item: FaqItem, index: number) => (
            <div
              className={`py-1 border-b border-gray-secondary outline-none group ${
                index === 0 ? "border-t" : ""
              }`}
              tabIndex={index + 1}
              key={index}
            >
              <div className="flex items-center justify-between py-3 text-black transition duration-500 cursor-pointer group ease pr-4">
                <div className="transition duration-500 ease group-hover:text-red-500 group-focus:text-[hsl(0,94%,66%)] text-lg">
                  {item.question}
                </div>
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-[hsl(0,94%,66%)] text-[#5267DF]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                    className="transition duration-500 ease"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-secondary leading-9">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto w-fit py-8">
          <PrimaryBtn>More Info</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordions;
