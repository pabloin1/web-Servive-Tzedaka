import MySQL from "../database/MySQL.database";
import FormInterface from "../interfaces/Form.interface";
import ResponseInterface from "../interfaces/Response.interface";

const listAll = async (): Promise<ResponseInterface> => {
  const sql: string = 'CALL GetAllForms()';
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const listOne = async (idForm: number): Promise<ResponseInterface> => {
  const sql: string = `CALL GetForm(${idForm})`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const create = async (form: FormInterface): Promise<ResponseInterface> => {
  const sql: string = `CALL CreateForm(0,'${form.subject}', '${form.full_name}', '${form.phone}', '${form.email}', '${form.message}', ${form.readed})`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const update = async (idForm: number, form: FormInterface): Promise<ResponseInterface> => {
  const sql: string = `CALL CreateForm(${idForm}, '${form.subject}', '${form.full_name}', '${form.phone}', '${form.email}', '${form.message}', ${form.readed})`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const deleteForm = async (idForm: number): Promise<ResponseInterface> => {
  const sql: string = `CALL DeleteForm(${idForm})`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const updateReadStatus = async (idForm: number, read: boolean): Promise<ResponseInterface> => {
  const sql: string = `CALL UpdateFormReadStatus(${idForm}, ${read ? 1 : 0})`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};


const FormRepository = {
  listAll,
  listOne,
  create,
  update,
  updateReadStatus,
  deleteForm,
};

export default FormRepository;
