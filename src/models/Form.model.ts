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
    date: "",
    hour: "",
  };
};

const castForm = (data: any): FormInterface => {
  return {
    id: data.id??0,
    subject: data.subject,
    full_name: data.full_name,
    phone: data.phone,
    email: data.email,
    message: data.message,
    readed: Boolean(data.readed),
    date: data.date,
    hour: data.hour,
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
