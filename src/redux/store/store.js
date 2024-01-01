import { configureStore } from "@reduxjs/toolkit";
import transationReducer from "../features/transactions/transactionsSlice";

const store =configureStore({
    reducer: {
        transactions: transationReducer,
    },
});

export default store;