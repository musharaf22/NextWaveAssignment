interface IProps {
  activeFilter: string;
  setActiveFilter: (v: string) => void;
}
const FilterNAv = ({ activeFilter, setActiveFilter }: IProps) => {
  return (
    <div className="flex justify-center">
      {["Resources", "Requests", "Users"].map((v) => {
        return (
          <div
            className={`${
              activeFilter === v?.toLowerCase()
                ? "bg-[#0B69FF] text-white"
                : "bg-[#D7DFE9] text-black"
            }  w-[200px] p-2 text-center rounded-[4px] cursor-pointer ease-in-out duration-500 `}
            onClick={() => setActiveFilter(v.toLowerCase())}
          >
            {v}
          </div>
        );
      })}
    </div>
  );
};

export default FilterNAv;
