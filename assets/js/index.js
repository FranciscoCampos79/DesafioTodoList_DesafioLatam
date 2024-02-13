const newtarea = document.getElementById("tarea");
const btnTarea = document.getElementById("añadirTarea");
const lista = document.getElementById("lista_tarea");
const cuentaTarea = document.getElementById("cuentaTarea");
const tareaTerminada = document.getElementById("tareasHechas");

const tareas = [
    {id: 103, tarea: "Pasear al perro"},
    {id: 45, tarea: "Caminar por la montaña"},
    {id: 385, tarea: "Comer chocolates"}
];

btnTarea.addEventListener('click', () => {
    const nuevaTarea = newtarea.value;
    tareas.push({id: Math.floor(Math.random()*999), tarea: nuevaTarea});
    newtarea.value = "";
    agregar();
});

const agregar = () => {
    let html = "";
    for (let tarea of tareas) {
        html += `
        <tr>
            <td>${tarea.id}</td>
            <td>${tarea.tarea}</td>
            <td>
                <input type="checkbox" ${tarea.realizada ? 'checked' : ''} onclick="tareaLista(${tarea.id})">
                <button onclick="borrar(${tarea.id})"><i class="fa-solid fa-xmark"></i></button>
            </td>
        </tr>
         `;
    }
    lista.innerHTML = html;
    cuentaTarea.textContent = `${tareas.length}`;
    tareaTerminada.textContent = tareas.filter((tarea) => tarea.realizada).length;
};

const borrar = (id) => {
    const index = tareas.findIndex((item) => item.id === id);
    tareas.splice(index, 1);
    agregar();
};

const tareaLista = (id) => {
    const tarea = tareas.find((item) => item.id === id);
    tarea.realizada = !tarea.realizada;
    agregar();
}

agregar();