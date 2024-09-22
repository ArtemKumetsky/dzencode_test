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
            Products: [
                {
                    Title: "Длинное предлинное длиннючее название прихода",
                    Stock: "23",
                    Subdate: "04/12",
                    Date: "06 / Апр / 2017",
                    Subprice: "2 500 $",
                    Price: "250000.50",
                    details: {
                        src: "src/assets/interactive-menu/item.png",
                        description: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                        detailed: "SN-12.3456789",
                        status: "Свободен",
                        status_from: "06 / 04 / 2017",
                        status_to: "06 / 08 / 2025",
                        newness: "Новый",
                        clientName: "—",
                        groupTitle: "Длинное предлинное длиннючее название группы"
                    }
                },
                {
                    Title: "Длинное название прихода",
                    Stock: "23",
                    Subdate: "09/12",
                    Date: "06 / Сен / 2017",
                    Subprice: "",
                    Price: "50",
                    details: {
                        src: "src/assets/interactive-menu/item.png",
                        description: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                        detailed: "SN-12.3456789",
                        status: "В ремонте",
                        status_from: "06 / 04 / 2017",
                        status_to: "06 / 08 / 2025",
                        newness: "Б/У",
                        clientName: "—",
                        groupTitle: "Длинное предлинное длиннючее название группы"
                    }
                },
                {
                    Title: "Длинное предлинное длиннючее название прихода",
                    Stock: "23",
                    Subdate: "06/12",
                    Date: "06 / Июн / 2017",
                    Subprice: "2 500.85 $",
                    Price: "50.25",
                    details: {
                        src: "src/assets/interactive-menu/item.png",
                        description: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                        detailed: "SN-12.3456789",
                        status: "Свободен",
                        status_from: "06 / 04 / 2017",
                        status_to: "06 / 08 / 2025",
                        newness: "Новый",
                        clientName: "Христорожденственский Александр",
                        groupTitle: "Длинное предлинное длиннючее название группы"
                    }
                },
                {
                    Title: "Длинное название прихода",
                    Stock: "23",
                    Subdate: "02/12",
                    Date: "06 / Фев / 2017",
                    Subprice: "",
                    Price: "50.25",
                    details: {
                        src: "src/assets/interactive-menu/item.png",
                        description: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                        detailed: "SN-12.3456789",
                        status: "В ремонте",
                        status_from: "06 / 04 / 2017",
                        status_to: "06 / 08 / 2025",
                        newness: "Б/У",
                        clientName: "—",
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
        Products: state => state.Products,
    },
})

export default store