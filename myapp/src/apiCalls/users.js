import { axiosInstance } from "./axiosInstance";
export const RegisterUser = async (data) => {
    try {
        const resposne = await axiosInstance.post("http://localhost:9999/v1/register", data)
        return resposne.data;
    }
    catch (err) {
        return err
    }
}
export const LoginUser = async (data) => {
    try {
        const resposne = await axiosInstance.post("http://localhost:9999/v1/login", data)
        return resposne.data;
    }
    catch (err) {
        return err
    }
}
export const Currentuser = async () => {
    try {
        console.log(localStorage.getItem("token"))
        const resposne = await axiosInstance.get("http://localhost:9999/v1/getuserdetails")
        console.log(resposne)
        return resposne;
    }
    catch (err) {
        console.log("error")
        return err
    }
} 