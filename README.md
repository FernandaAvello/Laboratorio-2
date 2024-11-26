# Proyecto Clínica

## Descripción
Este proyecto para una página web para una clínica ficticia.

## Características
- Vista Principal (Incluye sección de bienvenida, servicios, testimonios, pie de página)
- Presentación de Equipo Médico , listado.
- Página de Contacto (incluye formulario de contacto, mapa de la clínica)
- Página de Administración

## Requisitos
- Navegador Web.

## Ejecución
1. Clona el repositorio:
  ```bash
  git clone https://github.com/FernandaAvello/Laboratorio 1.git
  ```
2. Navega al directorio del proyecto:
3. Doble click en archivo `index.html`

## Carga de datos desde JSON

Se utilizan las funciones fetch para cargar los datos de los archivos doctors.json y doctorsNew.json.
Los datos se convierten a formato JavaScript utilizando response.json().

## Visualización de doctores en la página web

La función listarDoctores recorre el listado de doctores del archivo doctors.json y los muestra en la página web.
La función showExperienceDoctors filtra los doctores con 5 o más años de experiencia y los muestra en la página web.

## Clonación de un objeto JSON

Se crea un objeto doctor con información de un doctor.
Se clona el objeto utilizando JSON.parse(JSON.stringify(doctor)) para crear un nuevo objeto doctorNewList.
Se modifican algunas propiedades del objeto clonado.

## Merge de objetos JSON

Se cargan los datos de doctors.json y doctorsNew.json.
Se combinan los dos arreglos de doctores utilizando el operador de propagación (...).
Se muestra la lista combinada de doctores en la página web.

## Visualización y recorrido de doctores en la tabla de administración

La función listarDoctoresAdmin combina los datos de doctors.json y doctorsNew.json y los muestra en una tabla en la página admin.html.

## Estructuras de Datos Arreglos, pilas y colas.
El código proporcionado implementa dos estructuras de datos clásicas: una pila (Stack) y una cola (Queue), y las utiliza para gestionar citas clínicas y el orden de llegada de pacientes.

La clase Stack sigue el principio LIFO (Last In, First Out), donde el último elemento en entrar es el primero en salir. El constructor inicializa la pila como un arreglo vacío. El método push agrega una nueva cita a la pila, mientras que el método pop elimina y devuelve la última cita agregada, retornando un mensaje si la pila está vacía. El método peek permite ver la última cita sin eliminarla, y isEmpty verifica si la pila está vacía.

La clase Queue sigue el principio FIFO (First In, First Out), donde el primer elemento en entrar es el primero en salir. Similarmente, el constructor inicializa la cola como un arreglo vacío. El método enqueue agrega una nueva cita al final de la cola, mientras que el método dequeue elimina y devuelve la primera cita, retornando un mensaje si la cola está vacía. El método isEmpty verifica si la cola está vacía.

En el ejemplo, se crean tres objetos de pacientes (paciente1, paciente2, paciente3) y se agregan a una instancia de Stack llamada citasClinicas. Se utiliza el método push para agregar cada paciente a la pila y peek para verificar la última cita agendada. Luego, se crea una instancia de Queue llamada ordenLlegadaPacientes y se transfieren todas las citas de la pila a la cola utilizando un bucle while y los métodos pop y enqueue. Finalmente, se atienden los pacientes en el orden de llegada utilizando otro bucle while y el método dequeue, imprimiendo el nombre del paciente atendido.

## Algoritmo de Búsqueda Lineal

El algoritmo de búsqueda de un doctor en la tabla de admin.html tiene una complejidad temporal de O(m * k), donde m es el número de filas en la tabla y k es la longitud promedio de los nombres de los doctores. Esto se debe a que el algoritmo itera sobre cada fila de la tabla y convierte los nombres de los doctores a minúsculas para compararlos con el valor de búsqueda, también convertido a minúsculas. La complejidad ciclomática del algoritmo es 3, lo que indica que hay 3 caminos independientes a través del código, reflejando la presencia de un condicional para verificar la existencia del campo de búsqueda, un bucle para iterar sobre las filas de la tabla y otro condicional dentro del bucle para mostrar u ocultar las filas según el valor de búsqueda. Esta métrica sugiere que el código es relativamente simple y fácil de mantener.


## Algoritmo de Ordenamiento QuickSort

La función orderDoctorsByExperience implementa el algoritmo de ordenamiento quicksort para ordenar una lista de doctores según sus años de experiencia. El quicksort es un algoritmo de ordenamiento eficiente que utiliza el enfoque de "divide y vencerás".

Primero, la función verifica si la longitud de la lista de doctores es menor o igual a 1. Si es así, simplemente devuelve la lista, ya que una lista con un solo elemento o vacía ya está ordenada. Luego, selecciona el último elemento de la lista como el "pivote" y lo almacena en la variable pivot.

A continuación, la función divide la lista en dos sublistas: left y right. La sublista left contiene todos los doctores con menos años de experiencia que el pivote, mientras que la sublista right contiene todos los doctores con igual o mayor experiencia que el pivote. Esto se logra iterando sobre la lista de doctores (excepto el último elemento, que es el pivote) y comparando los años de experiencia de cada doctor con el pivote.

Finalmente, la función llama recursivamente a sí misma para ordenar las sublistas left y right, y luego combina las sublistas ordenadas con el pivote en el medio. El resultado es una lista de doctores ordenada por años de experiencia.