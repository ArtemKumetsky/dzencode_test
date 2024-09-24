import {createStore} from 'vuex'

const storage = createStore({
    state() {
        return {
            Cart: [
                {
                    src: "src/assets/products/motherboard.png",
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
                        src: "src/assets/products/motherboard.png",
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
                        src: "src/assets/products/motherboard.png",
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
                        src: "src/assets/products/motherboard.png",
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
                        src: "src/assets/products/motherboard.png",
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
            ],
            // Orders: [
            //     {
            //         id: 1,
            //         get products () { return this.Products[0] },
            //         title: this.Products.order,
            //         date: '2017-06-29 12:09:33',
            //         description: 'desc',
            //     },
            //     {
            //         id: 2,
            //         title: 'Order 2',
            //         date: '2017-06-29 12:09:33',
            //         description: 'desc',
            //         get products () { return this.products }
            //     },
            //     {
            //         id: 3,
            //         title: 'Order 3',
            //         date: '2017-06-29 12:09:33',
            //         description: 'desc',
            //         get products () { return this.products },
            //     }
            // ],

            Products: [
                {
                    id: 1,
                    serialNumber: 1234,
                    isNew: true,
                    photo: 'src/assets/products/motherboard.png',
                    status: 'Свободен',
                    title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
                    type: 'Motherboard',
                    specification: 'SN-12.3456789',
                    guarantee: {
                        start: '06/04/2017',
                        end: '06/08/2025'
                    },
                    price: [
                        {value: 2500, symbol: 'USD', isDefault: 0},
                        {value: 250000.50, symbol: 'UAH', isDefault: 1}
                    ],
                    subdate: "06/12",
                    date: "06 / Сен / 2017",
                    groupTitle: "Длинное предлинное длиннючее название группы",
                    clientName: "—",
                    order: "Длинное предлинное длиннючее название прихода",
                },
                {
                    id: 2,
                    serialNumber: 1234,
                    isNew: false,
                    photo: 'src/assets/products/monitor.webp',
                    status: 'В ремонте',
                    title: 'Asus VG249Q (90LM05E0-B03170)',
                    type: 'Monitor',
                    specification: '(90LM05E0-B03170)',
                    guarantee: {
                        start: '06/04/2017',
                        end: '06/08/2025'
                    },
                    price: [
                        {value: 2500, symbol: 'USD', isDefault: 0},
                        {value: 250000.50, symbol: 'UAH', isDefault: 1}
                    ],
                    subdate: "06/12",
                    date: "06 / Сен / 2017",
                    groupTitle: "Длинное предлинное длиннючее название группы",
                    clientName: "—",
                    order: "Длинное предлинное длиннючее название прихода",
                },
                // {
                //     id: 2,
                //     serialNumber: 1234,
                //     isNew: 1,
                //     photo: 'pathToFile.jpg',
                //     title: 'Product 1',
                //     type: 'Monitors',
                //     specification: 'Specification 1',
                //     guarantee: {
                //         start: '2017-06-29 12:09:33',
                //         end: '2017-06-29 12:09:33'
                //     },
                //     price: [
                //         {value: 100, symbol: 'USD', isDefault: 0},
                //         {value: 2600, symbol: 'UAH', isDefault: 1}
                //     ],
                //     order: 2,
                //     date: '2017-06-29 12:09:33'
                // }
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
        Products: state => state.Products,
        Orders: state => state.Orders
    },
})

export default storage