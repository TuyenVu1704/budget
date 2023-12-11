import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Top() {
    const data = useSelector((state) => state.DATA.data);
    const [getDataTotal, setGetDataTotal] = useState({
        totalExpense: 0,
        totalIncome: 0,
        total: 0,
        expPercent: 0,
    });
    useEffect(() => {
        const getAmount = () => {
            let totalAmountIncome = 0;
            let totalAmountExp = 0;
            if (data.length !== 0) {
                data.map((item) => {
                    return item.status === "inc"
                        ? (totalAmountIncome += Number(item.amount))
                        : (totalAmountExp -= Number(item.amount));
                });
            } else return [];

            let total = totalAmountIncome + totalAmountExp;
            let expPercent = (
                -(totalAmountExp / totalAmountIncome) * 100
            ).toFixed(1);

            setGetDataTotal({
                totalIncome: totalAmountIncome,
                totalExpense: totalAmountExp,
                total: total,
                expPercent: expPercent,
            });
        };
        getAmount();
    }, [data]);

    return (
        <div className="budget">
            <div className="budget__title">
                Available Budget in{" "}
                <span className="budget__title--month">%Month%</span>:
            </div>
            <div className="budget__value">{getDataTotal.total} $</div>
            <div className="budget__income clearfix">
                <div className="budget__income--text">Income</div>
                <div className="right">
                    <div className="budget__income--value">
                        {getDataTotal.totalIncome} $
                    </div>
                    <div className="budget__income--percentage">&nbsp;</div>
                </div>
            </div>
            <div className="budget__expenses clearfix">
                <div className="budget__expenses--text">Expenses</div>
                <div className="right clearfix">
                    <div className="budget__expenses--value">
                        {getDataTotal.totalExpense} $
                    </div>
                    <div className="budget__expenses--percentage">
                        {getDataTotal.expPercent}%
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Top;
