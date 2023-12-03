const initState = {
    budget: {
        totalMoney: Number(),
        totalInCome: Number(),
        totalExpense: Number(),
    },

    data: [
        {
            id: self.crypto.randomUUID(),
            title: " ",
            amount: Number(),
            status: " ",
            itemPercent: Number(),
        },
    ],
};

function reducer(state = initState, action) {
    const { totalMoney, totalExpense, totalInCome } = state.budget;
    console.log(state.budget);
    switch (action.type) {
        case "income": {
            const amount = parseInt(action.payload);
            return {
                ...state,
                budget: {
                    ...state.budget,
                    totalMoney: totalMoney + amount,
                    totalInCome: totalInCome + amount,
                },
                data: [
                    ...state.data,
                    {
                        id: self.crypto.randomUUID(),
                        title: action.title,
                        amount: amount,
                        status: action.status,
                    },
                ],
            };
        }
        case "exp": {
            const amount = parseInt(action.payload);
            const itemPercent = Math.floor((amount / totalInCome) * 100);
            return {
                ...state,
                budget: {
                    ...state.budget,

                    totalMoney: totalMoney - amount,
                    totalExpense: totalExpense + amount,
                },
                data: [
                    ...state.data,
                    {
                        id: self.crypto.randomUUID(),
                        title: action.title,
                        amount: amount,
                        status: action.status,
                        itemPercent: itemPercent,
                    },
                ],
            };
        }
        case "data/delete-item-inc": {
            const amount = parseInt(action.payload.amount);
            const newData = state.data.filter((item) => {
                return item.id !== action.payload.id;
            });

            return {
                ...state,
                budget: {
                    ...state.budget,

                    totalMoney: totalMoney - amount,
                    totalInCome: totalInCome - amount,
                },
                data: newData,
            };
        }

        case "data/delete-item-exp": {
            const amount = parseInt(action.payload.amount);
            const newData = state.data.filter((item) => {
                return item.id !== action.payload.id;
            });
            console.log(amount);
            return {
                ...state,
                budget: {
                    ...state.budget,

                    totalMoney: totalMoney + amount,
                    totalExpense: totalExpense - amount,
                },
                data: newData,
            };
        }

        default:
            return state;
    }
}

export default reducer;
