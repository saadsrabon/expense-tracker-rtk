import { useDispatch, useSelector } from "react-redux";
import Transaction from "./Transaction";
import { useEffect } from "react";
import { getTransactionsThunk } from "../../redux/features/transactions/transactionsSlice";


export default function Transactions() {
    const dispacth =useDispatch();
    const{ transactions }= useSelector((state) => state.transactions);
    console.log(transactions)
    useEffect(() => {
       dispacth(getTransactionsThunk())

    }, [dispacth,]);

    let content = null;
    if (transactions.length === 0) {
        content = <p>No transactions found</p>;
    } else {
        content = transactions.map((transaction) => (
                    <Transaction key={transaction?.id} transaction={transaction} />
                ))
            
        
    }
    return (
        <>
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>
                 {content }
                </ul>
            </div>
        </>
    );
}
