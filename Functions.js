import { faker } from '@faker-js/faker';
faker.locale = 'pt_BR';
import promptSync from 'prompt-sync';

const prompt = promptSync();

const people = []
let names = []


for (let i = 0; i < 1000; i++) {
    const name = faker.name.findName();
    const birthday = faker.date.birthdate({ min: 1910, max: 2006, mode: 'year' });
    const genre = faker.name.gender();
    const lastPurchaseDate = faker.date.recent(5475);
    const countPurchase = faker.datatype.number({ min: 1, max: 99 });

    names = {
        name,
        birthday,
        genre,
        lastPurchaseDate,
        countPurchase,

    }
    people.push(names);
}

export default function FindClient() {
    let list = people.map(people => people.name)
    let char = prompt("Caractere de Busca:  ")
    char = char.toLocaleUpperCase()

    let FilteredClients = list.filter(function (letters) {
        return letters.charAt(0) == char
    }
    );
    for (let i = 0; i < FilteredClients.length; i++) {
        console.log(`Cliente ${FilteredClients[i]}`)

    }

}


function ListClients() {

    let list = people.map(people => people.name)
    for (let i = 0; i < list.length; i++) {

        console.log(`Cliente: ${list[i]}`)
    }
}

function ListClientsIndex() {
    console.clear()
    let list = people.map(people => people.name)
    for (let i = 0; i < list.length; i++) {

        console.log(`Cliente: ${list.indexOf(list[i])} ${list[i]}`)
    }
}


function ListClientStartWith() {

    let list = people.map(people => people.name)
    let char = prompt("Caractere de Busca:  ")
    char = char.toLocaleUpperCase()
    let counter = 0;
    for (let i = 0; i < list.length; i++) {

        if (list[i].charAt(0) == char) {
            counter++;

        }
    }
    console.log(`Total de clientes encontrados: ${counter}`);
}

function ListNames() {

    let list = people.map(people => people.name)
    for (let i = 0; i < list.length; i++) {

        console.log(`${list[i]}`)
    }

}

function ListFirstName() {

    let list = people.map(people => people.name)
    for (let i = 0; i < list.length; i++) {
        let fName = list[i].substring(0, list[i].indexOf(" "));
        console.log(fName);

    }

}

const ListFirstNameWithChar = function () {

    let list = people.map(people => people.name)
    let char = prompt("Caractere de Busca:  ")
    char = char.toLocaleUpperCase()
    let searched = []
    for (let i = 0; i < list.length; i++) {

        if (list[i].charAt(0) == char) {

            searched.push(list[i])
        }
    }

    for (let i = 0; i < searched.length; i++) {
        let Fnames = searched[i].substring(0, searched[i].indexOf(" "));
        console.log(Fnames);

    }


}

function ListAdults() {
    console.clear()
    let listDates = people.map(people => people.birthday)
    let ListNames = people.map(people => people.name)

    let currentYear = new Date().getFullYear();

    for (let i = 0; i < listDates.length; i++) {
        let dateBirth = new Date(listDates[i])
        let yearBirth = dateBirth.getFullYear();
        let age = currentYear - yearBirth

        if (age > 18) {
            console.log(`Cliente: ${ListNames.indexOf(ListNames[i])} ${ListNames[i]}\nIdade: ${age} Anos\n`)
        }
    }

}

function CheckIfExists() {

    let listChar = people.map(people => people.name.toUpperCase())

    let char = prompt("Insira o Nome para a busca:  ")
    char = char.toUpperCase();


    let result = listChar.filter(listChar => listChar.includes(char));

    if (result.length != 0) {
        console.log("Resultados Encontrados: ")
        for (let i = 0; i < result.length; i++) {
            console.log(result[i])

        }

    } else {
        console.log("Cliente Não encontrado! ")
    }

}

function SumSales() {

    let list = people.map(people => people.countPurchase)

    let total = list.reduce(function (a, b) {
        return a + b;
    });
    console.log(`Total de Vendas: ${total} Vendas`)
}

function LastBuy() {

    let listDates = people.map(people => people.lastPurchaseDate)
    let ListNames = people.map(people => people.name)
    let currentYear = new Date().getFullYear();

    for (let i = 0; i < listDates.length; i++) {
        let lastPurchase = new Date(listDates[i])
        let yearPurhase = lastPurchase.getFullYear();
        let PastTime = currentYear - yearPurhase
        // console.log(PastTime)
        if (PastTime > 10) {
            console.log(`Cliente: ${ListNames.indexOf(ListNames[i])} ${ListNames[i]}\nTempo sem compras: ${PastTime} Anos\n`)
        }
    }
}


function BestClientes() {

    let listSales = people.map(people => people.countPurchase)
    let ListNames = people.map(people => people.name)

    for (let i = 0; i < listSales.length; i++) {
        if (listSales[i] > 15) {
            console.log(`Nome Cliente: ${ListNames[i]} Compras: ${listSales[i]}\n`)

        }

    }
}



function AddCLients() {
    let newclient = []

    let name = prompt("Nome do Novo Cliente: ")
    const birthday = faker.date.birthdate({ min: 1910, max: 2006, mode: 'year' });
    const genre = faker.name.gender();
    const lastPurchaseDate = new Date();
    const countPurchase = faker.datatype.number({ min: 1, max: 99 });

    newclient = {
        name,
        birthday,
        genre,
        lastPurchaseDate,
        countPurchase,

    }
    people.unshift(newclient)

}
export {
    FindClient, ListClients, ListClientsIndex, ListNames, ListFirstName, ListFirstNameWithChar, ListAdults, CheckIfExists,
    SumSales, LastBuy, BestClientes, AddCLients, ListClientStartWith
}