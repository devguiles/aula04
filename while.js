var contador = 1;

while (contador <= 3) {
    console.log("contador: " + contador);
    contador = contador + 1;
}

contador = 1;

while (true) {
    console.log("contador: " + contador);

    if (contador == 3) {
        break;
    }

    contador = contador + 1;
}

