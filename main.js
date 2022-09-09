const pizzas = [
  {
    id: 1,
    nombre: 'Muzzarella',
    ingredientes: ['Queso', 'Oregano', 'Salsa'],
    precio: 500,
    
  },
  {
    id: 2,
    nombre: 'Calabresa',
    ingredientes: ['Queso', 'Salame', 'Oregano'],
    precio: 800,
  },
  {
    id: 3,
    nombre: 'Rucula',
    ingredientes: ['Queso', 'Rucula', 'Rallado', 'Jamon'],
    precio: 850,
  },
  {
    id: 4,
    nombre: 'Palmitos',
    ingredientes: ['Queso', 'Palmitos', 'Salsa Golf'],
    precio: 1200,
  },
  {
    id: 5,
    nombre: 'Especial',
    ingredientes: ['Queso', 'Paleta', 'Huevo'],
    precio: 450,
  },
  {
    id: 6,
    nombre: 'Argentina',
    ingredientes: ['Queso', 'Huevos Fritos', 'Papas'],
    precio: 1500,
  },
];

 const input = document.getElementById('input-number');
 const button = document.getElementById('btn');
 const resultadoPizza = document.querySelector('.result-list');

    button.addEventListener('click', e => {
          e.preventDefault();
        const valor = input.value.trim();
        const varPizza = pizzas.find(pizza => pizza.id == valor)

        // Una vez que se haga el submit se resetea el input a vacio
         input.value = '';

      if(varPizza){
        return resultadoPizza.innerHTML=`<h2 class="text-h2">Nombre: ${varPizza.nombre}</h2>
                <h4 class="text-h4">Precio: $${varPizza.precio}</h4>`
     }else{
        resultadoPizza.innerHTML=`
        <p class="text" >No existe ninguna pizza con ese id</p>`
     
      }
        
   
    });

