const Blogs = () => {
  const blogs = [
    {
      image_url: "/images/blogs/UX_review.png",
      domain: "Design",
      title: "UX Review Presentations",
      blog_content:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      profile_photo_url: "/images/users/Olivia_Rhye.jpg",
      author_name: "Olivia Rhye",
      date: "20 Jan 2024",
    },
    {
      image_url: "/images/blogs/Migrating_linear.png",
      domain: "Product",
      title: "Migrating to Linear 101",
      blog_content:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      profile_photo_url: "/images/users/Phoenix_Baker.webp",
      author_name: "Phoenix Baker",
      date: "19 Jan 2024",
    },
    {
      image_url: "/images/blogs/API_stack.png",
      domain: "Software Engineering",
      title: "Building your API stack",
      blog_content:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      profile_photo_url: "/images/users/Lana_Steiner.webp",
      author_name: "Lana Steiner",
      date: "18 Jan 2024",
    },
  ];

  return (
    <div className="py-16 md:py-24 md:px-16 px-4 w-full mx-auto">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col">
          <div className="text-features_content-0 font-semibold mb-3 text-sm md:text-base">
            Our Blog
          </div>
          <div className="sm:text-4xl text-3xl font-semibold text-headings-0 md:mb-5 mb-4">
            Latest blog posts
          </div>
          <div className="sm:text-xl text-lg text-primary-0">
            Tool and strategies modern teams need to help their companies grow.
          </div>
        </div>

        <div className="flex justify-end">
          <div className="hidden sm:block h-12 w-auto rounded-lg text-center font-semibold text-white bg-button_red-0 border-none px-5 place-content-center hover:bg-button_purple-0 hover:ease-in hover:duration-200 cursor-default">
            View All Posts
          </div>
        </div>
      </div>

      {/* blogs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-12 md:mt-16 mt-12 w-full">
        {blogs.map((item, index) => {
          return (
            <div className="h-auto" key={index}>
              <img
                src={item.image_url}
                alt="Blog Image"
                className="w-full h-60 object-cover"
              />

              <div className="flex flex-col mt-6">
                <div className="text-features_content-0 font-semibold text-sm mb-2">
                  {item.domain}
                </div>

                <div className="flex flex-row justify-between mb-2">
                  <div className="text-headings-0 font-semibold text-2xl">
                    {item.title}
                  </div>
                  <img
                    src="/images/icons/right-up.png"
                    alt="Right up arrow"
                    className="w-6 h-6"
                  />
                </div>

                <div className="text-primary-0">{item.blog_content}</div>

                <div className="flex flex-row gap-3 mt-6">
                  <img
                    src={item.profile_photo_url}
                    alt="Profile Photo"
                    className="rounded-full w-10 h-10 object-cover"
                  />
                  <div className="flex flex-col text-sm">
                    <div className="text-headings-0 font-semibold">
                      {item.author_name}
                    </div>
                    <div className="text-headings-0">{item.date}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* mobile view button */}
      <div className="md:hidden block h-12 mt-12 w-auto mx-auto rounded-lg text-center font-semibold text-white bg-button_red-0 border-none px-5 py-3 place-content-center hover:bg-button_purple-0 hover:ease-in hover:duration-200 cursor-default">
        View All Posts
      </div>
    </div>
  );
};

export default Blogs;
