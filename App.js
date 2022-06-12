import { faker } from '@faker-js/faker';
faker.locale = 'pt_BR';
import promptSync from 'prompt-sync';
import {FindClient,ListClients,ListClientsIndex,ListNames,ListFirstName,ListAdults,CheckIfExists,SumSales,LastBuy,BestClientes,AddCLients,ListFirstNameWithChar,ListClientStartWith} from './Functions.js';

const prompt = promptSync();



let option = 0;

while (option != 666) {

    console.log("\nAdministração de Clientes\n");
    console.log("1  - Filtrar Clientes com Caractere de Início");
    console.log("2  - Lista de Clientes padrão Cliente: NOME_DO_CLIENTE ");
    console.log("3  - Lista de Clientes padrão Cliente INDEX: NOME_DO_CLIENTE");
    console.log("4  - Total de Clientes por Caractere de Inicio");
    console.log("5  - Listar Nomes de Clientes");
    console.log("6  - Lista de Clientes (Primeiro Nome)");
    console.log("7  - Lista de Primeiro Nome Por caractere de Inicio");
    console.log("8  - Lista de Clientes Maiores de Idade");
    console.log("9  - Verificar se o nome está contido na lista");
    console.log("10 - Total de vendas (Global)");
    console.log("11 - Clientes que não compraram a mais de um ano");
    console.log("12 - Melhores Clientes (mais de 15 Compras)");
    console.log("13 - Inserção de cliente\n");

    option = + prompt("Selecione uma opção: ")


    switch (option) {
        case 1:
            FindClient();
            break;
        case 2:
            ListClients();
            break;
        case 3:
            ListClientsIndex();
            break;
        case 4:
            ListClientStartWith();
            break;
        case 5:
            ListNames();
            break;
        case 6:
            ListFirstName();
            break;
        case 7:
            ListFirstNameWithChar();
            break;
        case 8:
            ListAdults();
            break;
        case 9:
            CheckIfExists();
            break;
        case 10:
            SumSales();
            break;
        case 11:
            LastBuy();
            break;
        case 12:
            BestClientes();
            break;
        case 13:
            AddCLients();
            break;

        default:
            break;
    }


}



