import { IoIosArrowDown } from "react-icons/io";
import ProfileDropdown from "./ProfileDropdown";
import ProductsDropdown from "./ProductsDropdown";
import ResourcesDropdown from "./ResourcesDropdown";
import { useState } from "react";

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isProductsClicked, setIsProductsClicked] = useState(false);
  const [isResourcesClicked, setIsResourcesClicked] = useState(false);
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const handleMenuClick = () => {
    setIsMenuClicked((prevState) => !prevState);
  };
  const handleProductsClick = () => {
    setIsProductsClicked((prevState) => !prevState);
  };
  const handleResourcesClick = () => {
    setIsResourcesClicked((prevState) => !prevState);
  };
  const handleProfileClick = () => {
    setIsProfileClicked((prevState) => !prevState);
  };

  return (
    <nav>
      {/* only for below sm screen sizes */}
      <div className="sm:hidden flex justify-between items-center border-b-[1.2px] border-gray-100 h-16 px-5">
        <img
          src="/images/icons/Zysk_logo.png"
          alt="Zysk Logo"
          className="w-20"
        />
        <button onClick={handleMenuClick}>
          {isMenuClicked ? (
            <img
              src="/images/icons/cross.png"
              alt="Close Menu"
              className="w-4 h-4"
            />
          ) : (
            <img
              src="/images/icons/three_bars.png"
              alt="Open Menu"
              className="w-5 h-5"
            />
          )}
        </button>
      </div>

      {/* only for above md screen sizes */}
      <div className="hidden md:flex justify-between items-center h-20 py-4 px-8 mx-10">
        <div className="flex items-center gap-8 ml-10">
          <img
            src="/images/icons/Zysk_logo.png"
            alt="Zysk Logo"
            className="w-22"
          />
          <div className="flex items-center gap-8 text-primary-0 font-semibold ml-2 cursor-default">
            <div>Home</div>

            {/* Products */}
            <div
              className="flex items-center gap-2 cursor-pointer relative"
              onClick={handleProductsClick}
            >
              {isProductsClicked ? (
                <ProductsDropdown />
              ) : (
                <div className="flex items-center gap-2 cursor-pointer">
                  Products <IoIosArrowDown />
                </div>
              )}
            </div>

            {/* Resources */}
            <div
              className="flex items-center gap-2 cursor-pointer relative"
              onClick={handleResourcesClick}
            >
              {isResourcesClicked ? (
                <ResourcesDropdown />
              ) : (
                <div className="flex items-center gap-2 cursor-pointer">
                  Resources <IoIosArrowDown />
                </div>
              )}
            </div>
            <div className="cursor-default">Pricing</div>
          </div>
        </div>

        {/* Profile Photo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={handleProfileClick}
        >
          {isProfileClicked ? (
            <ProfileDropdown />
          ) : (
            <img
              src="/images/users/Olivia_Rhye.jpg"
              alt="Olivia Rhye"
              className="rounded-full w-10 h-10 object-cover"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
