function Student(naam, studentId, klas) {

    let obj = this;
    this.name = naam;
    this.id = studentId;
    obj.cijfers = [];
    let klas = klas;

}

let student = new Student('myName', '0001', 'MD2A');

// Hier moet je de variabele klas een waarde geven bijvoorbeeld MD2
console.log(
    student.klas
)