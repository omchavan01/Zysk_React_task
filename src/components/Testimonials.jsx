const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center place-items-center bg-background_secondary-0 md:py-24 md:px-24 px-4 py-16">
      <img
        src="/images/companies/Sisyphus.png"
        alt="Sisyphus"
        className="w-auto h-10"
      />

      <div className="mt-9 md:text-5xl text-3xl font-medium text-headings-0 text-center">
        We&apos;ve been using Untitled to kick start every new project and
        can&apos;t imagine working without it.
      </div>

      <div className="mt-9 text-center flex flex-col justify-center items-center">
        <img
          src="/images/users/Candice_Wu.webp"
          alt="Candice Wu"
          className="rounded-full w-16 h-16 object-cover"
        />
        <div className="text-headings-0 font-semibold text-lg mt-4">
          Candice Wu
        </div>
        <div className="text-primary-0 mt-1">Product Manager, Sisyphus</div>
      </div>
    </div>
  );
};

export default Testimonials;
