import tab2 from "../../../assets/images/illustration-features-tab-2.svg";

const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-2xl p-6 md:p-12 z-10 mx-4 overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 focus:outline-none cursor-pointer p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15">
            <path
              fill="#000"
              fill-rule="evenodd"
              d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center text-center">
          <img src={tab2} alt="Illustration" className="mb-4 w-3/4 max-w-xs" />
          <h1 className="text-xl md:text-2xl">Welcome to our site!</h1>
          <a
            href="#"
            className="py-2 px-4 bg-blue-primary text-white rounded-sm hover:bg-darkblue-secondary duration-300 mt-2 text-sm md:text-base"
          >
            Check out our offer here!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
