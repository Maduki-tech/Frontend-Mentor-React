import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center">
      <div className="w-72 h-72 rounded-2xl bg-gradient-to-b from-gray-700 to-gray-900 p-4">
        <div className="rounded-full w-11 h-11 bg-gray-900 flex justify-center items-center text-white">
          *
        </div>
      </div>
    </div>
  );
};

export default Home;
