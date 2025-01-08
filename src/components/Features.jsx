const Features = () => {
  const features = [
    {
      image_url: "/images/features/message-chat-circle.png",
      feature_name: "Share team inboxes",
      feature:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      image_url: "/images/features/zap.png",
      feature_name: "Deliver instant answers",
      feature:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      image_url: "/images/features/chart-breakout-square.png",
      feature_name: "Manage your team with reports",
      feature:
        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
    {
      image_url: "/images/features/message-smile-circle.png",
      feature_name: "Connect with customers",
      feature:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      image_url: "/images/features/command.png",
      feature_name: "Connect the tools you already use",
      feature:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      image_url: "/images/features/message-heart-circle.png",
      feature_name: "Our people make the difference",
      feature:
        "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ];

  return (
    <div className="py-16 md:py-24 px-3 md:border-t w-11/12 place-self-center">
      <div className="text-center text-features_content-0 font-semibold w-full">
        Features
      </div>
      <div className="mt-3 sm:text-4xl text-3xl font-semibold text-headings-0 text-center">
        Analytics that feels like it&apos;s from the future.
      </div>
      <div className="mt-5 sm:text-xl text-lg text-primary-0 mx-auto text-center md:w-3/4 lg:w-4/6">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-10 justify-center items-start md:mt-6 mt-10 w-full">
        {features.map((item, index) => {
          return (
            <div
              className="container md:max-w-[350px] w-full px-2 flex flex-col justify-center items-center md:mt-8 mt-3"
              key={index}
            >
              <div className="border-2 rounded-lg border-gray-200 w-12 h-12 flex justify-center items-center">
                <img
                  src={item.image_url}
                  alt="Feature"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="mt-5 text-xl font-semibold text-headings-0 text-center">
                {item.feature_name}
              </div>
              <div className="mt-2 text-primary-0 mx-auto text-center">
                {item.feature}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
