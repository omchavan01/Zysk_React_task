import { IoIosArrowDown } from "react-icons/io";

const ResourcesDropdown = () => {
  return (
    <div>
      <div className="flex items-center gap-2 cursor-pointer">
        Resources <IoIosArrowDown />
      </div>
      {/* Dropdown */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 container border border-gray-300 rounded-md grid grid-cols-2 mt-2 w-[550px] cursor-default z-20 bg-white shadow-lg">
        {/* left side */}
        <div className="flex flex-col p-4">
          <div className="flex flex-row gap-2 p-2 hover:rounded-md hover:bg-nav_dropdown-0">
            <img src="/images/icons/blog.png" alt="Blog" className="w-6 h-6" />
            <div>
              <h1 className="text-black">Blog</h1>
              <p className="text-sm font-normal mt-1">
                The latest industry news, updates and info.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-2 p-2 hover:rounded-md hover:bg-nav_dropdown-0">
            <img
              src="/images/icons/customer_stories.png"
              alt="Customer stories"
              className="w-6 h-6"
            />
            <div>
              <h1 className="text-black">Customer stories</h1>
              <p className="text-sm font-normal mt-1">
                Learn how our customers are making big changes.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-2 p-2 hover:rounded-md hover:bg-nav_dropdown-0">
            <img
              src="/images/icons/play-button-purple.png"
              alt="Video tutorials"
              className="w-6 h-6"
            />
            <div>
              <h1 className="text-black">Video tutorials</h1>
              <p className="text-sm font-normal mt-1">
                Get up and running on new features and techniques.
              </p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="bg-[#f9f9f9] rounded-md p-4">
          <div className="flex flex-col">
            <div className="w-full h-28">
              <img
                src="/images/users/Lana_Steiner.webp"
                alt="Lana Steiner"
                className="rounded-md w-full h-full object-cover"
              />
            </div>

            <div className="mt-4">
              <h1 className="text-black font-semibold">
                We&apos;ve just released an update!
              </h1>
              <p className="text-sm font-normal mt-1">
                Check out the all new dashboard view. Pages now load faster.
              </p>
            </div>

            <div className="text-sm mt-3">
              <span className="text-primary-0 hover:text-headings-0 mr-4">
                Dismiss
              </span>
              <span className="text-button_purple-0">Changelog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesDropdown;
