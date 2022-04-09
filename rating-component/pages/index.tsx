import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center">
      <div className="w-72 h-72 rounded-2xl bg-gradient-to-b from-gray-700 to-gray-900 p-4">
        <Circle text="*" />
        <h1 className="text-white mt-4">How did we do?</h1>
        <h2 className="font-thin text-xs text-gray-400 mt-2">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </h2>

        <div className="flex justify-evenly mt-4">
          {
            //TODO: Adding Hover
          }
          <Circle text="1" />
          <Circle text="2" />
          <Circle text="3" />
          <Circle text="4" />
          <Circle text="5" />
        </div>
        <button
          className="bg-orange-500 rounded-full w-full h-10 mt-4 text-white
					hover:bg-gray-600 "
        >
          Submit
        </button>
      </div>
    </div>
  );
};

type Props = {
  text: string;
};
const Circle: NextPage<Props> = ({ text }) => {
  const [active, setActive] = useState(false);
  return (
    <div>
      {active ? (
        <div
          className="rounded-full w-8 h-8 bg-orange-500 flex justify-center items-center text-white
			hover:bg-gray-900 cursor-pointer"
          onClick={() => setActive(!active)}
        >
          {text}
        </div>
      ) : (
        <div
          className="rounded-full w-8 h-8 bg-gray-900 flex justify-center items-center text-white
			hover:bg-orange-500 cursor-pointer"
          onClick={() => setActive(!active)}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Home;
