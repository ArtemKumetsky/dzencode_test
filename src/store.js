import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            Products: [
                {
                    src: "src/assets/interactive-menu/item.png",
                    description: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                    detailed: "SN-12.3456789"
                }
            ],
            Arrivals: [
                {
                    Title: "Длинное предлинное длиннючее название прихода",
                    Stock: "23",
                    Subdate: "04/12",
                    Date: "06 / Апр / 2017",
                    Subprice: "2 500 $",
                    Price: "250000.50"
                },
                {
                    Title: "Длинное название прихода",
                    Stock: "23",
                    Subdate: "09/12",
                    Date: "06 / Сен / 2017",
                    Subprice: "",
                    Price: "50"
                },
                {
                    Title: "Длинное предлинное длиннючее название прихода",
                    Stock: "23",
                    Subdate: "06/12",
                    Date: "06 / Июн / 2017",
                    Subprice: "2 500.85 $",
                    Price: "50.25"
                },
                {
                    Title: "Длинное название прихода",
                    Stock: "23",
                    Subdate: "02/12",
                    Date: "06 / Фев / 2017",
                    Subprice: "",
                    Price: "50.25"
                },
            ]
        }
    },
    mutations: {},
    actions: {},
    getters: {
        Products: state => state.Products,
        Arrivals: state => state.Arrivals,
    },
})

export default store
