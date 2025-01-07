const Dashboard = () => {
  return (
    <div className="sm:mt-24 mx-3 sm:mx-10 mt-16 flex justify-center items-center flex-col">
      {/* checkout dashboard */}
      <div className="sm:w-[345px] w-auto h-8 sm:bg-[#fffbfb] bg-[#F9F5FF] border-2 sm:border-features_borders-0 border-features_borders_sm-0 rounded-2xl text-features_content-0 flex flex-row justify-center items-center sm:text-sm text-xs font-medium cursor-default">
        <div className="sm:w-[100px] w-[86px] h-6 border-2 sm:border-features_borders-0 border-features_borders_sm-0 rounded-2xl bg-white px-1 sm:m-1 m-0.5 flex justify-center items-center">
          New Feature
        </div>
        <div className="flex flex-row gap-1 px-1">
          <div>Check out the team dashboard</div>
          <img
            src="/images/icons/right-arrow.png"
            alt="Right Arrow"
            className="w-3 h-3 place-self-center hidden sm:block"
          />
          <img
            src="/images/icons/right-arrow-sm.png"
            alt="Right Arrow"
            className="w-3 h-3 place-self-center sm:hidden"
          />
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="mt-5 sm:text-5xl text-4xl font-semibold text-headings-0 text-center">
        Beautiful analytics to grow smarter
      </div>
      <div className="mt-6 sm:text-xl text-lg text-primary-0 mx-auto text-center sm:w-2/3 sm:mx-20 md:w-3/4 lg:w-4/6">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </div>

      {/* Buttons */}
      <div className="flex md:flex-row flex-col md:w-auto w-full mt-12 gap-3 justify-center">
        <div className="h-12 w-auto rounded-3xl text-md font-semibold text-headings-0 flex flex-row justify-center items-center gap-2 border-2 border-gray-300 px-4 md:order-1 order-2 cursor-default">
          <img
            src="/images/icons/play-button.png"
            alt="Play button"
            className="w-4 h-4 place-self-center"
          />
          Demo
        </div>
        <div className="h-12 w-auto rounded-3xl text-md font-semibold text-center text-white bg-button_red-0 border-none px-4 place-content-center hover:bg-button_purple-0 hover:ease-in hover:duration-200 order-1 cursor-default flex justify-center items-center">
          Sign up
        </div>
      </div>

      {/* Chat Image */}
      <div className="md:border-none border-b md:pb-0 pb-14">
        <div className="mt-16 md:border-8 border-4 border-headings-0 md:rounded-2xl rounded-lg md:overflow-hidden">
          <img
            src="/images/chat_screen.png"
            alt="Chat Screen"
            className="md:rounded-lg rounded-base"
          />
        </div>
      </div>

      {/* Companies */}
      <div className="z-20 bg-white md:w-full md:py-24 pb-14 text-center md:-mt-32 w-full mx-auto">
        <div className="text-primary-0">
          Join 4,000+ companies already growing.
        </div>
        <div className="flex md:flex-row flex-wrap gap-6 justify-center mt-8">
          <img
            src="/images/companies/Boltshift.png"
            alt="Boltshift"
            className="w-auto md:h-12 h-8"
          />
          <img
            src="/images/companies/Lightbox.png"
            alt="Lightbox"
            className="w-auto md:h-12 h-8"
          />
          <img
            src="/images/companies/FeatherDev.png"
            alt="FeatherDev"
            className="w-auto md:h-12 h-8"
          />
          <img
            src="/images/companies/Spherule.png"
            alt="Spherule"
            className="w-auto md:h-12 h-8"
          />
          <img
            src="/images/companies/GlobalBank.png"
            alt="GlobalBank"
            className="w-auto md:h-12 h-8"
          />
          <img
            src="/images/companies/Nietzsche.png"
            alt="Nietzsche"
            className="w-auto md:h-12 h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
