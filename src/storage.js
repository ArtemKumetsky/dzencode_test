import {createStore} from 'vuex'

const storage = createStore({
    state() {
        return {
            Orders: [
                {
                    id: 1,
                    title: 'Длинное название прихода',
                    subdate: "06/12",
                    date: "06 / Сен / 2017",
                    description: 'desc',
                    productIds: [1, 2, 3, 4, 5],
                },
                {
                    id: 2,
                    title: 'Длинное предлинное название прихода',
                    subdate: "06/12",
                    date: "06 / Сен / 2017",
                    description: 'desc',
                    productIds: [2, 3]
                },
                {
                    id: 3,
                    title: 'Длинное предлинное длиннючее название прихода',
                    subdate: "06/12",
                    date: "06 / Сен / 2017",
                    description: 'desc',
                    productIds: [3]
                }
            ],

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
                {
                    id: 3,
                    serialNumber: 1234,
                    isNew: true,
                    photo: 'src/assets/products/motherboard.png',
                    status: 'В ремонте',
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
                    id: 4,
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
                    id: 5,
                    serialNumber: 1234,
                    isNew: false,
                    photo: 'src/assets/products/monitor.webp',
                    status: 'Свободен',
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
            ]
        }
    },
    mutations: {},
    actions: {},
    getters: {
        Products: state => state.Products,
        Orders: state => state.Orders,

        // Getter for receiving products in order
        getProductsByOrder: (state) => (productIds) => {
            return state.Products.filter(product => productIds.includes(product.id));
        },

        // Function for correct declension of product counters ( 1 продукт, 2 продукта, 5 продуктов, ...)
        productCounterOutput: (state) => (productsCounter) => {
            if (productsCounter % 100 >= 11 && productsCounter % 100 <= 19) {
                return 'Продуктов'; // 11...19 case
            } else if (productsCounter % 10 === 1) {
                return 'Продукт';
            } else if (productsCounter % 10 >= 2 && productsCounter % 10 <= 4) {
                return 'Продукта';
            } else {
                return 'Продуктов';
            }
        },

    },
})

export default storage