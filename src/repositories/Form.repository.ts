import MySQL from "../database/MySQL.database";
import FormInterface from "../interfaces/Form.interface";
import ResponseInterface from "../interfaces/Response.interface";

const listAll = async (
  dateinItial: string,
  dateFinal: string
): Promise<ResponseInterface> => {
  const sql: string = `CALL GetAllForms( '${dateinItial}', '${dateFinal}' )`;
  console.log(sql)
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const listOne = async (idForm: number): Promise<ResponseInterface> => {
  const sql: string = `CALL GetForm(${idForm})`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const create = async (form: FormInterface): Promise<ResponseInterface> => {
  const sql: string = `CALL CreateForm('${form.subject}', '${form.full_name}', '${form.phone}', '${form.email}', '${form.message}', ${form.readed},'${form.date}','${form.hour}')`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};



const deleteForm = async (idForm: number): Promise<ResponseInterface> => {
  const sql: string = `CALL DeleteForm(${idForm})`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const updateReadStatus = async (
  idForm: number,
): Promise<ResponseInterface> => {
  const sql: string = `CALL UpdateFormReadStatus(${idForm})`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const FormRepository = {
  listAll,
  listOne,
  create,
  updateReadStatus,
  deleteForm,
};

export default FormRepository;