const Footer = () => {
  const footer_resources = {
    Product: [
      "Overview",
      "Features",
      "Solutions",
      "Tutorials",
      "Pricing",
      "Releases",
    ],
    Company: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
    Resources: [
      "Blog",
      "Newsletter",
      "Events",
      "Help centre",
      "Tutorials",
      "Support",
    ],
    Use_cases: [
      "Startups",
      "Enterprise",
      "Government",
      "SaaS centre",
      "Marketplaces",
      "Ecommerce",
    ],
    Social: [
      "Twitter",
      "LinkedIn",
      "Facebook",
      "Github",
      "AngerList",
      "Dribble",
    ],
    Legal: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
  };

  const formatCategoryName = (category) => {
    return category.replace(/_/g, " ");
  };

  return (
    <div className="w-full">
      <div className="flex flex-row flex-wrap md:mx-20 mx-2 md:my-16 my-12 justify-evenly gap-6">
        {Object.keys(footer_resources).map((category, categoryIndex) => (
          <div key={category} className="flex flex-col md:w-40 w-32">
            <h3 className="font-semibold text-sm text-footer_gray-0 mb-4 cursor-default text-secondary-0">
              {formatCategoryName(category)}
            </h3>
            <ul className="text-base text-primary-0 font-semibold cursor-default">
              {footer_resources[category].map((item, index) => (
                <li key={index} className="mb-3 flex items-center gap-2">
                  <span className="hover:animate-flicker">{item}</span>
                  {categoryIndex === 0 && index === 2 && (
                    <span className="h-5 w-auto px-1 text-xs font-medium place-self-center border border-footer_new_resource-0 bg-[#ECFDF3] rounded-full text-[#067647] cursor-default animate-flicker:none">
                      New
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className="w-11/12 mx-auto" />
      <div className="w-full flex md:flex-row flex-col justify-between md:items-center py-12 mx-auto px-4 md:px-24 md:h-16">
        <img
          src="/images/icons/Zysk_logo.png"
          alt="Zysk Logo"
          className="w-20"
        />
        <div className="md:mt-0 mt-6 text-secondary-0">
          © 2077 zysktechnologies. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
