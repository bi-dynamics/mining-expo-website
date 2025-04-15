import PageBanner from "@/components/PageBanner";

function delegateRegistrationPage() {
  return (
    <main>
      <PageBanner title="Conference Registration" />
      <section className="flex flex-col gap-16 items-center justify-center w-[90%] xl:w-[80%] h-fit mx-auto py-16">
        <h2 className=" text-5xl font-poppins font-bold text-black text-center">
          Conference Registration Opening Soon
        </h2>
        <p>
          Online registrations are currently closed and will be opening soon.
        </p>
      </section>
    </main>
  );
}

export default delegateRegistrationPage;
