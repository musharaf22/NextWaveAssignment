import { useNavigate } from "react-router-dom";
import BackButton from "../utils/icons/BackButton";
import { ChangeEvent, useState } from "react";
import UploadIcon from "../utils/icons/UploadIcon";
import { toast } from "react-toastify";
import {
  IFormData,
  IValidate,
  initialFormValues,
  validateInitialValues,
} from "./dtos/interface.addResource";
import { getBase64 } from "../utils/common/genBase64";

const AddResource = () => {
  const navigate = useNavigate();

  // Managing States
  const [formData, setFormData] = useState<IFormData>(initialFormValues);

  const [validation, setValidation] = useState<IValidate>(
    validateInitialValues
  );

  const inputClass =
    "border-2 border-gray-300 outline-none rounded-[4px] w-[320px] h-[40px] p-2";
  const labelClass = " text-gray-500 text-[12px] leading-[16px] mb-2";

  // Validation function
  const validateFields = () => {
    let result = true;
    Object.entries(formData).forEach(([key, value]) => {
      console.log({ key, value });
      if (value === "") {
        result = false;
        setValidation((prev) => {
          return { ...prev, [key]: { message: "Required field", error: true } };
        });
      }
    });
    return result;
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    // Validating Files type
    if (!file.type.startsWith("image")) {
      toast.error("File must be an image file");
      return;
    }
    //getting image base64
    const base64 = await getBase64(file);
    if (!base64) return;
    setFormData({ ...formData, image: base64.toString() });
  };

  //handling form submit
  const handleSubmit = async () => {
    const validationResult = validateFields();

    if (!validationResult) {
      toast.error("Please fill form correctly");
      return;
    }

    toast.success("Data Added Successfully");
  };
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
              autoFocus
            />
            <small
              className={
                validation.name.error ? "block text-red-500" : "hidden"
              }
            >
              {validation.name.message}*
            </small>
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
            <small
              className={
                validation.link.error ? "block text-red-500" : "hidden"
              }
            >
              {validation.link.message}*
            </small>
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
            <small
              className={
                validation.description.error ? "block text-red-500" : "hidden"
              }
            >
              {validation.description.message}*
            </small>
          </div>

          {/* // Change Photo  */}
          <div className="flex items-center md:w-[40%] m-auto  my-6">
            <img
              src={formData.image}
              alt=""
              className="w-[44px] h-[44px] border-2 border-gray-200 rounded-[8px]"
            />
            <div className="flex items-center ml-4 ">
              <UploadIcon />
              {/* // File input to be hidden  */}
              <input
                type="file"
                className="hidden"
                onChange={handleImageChange}
                id="fileInput"
              />
              <p
                className={`${labelClass} my-2 ml-2 hover:underline cursor-pointer`}
                onClick={() => {
                  const el = document.getElementById("fileInput");
                  if (!el) return;
                  el.click();
                }}
              >
                Change photo
              </p>
            </div>
            <small
              className={
                validation.image.error ? "block text-red-500" : "hidden"
              }
            >
              {validation.image.message}*
            </small>
          </div>

          <button
            className={`p-2 bg-[#0B69FF] text-white w-[93px] h-[42px] rounded-[4px] mt-8`}
            onClick={handleSubmit}
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
