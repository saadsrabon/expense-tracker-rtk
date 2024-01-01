import axiosInstance from "../../../utils/axiosinstance";

// this file is creating for fetching data from server and edit or delete data from server


//Get api to get data from Server
export const getTransactions = async () => {
    const response = await axiosInstance.get("/transactions");
    return response.data;
}; 

// post api for adding data to server
export const   addTransaction =async (payload) => {
    const response = axiosInstance.post("/transactions", payload);
    return response.data;
};

// delete api for deleting data from server
export const deleteTransaction = async (id) => {
    const response = await axiosInstance.delete(`/transactions/${id}`);
    return response.data;
};

// put api for updating data to server
export const updateTransaction = async (id, payload) => {
    const response = await axiosInstance.put(`/transactions/${id}`, payload);
    return response.data;
};
