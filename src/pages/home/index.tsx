import { useState } from "react";
import Card from "../../components/Card";
import FilterNAv from "../../components/FilterNAv";
import homeData from "../utils/demoData/homepageData";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<string>("resources");
  return (
    <div className="w-full my-10 ">
      <div className="w-[80%] m-auto p-4 h-full ">
        <FilterNAv
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />
        <input
          type="text"
          name=""
          id=""
          className="p-2 w-[40%] border border-gray-200 rounded-[4px] my-10 outline-none"
          placeholder="Search"
        />

        {/* //  */}
        <div className="grid grid-cols-3 gap-4">
          {homeData.map((data) => {
            return <Card data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
