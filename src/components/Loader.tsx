import { ClipLoader } from "react-spinners";

const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <div className="w-full  flex justify-center items-center h-[50vh]">
      <ClipLoader
        color={"#0B69FF"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
