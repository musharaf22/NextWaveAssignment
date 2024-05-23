import { useState } from "react";
import FilterNAv from "../../components/FilterNAv";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<string>("resources");
  return (
    <div className="w-full h-full my-10">
      <FilterNAv
        setActiveFilter={setActiveFilter}
        activeFilter={activeFilter}
      />
    </div>
  );
};

export default Home;
