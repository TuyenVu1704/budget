import { useSelector } from "react-redux";

function Budget() {
    const dataBudget = useSelector((state) => {
        return state.budget;
    });

    const { totalMoney, totalInCome, totalExpense } = dataBudget;

    let totalExpensePercent =
        totalExpense === 0
            ? 0
            : (totalExpense / totalInCome) * 100 < 1
            ? ((totalExpense / totalInCome) * 100).toFixed(1)
            : Math.floor((totalExpense / totalInCome) * 100);
    return (
        <div className="budget">
            <div className="budget__title">
                Available Budget in{" "}
                <span className="budget__title--month">%Month%</span>:
            </div>
            <div className="budget__value">
                {totalMoney > 0 ? `+ ${totalMoney}` : totalMoney}
            </div>

            <div className="budget__income clearfix">
                <div className="budget__income--text">Income</div>
                <div className="right">
                    <div className="budget__income--value">{`+ ${totalInCome}`}</div>
                    <div className="budget__income--percentage">&nbsp;</div>
                </div>
            </div>
            <div className="budget__expenses clearfix">
                <div className="budget__expenses--text">Expenses</div>
                <div className="right clearfix">
                    <div className="budget__expenses--value">{`- ${totalExpense}`}</div>
                    <div className="budget__expenses--percentage">{`${totalExpensePercent}%`}</div>
                </div>
            </div>
        </div>
    );
}

export default Budget;
