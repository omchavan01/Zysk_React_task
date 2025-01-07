import { useState } from "react";

const FAQs = () => {
  const [faq, setFaq] = useState(null);

  const handleViewMore = (index) => {
    setFaq((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How does billing work?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  return (
    <div className="flex flex-col md:py-24 md:px-24 px-4 py-16 w-full place-self-center">
      <div className="text-center w-full">
        <div className="md:text-4xl text-3xl font-semibold text-headings-0">
          Frequently asked questions
        </div>
        <div className="text-primary-0 md:text-xl text-lg md:mt-5 mt-4">
          Everything you need to know about the product and billing.
        </div>
      </div>

      {/* faqs */}
      <div className="flex flex-col md:mt-16 mt-12 md:max-w-3/4 md:w-3/4 w-full justify-between mx-auto">
        {faqs.map((item, index) => {
          return (
            <div
              className="border-t border-gray-200 pb-9 first:border-t-0 py-6"
              key={index}
            >
              <div
                className="flex items-center justify-between gap-7 w-full cursor-pointer"
                onClick={() => handleViewMore(index)}
              >
                <div className="text-headings-0 font-semibold text-lg">
                  {item.question}
                </div>
                <div className="w-5 h-5">
                  <img
                    src={
                      faq === index
                        ? "/images/icons/minus.png"
                        : "/images/icons/plus.png"
                    }
                    alt={faq === index ? "Hide" : "Show"}
                  />
                </div>
              </div>
              {faq === index && (
                <div className="mt-2 text-primary-0 mr-14">{item.answer}</div>
              )}
            </div>
          );
        })}
      </div>

      {/* customer support */}
      <div className="flex flex-col md:px-24 px-4 py-9 md:mt-9 mt-4 bg-background_secondary-0 justify-center items-center">
        <div className="w-30 h-14">
          <img
            src="/images/users/three_group.png"
            alt="Three People"
            className="w-30 h-14"
          />
        </div>
        <div className="text-center my-9">
          <div className="text-xl font-semibold text-headings-0">
            Still have questions?
          </div>
          <div className="text-primary-0 md:text-lg text-base mt-2">
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our friendly team.
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="h-12 rounded-lg text-center font-semibold text-white bg-button_red-0 border-none px-5 place-content-center hover:bg-button_purple-0 hover:ease-in hover:duration-200 cursor-default flex justify-center items-center">
            Get in touch
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
