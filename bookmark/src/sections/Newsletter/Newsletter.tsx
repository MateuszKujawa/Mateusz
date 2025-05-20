import { useState, useEffect } from "react";
import iconError from "../../assets/icons/icon-error.svg";

const Newsletter = () => {
  const [count, setCount] = useState(35000);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
    }, 20000 / 35000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <>
      <section id="newsletter" className="bg-blue-primary">
        <div className="max-w-lg mx-auto py-24">
          <p className="mb-6 text-lg tracking-widest text-center text-white uppercase">
            <span className="inline-block w-fit font-mono text-center">
              {count.toLocaleString()}+
            </span>
            <span className="font-mono"> Already Joined</span>
          </p>
          <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
            Stay up-to-date with what we're doing
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-center max-w-4xl mx-auto space-y-6 text-base px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0"
          >
            <div className="relative flex flex-col justify-between items-center mx-auto md:flex-row md:mx-0 gap-2">
              <div className="relative w-[300px]">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`flex-1 px-6 pt-3 pb-3 rounded-lg border-2 w-full bg-white focus:outline-none ${
                    error
                      ? "border-red-primary rounded-bl-none"
                      : email && /\S+@\S+\.\S+/.test(email)
                      ? " border-white"
                      : "border-white"
                  }`}
                  placeholder="Enter your email address"
                />
                {error && (
                  <img
                    src={iconError}
                    alt="Error Icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  />
                )}
                {error && (
                  <div className="absolute left-0 -mt-0.5 text-sm text-white bg-red-primary px-4 py-2 rounded-bl-md rounded-br-md">
                    Whoops, make sure it's an email
                  </div>
                )}
              </div>
              <input
                type="submit"
                className="inline-flex px-6 py-3 text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none border-2 border-transparent bg-red-primary hover:bg-white hover:text-red-primary hover:border-red-primary w-full md:w-fit"
                value="Contact Us"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
