import { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../../store/dataReducerSlice";

function Form() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: self.crypto.randomUUID(),
    title: " ",
    amount: " ",
    status: "inc",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function hanldeSubmit() {
    dispatch(addData(formData));
    setFormData({
      id: self.crypto.randomUUID(),
      title: " ",
      amount: " ",
      status: "inc",
    });
  }

  let typeFocus = "red-focus";
  if (formData.status === "inc") typeFocus = " ";
  const content = (
    <div className="add">
      <div className="add__container">
        <select
          className={`add__type ${typeFocus}`}
          defaultValue={formData.status}
          onChange={handleChange}
          value={formData.status}
          name="status"
        >
          <option value="inc" selected>
            +
          </option>
          <option value="exp">-</option>
        </select>
        <input
          type="text"
          className={`add__description ${typeFocus}`}
          placeholder="Add description"
          value={formData.title}
          name="title"
          onChange={handleChange}
        />
        <input
          type="number"
          className={`add__value ${typeFocus}`}
          placeholder="Value"
          value={formData.amount}
          name="amount"
          onChange={handleChange}
        />
        <button className={`add__btn ${typeFocus === " " ? " " : "red"}`} onClick={hanldeSubmit}>
          <i className="ion-ios-checkmark-outline" />
        </button>
      </div>
    </div>
  );

  return <div>{content}</div>;
}

export default Form;
