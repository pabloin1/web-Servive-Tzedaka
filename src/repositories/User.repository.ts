import MySQL from "../database/MySQL.database";
import UserInterface from "../interfaces/User.interface";
import ResponseInterface from "../interfaces/Response.interface";
import { Argon2Encryption } from "../helper/Argon2Encryption.helper";

const encryptionService1 = new Argon2Encryption();

const listAll = async (): Promise<ResponseInterface> => {
  const sql: string = "CALL GetAllUsers();";
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const listOne = async (idUser: number): Promise<ResponseInterface> => {
  const sql: string = `CALL GetUser('${idUser}')`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const findByEmail = async (name: string): Promise<UserInterface | null> => {
  const sql = `CALL GetUserByEmail('${name}')`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  const user = response.value[0][0];
  return user ? { ...user } : null;
};

const create = async (user: UserInterface): Promise<ResponseInterface> => {
  user.password = await encryptionService1.hashPassword(user.password ?? "");

  const sql: string = `CALL CreateUser('${user.email}', '${user.name}', '${user.password}')`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const update = async (
  idUser: number,
  user: UserInterface
): Promise<ResponseInterface> => {
  const sql: string = `CALL UpdateUser(${idUser}, '${user.email}', '${user.name}')`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const updatePassword = async (
  idUser: number,
  password: string
): Promise<ResponseInterface> => {
  const hashedPassword = await encryptionService1.hashPassword(password);
  
  const sql: string = `CALL UpdateUserPassword(${idUser}, '${hashedPassword}')`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const deleteUser = async (idUser: number): Promise<ResponseInterface> => {
  const sql: string = `CALL DeleteUser('${idUser}')`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const UserRepository = {
  listAll,
  listOne,
  findByEmail,
  create,
  update,
  updatePassword,
  deleteUser,
};

export default UserRepository;
