import { useState } from "react";
import "../../assets/style.css";
import { useDispatch } from "react-redux";

function Form() {
    const [selected, setSelected] = useState("inc");
    const [descText, setDescText] = useState(" ");
    const [amountMoney, setAmountMoney] = useState(" ");

    const dispatch = useDispatch();
    function handleSubmit() {
        setDescText(" ");
        setAmountMoney(" ");
        if (selected !== "inc") {
            return dispatch({
                type: "exp",
                title: descText,
                payload: amountMoney,
                status: "exp",
            });
        }
        return dispatch({
            type: "income",
            title: descText,
            payload: amountMoney,
            status: "inc",
        });
    }
    const typeFocus = "red-focus";
    let contentSelect = (
        <div>
            <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="add__type"
            >
                <option value="inc" selected>
                    +
                </option>
                <option value="exp">-</option>
            </select>
            <input
                type="text"
                className="add__description"
                placeholder="Add description"
                value={descText}
                onChange={(e) => setDescText(e.target.value)}
            />
            <input
                type="number"
                className="add__value"
                placeholder="Value"
                value={amountMoney}
                onChange={(e) => setAmountMoney(e.target.value)}
            />
            <button className="add__btn" onClick={handleSubmit}>
                <i className="ion-ios-checkmark-outline" />
            </button>
        </div>
    );
    if (selected !== "inc") {
        contentSelect = (
            <div>
                <select
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    className={`add__type ${typeFocus}`}
                >
                    <option value="inc">+</option>
                    <option value="exp" selected>
                        -
                    </option>
                </select>
                <input
                    type="text"
                    className={`add__description ${typeFocus}`}
                    placeholder="Add description"
                    value={descText}
                    onChange={(e) => setDescText(e.target.value)}
                />
                <input
                    type="number"
                    className={`add__value ${typeFocus}`}
                    placeholder="Value"
                    value={amountMoney}
                    onChange={(e) => setAmountMoney(e.target.value)}
                />
                <button className={`add__btn red`} onClick={handleSubmit}>
                    <i className={`ion-ios-checkmark-outline ${typeFocus}`} />
                </button>
            </div>
        );
    }
    return (
        <div className="bottom">
            <div className="add">
                <div className="add__container">{contentSelect}</div>
            </div>
        </div>
    );
}

export default Form;
