import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            Cart: [
                {
                    src: "src/assets/interactive-menu/item.png",
                    description: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                    detailed: "SN-12.3456789"
                }
            ],
            FakeDatabase: [
                {
                    Arrival: {
                        title: "Длинное предлинное длиннючее название прихода",
                        stock: "23",
                        subdate: "04/12",
                        date: "06 / Апр / 2017",
                        subprice: "2 500 $",
                        price: "250000.50",
                    },
                    Product: {
                        src: "src/assets/interactive-menu/item.png",
                        description: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                        detailed: "SN-12.3456789",
                        status: "Свободен",
                        status_from: "06 / 04 / 2017",
                        status_to: "06 / 08 / 2025",
                        newness: "Новый",
                        clientName: "—",
                    },
                    Group: {
                        groupTitle: "Длинное предлинное длиннючее название группы"
                    }
                },
                {
                    Arrival: {
                        title: "Длинное название прихода",
                        stock: "23",
                        subdate: "09/12",
                        date: "06 / Сен / 2017",
                        subprice: "",
                        price: "50",
                    },
                    Product: {
                        src: "src/assets/interactive-menu/item.png",
                        description: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                        detailed: "SN-12.3456789",
                        status: "В ремонте",
                        status_from: "06 / 04 / 2017",
                        status_to: "06 / 08 / 2025",
                        newness: "Б/У",
                        clientName: "—",
                    },
                    Group: {
                        groupTitle: "Длинное предлинное длиннючее название группы"
                    }
                },
                {
                    Arrival: {
                        title: "Длинное предлинное длиннючее название прихода",
                        stock: "23",
                        subdate: "06/12",
                        date: "06 / Июн / 2017",
                        subprice: "2 500.85 $",
                        price: "50.25",
                    },
                    Product: {
                        src: "src/assets/interactive-menu/item.png",
                        description: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                        detailed: "SN-12.3456789",
                        status: "Свободен",
                        status_from: "06 / 04 / 2017",
                        status_to: "06 / 08 / 2025",
                        newness: "Новый",
                        clientName: "Христорожденственский Александр",
                    },
                    Group: {
                        groupTitle: "Длинное предлинное длиннючее название группы"
                    }
                },
                {
                    Arrival: {
                        title: "Длинное название прихода",
                        stock: "23",
                        subdate: "02/12",
                        date: "06 / Фев / 2017",
                        subprice: "",
                        price: "50",
                    },
                    Product: {
                        src: "src/assets/interactive-menu/item.png",
                        description: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                        detailed: "SN-12.3456789",
                        status: "В ремонте",
                        status_from: "06 / 04 / 2017",
                        status_to: "06 / 08 / 2025",
                        newness: "Б/У",
                        clientName: "—",
                    },
                    Group: {
                        groupTitle: "Длинное предлинное длиннючее название группы"
                    }
                },
            ]
        }
    },
    mutations: {},
    actions: {
        // smoothly open menu
        openMenu() {
            document.querySelector('.black-screen').style.display = 'block';
            document.querySelector('.interactive-menu').style.display = 'block';

            setTimeout(() => {
                document.querySelector('.black-screen').style.opacity = 0.5;
                document.querySelector('.interactive-menu').style.opacity = 1;
            }, 300)
        },

        // smoothly close menu
        closeMenu() {
            document.querySelector('.black-screen').style.opacity = 0;
            document.querySelector('.interactive-menu').style.opacity = 0;

            setTimeout(() => {
                document.querySelector('.black-screen').style.display = 'none';
                document.querySelector('.interactive-menu').style.display = 'none';
            }, 300)
        }
    },
    getters: {
        Cart: state => state.Cart,
        FakeDatabase: state => state.FakeDatabase,
    },
})

export default store