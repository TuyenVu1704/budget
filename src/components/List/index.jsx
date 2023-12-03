import { useDispatch, useSelector } from "react-redux";
import ItemInCome from "./ItemInCome";
import ItemExpense from "./ItemExpense";

function List() {
    const dispatch = useDispatch();
    const dataInCome = useSelector((state) => {
        return state.data.filter((item) => {
            return item.status === "inc";
        });
    });

    const dataExpense = useSelector((state) => {
        return state.data.filter((item) => {
            return item.status === "exp";
        });
    });
    function handleDelete(value) {
        if (value.status === "exp") {
            dispatch({
                type: "data/delete-item-exp",
                payload: value,
            });
        } else {
            dispatch({
                type: "data/delete-item-inc",
                payload: value,
            });
        }
    }

    return (
        <div className="container clearfix">
            <div className="income">
                <h2 className="icome__title">Income</h2>
                <div className="income__list">
                    {dataInCome.map((item, index) => {
                        return (
                            <ItemInCome
                                key={index}
                                item={item}
                                onClickDelete={handleDelete}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="expenses">
                <h2 className="expenses__title">Expenses</h2>
                <div className="expenses__list">
                    {dataExpense.map((item, index) => {
                        return (
                            <ItemExpense
                                key={index}
                                item={item}
                                onClickDelete={handleDelete}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default List;
