import MySQL from "../database/MySQL.database";
import ProductInterface from "../interfaces/Product.interface";
import ResponseInterface from "../interfaces/Response.interface";

const listAll = async (): Promise<ResponseInterface> => {
  //aqui se va poner el codigo para la consulta sql
  const sql: string = `CALL GetAllProducts();`;
  const response: ResponseInterface = await MySQL.executeQuery(sql);
  console.log(response);
  return response;
};

const listOne = async (idProduct: number): Promise<ResponseInterface> => {
  //aqui se va poner el codigo para la consulta sql
  const sql:string = `CALL GetProduct('${idProduct}')`;
  const response:ResponseInterface = await MySQL.executeQuery(sql);
  return response;
};

const create = async (product: ProductInterface): Promise<ResponseInterface> => {
  //aqui se va poner el codigo para la consulta sql
  const sql : string = `CALL CreateProduct('${product.id}', '${product.amount}','${product.description}')`;
  const response:ResponseInterface = await MySQL.executeQuery(sql)
  return response;
};

const update = async (
  idProduct: number,
  product: ProductInterface
): Promise<ResponseInterface> => {
  //aqui se va poner el codigo para la consulta sql
  const sql : string = `CALL CreateProduct('${idProduct}', '${product.amount}','${product.description}')`;
  const response:ResponseInterface = await MySQL.executeQuery(sql)
  return response;
};

const deleteProduct = async (idProduct: number): Promise<ResponseInterface> => {
  //aqui se va poner el codigo para la consulta sql
  const sql: string = `CALL DeleteProduct('${idProduct}')`;
  const response:ResponseInterface = await MySQL.executeQuery(sql);
  
  return response;
};

const ProductRepository = {
  listAll,
  listOne,
  create,
  update,
  deleteProduct,
};

export default ProductRepository;
