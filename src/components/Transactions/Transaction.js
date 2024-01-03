import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";

export default function Transaction({transaction}) {

    // function numberWithThousands(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //   }
    return (
        <li className="transaction income">
            <p>{transaction?.name}</p>
            <div className="right">
                <p>৳ {transaction?.amount}</p>
                <button className="link">
                    <img alt="Edit" className="icon" src={editImage} />
                </button>
                <button className="link">
                    <img alt="Delete" className="icon" src={deleteImage} />
                </button>
            </div>
        </li>
    );
}
