const catalog = {
   1: {
        id:1,
        name: 'Рубашка',
        description: 'Рубашка с рисунком в клеточку.',
        sizes: [46, 48, 50, 52, 54],
        price: 1200,
        available: true,
    },

    2: {
        id:2,
        name: 'Шорты',
        description: 'Джинсовые, синие.',
        sizes: [46, 48, 50, 52, 54],
        price: 800,
        available: true,
    },

    3: {
        id:3,
        name: 'Туфли',
        description: 'Туфли мужские, кожанные, черные.',
        sizes: [39, 40, 41, 42, 43],
        price: 2500,
        available: true,
    },

    4: {
        id:4,
        name: 'Джинсы',
        description: 'Черные.',
        sizes: [46, 48, 50, 52, 54],
        price: 4500,
        available: true,
    },

    5: {
        id:5,
        name: 'Куртка',
        description: 'Демесезонная, синяя.',
        sizes: [46, 48, 50, 52, 54],
        price: 3300,
        available: true,
    }
}

const shopcart = [
    {   
        product: 1,
        amount: 1,
    },

    {
        product: 4,
        amount: 1,
    },

    {
        product: 3,
        amount: 1,
    },
]


function add_product (product, amount){
    shopcart.push({'product': product, 'amount': amount})
    return(shopcart);
}

// console.log(add_product(parseInt(process.argv[2]), parseInt(process.argv[3])));

function del_one_product(product) {
    shopcart.splice(product, 1)
    return(shopcart);
}

// console.log(del_one_product(process.argv[2]));

function clear_product(product) {
    shopcart.splice(0, shopcart.length)
    return(shopcart);
}

// console.log(clear_product())

function total_in_shopcart () {
    let totalAmount = 0;
    let totalSumm = 0;
    for(let pos_shopcart = 0; pos_shopcart < shopcart.length; pos_shopcart++) {
        totalAmount = totalAmount + shopcart[pos_shopcart].amount;
        totalSumm = totalSumm + (shopcart[pos_shopcart].amount * catalog[shopcart[pos_shopcart].product].price)
    }

    let totals = {
        'totalAmount': totalAmount,
        'totalSumm': totalSumm,
    }

    return(totals);
}

// console.log(total_in_shopcart());