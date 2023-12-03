function ItemExpense(props) {
    const { item, onClickDelete } = props;
    const { title, amount, itemPercent } = item;
    function handleDelete(value) {
        onClickDelete(value);
    }
    let content = (
        <div>
            <div className="item__description">{title}</div>
            <div className="right clearfix">
                <div className="item__value">{amount}</div>
                <div className="item__percentage">{itemPercent}%</div>
                <div className="item__delete">
                    <button
                        className="item__delete--btn"
                        onClick={() => handleDelete(item)}
                    >
                        <i className="ion-ios-close-outline" />
                    </button>
                </div>
            </div>
        </div>
    );
    if (title === " " && amount === 0) {
        return;
    } else {
        return <div className="item clearfix">{content}</div>;
    }
}

export default ItemExpense;
