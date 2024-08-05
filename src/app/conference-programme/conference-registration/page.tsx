import PageBanner from "@/components/PageBanner";

function delegateRegistrationPage() {
  return (
    <main>
      <PageBanner title="Conference Registration" />
      <section className="flex flex-col gap-16 items-center justify-center w-[90%] xl:w-[80%] h-fit mx-auto py-16">
        <h2 className=" text-5xl font-poppins font-bold text-black text-center">
          Online Registration Closed
        </h2>
        <p>
          Physical registrations still possible at conference venue. Entry is
          free of charge.
        </p>
      </section>
    </main>
  );
}

export default delegateRegistrationPage;
