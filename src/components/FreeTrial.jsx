const FreeTrial = () => {
  return (
    <div className="flex flex-col md:px-24 px-4 md:py-24 py-16 bg-background_secondary-0 justify-center place-items-center">
      <div className="text-center mb-10">
        <div className="text-3xl md:text-4xl font-semibold text-headings-0">
          Start your free trial
        </div>
        <div className="text-primary-0 md:text-xl text-lg mt-4 md:mt-5">
          Join over 4,000+ startups already growing with Untitled.
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:w-auto w-full gap-3 font-semibold">
        <div className="h-12 rounded-lg text-headings-0 flex flex-row justify-center items-center gap-2 border-2 border-gray-300 px-4 md:order-1 order-2 cursor-default">
          Learn More
        </div>
        <div className="h-12 rounded-lg text-center text-white bg-button_red-0 border-none px-4 flex justify-center items-center hover:bg-button_purple-0 hover:ease-in hover:duration-200 order-1 cursor-default">
          Get started
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
