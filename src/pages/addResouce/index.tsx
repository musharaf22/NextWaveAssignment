import { useNavigate } from "react-router-dom";
import BackButton from "../utils/icons/BackButton";
import { useState } from "react";
import UploadIcon from "../utils/icons/UploadIcon";

interface IFormData {
  name: string;
  image: string;
  description: string;
  link: string;
}
const AddResource = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    image: "/4.png",
    description: "",
    link: "",
  });
  const inputClass =
    "border-2 border-gray-300 outline-none rounded-[4px] w-[320px] h-[40px] p-2";
  const labelClass = " text-gray-500 text-[12px] leading-[16px] mb-2";
  return (
    <div className="relative h-[94vh] overflow-hidden ">
      {/* // Go BAck Button  */}
      <div
        className="flex items-center p-4 absolute cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <BackButton /> <p className="text-[#7E858E] ml-2"> Go Back</p>
      </div>

      {/* // Contents  */}
      <div className="flex items-center justify-center md:justify-between h-full">
        {/* // Form div  */}
        <div className="w-[50%] flex flex-col justify-center items-center ">
          <p className="text-[26px] md:text-[32px] mb-10  font-rubik ">
            Add a Resource
          </p>

          <div className="flex flex-col items-start">
            <label htmlFor="" className={labelClass}>
              NAME
            </label>
            <input
              type="text"
              className={inputClass}
              placeholder="Ashoka Tano"
            />
          </div>

          <div className="flex flex-col items-start my-6">
            <label htmlFor="" className={labelClass}>
              LINK
            </label>
            <input
              type="text"
              className={`${inputClass} placeholder-[#0B69FF]`}
              placeholder="Ashoka Tano"
            />
          </div>

          <div className="flex flex-col items-start my-4 ">
            <label htmlFor="" className={labelClass}>
              DESCRIPTION
            </label>
            <textarea
              className={
                "border-2 border-gray-300 outline-none rounded-[4px] w-[320px] p-2"
              }
              rows={5}
              cols={10}
              draggable={true}
              placeholder="Ex. Building new Connectivity platform for the team"
            />
          </div>

          {/* // Change Photo  */}
          <div className="flex items-center md:w-[40%] m-auto  my-6">
            <img src={formData.image} alt="" />
            <div className="flex items-center ml-4 ">
              <UploadIcon />
              <p
                className={`${labelClass} my-2 ml-2 hover:underline cursor-pointer`}
              >
                Change photo
              </p>
            </div>
          </div>

          <button
            className={`p-2 bg-[#0B69FF] text-white w-[93px] h-[42px] rounded-[4px] mt-8`}
          >
            CREATE
          </button>
        </div>

        {/* // Image Div  */}
        <div className="w-[45%] md:flex justify-end my-6 hidden">
          <img src="/Group3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddResource;
