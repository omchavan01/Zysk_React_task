const ProfileDropdown = () => {
  return (
    <div>
      <img
        src="/images/users/Olivia_Rhye.jpg"
        alt="Olivia Rhye"
        className="rounded-full w-10 h-10 object-cover border-4 border-gray-200"
      />
      <div className="absolute right-20 mt-2 px-3 py-2 w-60 bg-white border border-gray-200 rounded-md shadow-lg z-20">
        {/* Profile Header */}
        <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
          <div className="relative">
            <img
              src="/images/users/Olivia_Rhye.jpg"
              alt="Olivia Rhye"
              className="rounded-full w-10 h-10 object-cover"
            />
            <img
              src="/images/navbar/green_dot.png"
              alt="Green Dot"
              className="w-3 h-3 absolute bottom-1 right-1.5 translate-x-1/2 translate-y-1/2"
            />
          </div>
          <div>
            <h1 className="text-headings-0 font-semibold text-sm">
              Olivia Rhye
            </h1>
            <p className="text-sm text-primary-0">olivia@untitledui.com</p>
          </div>
        </div>

        {/* first block */}
        <div className="flex flex-col my-1 border-b">
          <div className="flex flex-row gap-2 hover:rounded-md hover:bg-nav_dropdown-0 p-2 place-items-center">
            <img
              src="/images/navbar/user_profile.png"
              alt="View"
              className="w-4 h-4 place-content-center"
            />
            <h1 className="text-headings-0">View Profile</h1>
          </div>
          <div className="flex flex-row gap-2 hover:rounded-md hover:bg-nav_dropdown-0 p-2 place-items-center">
            <img
              src="/images/navbar/setting.png"
              alt="Settings"
              className="w-4 h-4 place-content-center"
            />
            <h1 className="text-headings-0">Settings</h1>
          </div>
          <div className="flex flex-row gap-2 hover:rounded-md hover:bg-nav_dropdown-0 p-2 place-items-center">
            <img
              src="/images/navbar/shortcuts.png"
              alt="Shortcuts"
              className="w-4 h-4 place-content-center"
            />
            <h1 className="text-headings-0">Keyboard shortcuts</h1>
          </div>
        </div>
        {/* second block */}
        <div className="flex flex-col my-1 border-b">
          <div className="flex flex-row gap-2 hover:rounded-md hover:bg-nav_dropdown-0 p-2 place-items-center">
            <img
              src="/images/navbar/company-profile.png"
              alt="Company"
              className="w-4 h-4 place-content-center"
            />
            <h1 className="text-headings-0">Company Profile</h1>
          </div>
          <div className="flex flex-row gap-2 hover:rounded-md hover:bg-nav_dropdown-0 p-2 place-items-center">
            <img
              src="/images/navbar/team.png"
              alt="Team"
              className="w-4 h-4 place-content-center"
            />
            <h1 className="text-headings-0">Team</h1>
          </div>
          <div className="flex flex-row gap-2 hover:rounded-md hover:bg-nav_dropdown-0 p-2 place-items-center">
            <img
              src="/images/navbar/invite.png"
              alt="Invite"
              className="w-4 h-4 place-content-center"
            />
            <h1 className="text-headings-0">Invite colleagues</h1>
          </div>
        </div>
        {/* third block */}
        <div className="flex flex-col my-1 border-b">
          <div className="flex flex-row gap-2 hover:rounded-md hover:bg-nav_dropdown-0 p-2 place-items-center">
            <img
              src="/images/navbar/changelog.png"
              alt="Changelog"
              className="w-4 h-4 place-content-center"
            />
            <h1 className="text-headings-0">Changelog</h1>
          </div>
          <div className="flex flex-row gap-2 hover:rounded-md hover:bg-nav_dropdown-0 p-2 place-items-center">
            <img
              src="/images/navbar/community.png"
              alt="Community"
              className="w-4 h-4 place-content-center"
            />
            <h1 className="text-headings-0">Slack community</h1>
          </div>
          <div className="flex flex-row gap-2 hover:rounded-md hover:bg-nav_dropdown-0 p-2 place-items-center">
            <img
              src="/images/navbar/support.png"
              alt="Support"
              className="w-4 h-4 place-content-center"
            />
            <h1 className="text-headings-0">Support</h1>
          </div>
          <div className="flex flex-row gap-2 hover:rounded-md hover:bg-nav_dropdown-0 p-2 place-items-center">
            <img
              src="/images/navbar/api.png"
              alt="API"
              className="w-4 h-4 place-content-center"
            />
            <h1 className="text-headings-0">API</h1>
          </div>
        </div>
        {/* logout */}
        <div className="flex flex-row gap-2 hover:rounded-md hover:bg-nav_dropdown-0 p-2 place-items-center">
          <img
            src="/images/navbar/logout.png"
            alt="Logout"
            className="w-4 h-4 place-content-center"
          />
          <h1 className="text-headings-0">Log out</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
