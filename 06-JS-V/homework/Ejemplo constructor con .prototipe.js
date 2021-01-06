
function Persona(nombre,apellido){
    this.nombre=nombre;
    this.apellido=apellido;
  }
  Persona.prototype.agregarNombre=function(){
    return this.nombre+' '+ this.apellido;
  }
  var toni=new Persona('Toni', 'Benitez');

  //Llamar 
  toni // muestra sus propiedades y metodos : Persona { nombre: 'Toni', apellido: 'Benitez' }
  toni.agregarNombre() //mostrar : 'Toni Benitez'

  // agrego un nuevo objeto 
  var Lina =new Persona('lina','Delgado');
  // agregar un nuevo metodo que cambien el orde de las letras
  Lina.agregarNombre=function(){ 
      var nuevo=''; 
      for(var i= this.nombre.length-1;i>=0;i--){
           nuevo=nuevo +this.nombre.charAt(i);
        } 
           return ' mi nuevo nombre es '+nuevo;
        }
// para mostrar el metodo creado se usa 
Lina // me mostrara :
/*Persona {
    nombre: 'lina',
    apellido: 'delgado',
    agregarNombre: [Function (anonymous)]
  }*/
Lina.agregarNombre(); //mostrara: ' mi nuevo nombre es anil'

// para cambiar algun atributo ya sea nombre o apellido lo hago asi 
Lina.nombre='fernanda';
//y para llamar de nuevo el metodo de intercambiar el sentido del nombre 
Lina.agregarNombre();
