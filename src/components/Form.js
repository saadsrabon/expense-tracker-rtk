import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransactionThunk } from "../redux/features/transactions/transactionsSlice";

export default function Form() {
    // form various states
    const [name, setName] = useState("");
    const [type, setType] = useState("income");
    const [amount, setAmount] = useState(0);
    
    //action disPatch Function
     const dispatch = useDispatch(); 
    // handle form functions
    const handleCreate = (e) => {
        e.preventDefault();
        const payload = {
            name,
            type,
            amount: Number(amount),
        };

         dispatch(addTransactionThunk(payload));  
    };
    return (
        <div className="form">
            <h3>Add new transaction</h3>

      <form onSubmit={handleCreate}>
      <div className="form-group">
                <label >Name</label>
                <input
                    type="text"
                    name="transaction_name"
                    placeholder="My Salary"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group radio">
                <label>Type</label>
                <div className="radio_group">
                    <input
                        type="radio"
                        value="income"
                        name="transaction_type"
                        checked={type === "income" ? true : false}
                        onChange={() => setType('income')}
                    />
                    <label >Income</label>
                </div>
                <div className="radio_group">
                    <input
                        type="radio"
                        value="expense"
                        name="transaction_type"
                        placeholder="Expense"
                        checked={type === "expense" ? true : false}
                        onChange={() => setType('expense')}
                    />
                    <label >Expense</label>
                </div>
            </div>

            <div className="form-group">
                <label >Amount</label>
                <input
                    type="number"
                    placeholder="300"
                    name="transaction_amount"
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>

            <button type="submit" className="btn">Add Transaction</button>

            <button className="btn cancel_edit">Cancel Edit</button>
      </form>
        </div>
    );
}
