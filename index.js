let companies = [
    {
        id: 1,
        name: 'AZIZs_KABLUK',
        budget: 500000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'design',
                total: 60000
            },
            {
                for: 'material',
                total: 70000
            },
            {
                for: 'place',
                total: 120000
            },
        ]
    },
    {
        id: 2,
        name: 'KAMERON_CINEMA',
        budget: 600000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'camera',
                total: 90000
            },
            {
                for: 'actors',
                total: 140000
            },
            {
                for: 'electricity',
                total: 50000
            },
        ]
    },
    {
        id: 3,
        name: 'ISKANDARs_ZOO',
        budget: 450000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'animals',
                total: 100000
            },
            {
                for: 'cloune',
                total: 15000
            },
            {
                for: 'food',
                total: 70000
            },
        ]
    },
    {
        id: 4,
        name: 'AMINs_SOOOO',
        budget: 800000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'house',
                total: 200000
            },
            {
                for: 'cars',
                total: 150000
            },
            {
                for: 'family',
                total: 300000
            },
        ]
    },
]


let successuful = []
let unsuccessuful = []
let taxes = 0
let taxMax = {}
let taxMin ={}
let averageExpenses = 0

for (let item of companies) {

    item.expensesPerMonth = 0

    for (let itemTwo of item.expensesPerYear){
        item.expensesPerMonth += itemTwo.total / 12
    }

        item.expensesPerMonth = Math.round(item.expensesPerMonth)

        item.budgetPerMoth = item.budget /12

        let remainder = budgetPerMoth(item.expensesPerMonth + (budgetPerMoth / 100 *item.tax))

        if (remainder > 0) {
            successuful.push(item.name)
        } else {
            unsuccessuful.push(item.name)
        }

        item.tax +=itemTwo

        let maxTax = companies.reduce((a,b) => {
            if (a.tax > b.tax){
                return a
            } else {
                return b
            }
        })

        let minTax = companies.reduce((a,b) => {
            if (a.tax > b.tax){
                return a
            } else {
                return b
            }
        })

        minTax.push(taxMin)

        maxTax.push(taxMax)
        
        total / companies.length.push(averageExpenses)
}

// Найти общий tax со всех компаний
// Найти кто меньше всех платит налог и кто больше всех платит налог
// Найти средний расход

