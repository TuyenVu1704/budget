import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../../store/dataReducerSlice";
function Bottom() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.DATA.data);

  let dataInCome;
  let dataExp;

  dataInCome = data.filter((item) => {
    return item.status === "inc";
  });
  dataExp = data.filter((item) => item.status === "exp");
  let totalInCome = 0;
  dataInCome.map((item) => (totalInCome += Number(item.amount)));
  console.log(totalInCome);
  function handleDelete(id) {
    dispatch(deleteData(id));
  }
  return (
    <div>
      <div className="income">
        <h2 className="income__title">Income</h2>
        <div className="income__list">
          {dataInCome.map((item) => {
            return item.status === "inc" ? (
              <div className="item clearfix" key={item.id}>
                <div className="item__description">{item.title}</div>
                <div className="right clearfix">
                  <div className="item__value">+ {item.amount}</div>
                  <div className="item__delete">
                    <button className="item__delete--btn" onClick={() => handleDelete(item.id)}>
                      <i className="ion-ios-close-outline" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              " "
            );
          })}
        </div>
      </div>
      <div className="expenses">
        <h2 className="expenses__title">Expenses</h2>
        <div className="expenses__list">
          {dataExp.map((item) => {
            return (
              <div className="item clearfix" key={item.id}>
                <div className="item__description">{item.title}</div>
                <div className="right clearfix">
                  <div className="item__value">{item.amount}</div>
                  <div className="item__percentage">{((item.amount / totalInCome) * 100).toFixed(0)}%</div>
                  <div className="item__delete">
                    <button className="item__delete--btn" onClick={() => handleDelete(item.id)}>
                      <i className="ion-ios-close-outline" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Bottom;
