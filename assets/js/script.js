// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

const shoppingList = ["Farina", "Latte", "Uova", "Birra", "Pesce", "Pasta"];
let i = 0
while (i < shoppingList.length) {

    const element = shoppingList[i];

    document.querySelector("div").innerHTML += element + '<br>'

    i++
}