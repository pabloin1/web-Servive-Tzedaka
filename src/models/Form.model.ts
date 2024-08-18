import FormInterface from "../interfaces/Form.interface";

const getStructure = (): FormInterface => {
  return {
    id: 0,
    subject: "",
    full_name: "",
    phone: "",
    email: "",
    message: "",
    readed: false,
  };
};

const castForm = (data: any): FormInterface => {
  return {
    id: data.id,
    subject: data.subject,
    full_name: data.full_name,
    phone: data.phone,
    email: data.email,
    message: data.message,
    readed: Boolean(data.readed),
  };
};

const castFormList = (value: FormInterface[]): FormInterface[] => {
  return value.map((form: FormInterface) => castForm(form));
};

const FormModel = {
  getStructure,
  castForm,
  castFormList,
};

export default FormModel;
