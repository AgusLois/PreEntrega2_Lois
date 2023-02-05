let nota = 0;
let promedio = 0;
let totalNotas = 0;
let contador = 0;
let notaAlta = 0;

class Alumno {
  constructor(nombre) {
    this.nombre = nombre;
    this.notas = [];
    
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }


  agregarNota(nota) {
    this.notas.push(parseInt(nota));
  }

   sumarNotas() {
    this.notas.forEach((nota) => {
      totalNotas += nota;
      contador++;
    });
    return totalNotas;
  }
}


let alumno = new Alumno();

nombre = prompt("Ingrese un nombre");

alumno.setNombre(nombre);

console.log(alumno.nombre);

do {
  nota = parseInt(
    prompt(
      "Hola " +
        nombre +
        ", ingresa una nota, presiona 0 para conocer su promedio y su nota mas alta"
    )
  );

  if (nota != 0) {
    alumno.agregarNota(nota);
    if(nota > notaAlta){
    notaAlta = nota;
    }
  }
} while (nota != 0);


console.log(alumno.notas)

alert("Su promedio es de " + alumno.sumarNotas() / alumno.notas.length + " y su nota mas alta es " + notaAlta);

