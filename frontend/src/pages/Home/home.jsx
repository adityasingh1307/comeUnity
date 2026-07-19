import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-emerald-500 flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-7xl font-extrabold text-white">

          comeUnity

        </h1>

        <p className="mt-6 text-white text-xl max-w-3xl">

          Empowering communities through food donation,
          blood donation, volunteering,
          emergency assistance and AI.

        </p>

        <div className="mt-10 flex gap-5">

          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">

            Get Started

          </button>

          <button className="border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition">

            Learn More

          </button>

        </div>

      </section>
    </>
  );
}

export default Home;