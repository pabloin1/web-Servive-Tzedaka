import MySQL from "../database/MySQL.database";
import UserInterface from "../interfaces/User.interface";
import ResponseInterface from "../interfaces/Response.interface";
import { BCryptEncryptionService } from "../services/BCryptEncryption.service";
import { Argon2EncryptionService } from "../services/Argon2Encryption.service";

const encryptionService1 = new Argon2EncryptionService();

const encryptionService = new BCryptEncryptionService();

const listAll = async (): Promise<ResponseInterface> => {
  //aqui se va poner el codigo para la consulta sql
  const sql: string = "CALL GetAllUsers()";
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const listOne = async (idUser: number): Promise<ResponseInterface> => {
  //aqui se va poner el codigo para la consulta sql
  const sql: string = `CALL GetUser('${idUser}')`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const findByEmail = async (email: string): Promise<UserInterface | null> => {
  const sql = `CALL GetUserByEmail('${email}')`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  const user = response.value[0][0];
  return user ? { ...user } : null;
};

const create = async (user: UserInterface): Promise<ResponseInterface> => {
  user.password = await encryptionService1.hashPassword(user.password ?? "");

  const sql: string = `CALL CreateUser(${user.id}, '${user.email}', '${user.name}', '${user.password}', '${user.token}')`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const update = async (
  idUser: number,
  user: UserInterface
): Promise<ResponseInterface> => {
  user.password = await encryptionService1.hashPassword(user.password ?? "");

  const sql: string = `CALL CreateUser(${idUser}, '${user.email}', '${user.name}', '${user.password}', '${user.token}')`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};


const deleteUser = async (idUser: number): Promise<ResponseInterface> => {
  //aqui se va poner el codigo para la consulta sql
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
  deleteUser,
};

export default UserRepository;
