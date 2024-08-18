import UserInterface from "../interfaces/User.interface";

const getStructure = (): UserInterface => {
    const user: UserInterface = { 
        id: 0, 
        email:"",
        name: "", 
        password: "", 
        token: "" 
    };
    return user;
}

const castUser = (data: any): UserInterface => {
    const user: UserInterface = { 
        id: data.id, 
        email:data.email,
        name: data.username, 
        password: data.password ?? undefined, 
        token: data.token ?? undefined 
    };
    return user;
}

const castUserList = (value: UserInterface[]): UserInterface[] => {
    return value.map((user: UserInterface) => {
        user = UserModel.castUser(user);
        return { ...user };
    });
}

const UserModel = {
    castUser,
    castUserList,
    getStructure
}

export default UserModel;
