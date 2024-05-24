export interface IFormData {
  name: string;
  image: string;
  description: string;
  link: string;
}

interface SubVal {
  error: boolean;
  message: string;
}
export interface IValidate {
  name: SubVal;
  description: SubVal;
  image: SubVal;
  link: SubVal;
}

export const validateInitialValues = {
  name: {
    message: "",
    error: false,
  },
  description: {
    message: "",
    error: false,
  },
  link: {
    message: "",
    error: false,
  },
  image: {
    message: "",
    error: false,
  },
};

export const initialFormValues = {
  name: "",
  image: "/4.png",
  description: "",
  link: "",
};
