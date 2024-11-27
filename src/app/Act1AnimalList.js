"use client";
import { useState } from "react";

//Array con un animal inicial
const initialAnimals = [
    {
        id: 1,
        name: "Cora",
        edad: 14,
        especie: "Canina",
        sexo: "Hembra"
    }
]

//El indice ya que tengo un animal añadido antes
let index = 2;

//Componente animal que recibe por props los atributos
function Animal({name, edad, especie, sexo }) {
    return (
        <div>
            <li>Nombre: {name} _______ Especie: {especie} _______ Edad: {edad} _______ Sexo: {sexo}</li>
        </div>
    )
}

//Funcion para validacion en tiempo real del campo nombre y el campo especie
function Validacion({ name, especie }) {
    return (
        <li>
            Validacion: {name.length >= 1 ? "Nombre valido" : "Complete el campo nombre"}_______{especie.length >= 1 ? "Especie valido" : "Complete el campo especie"}
        </li>
    )
}

//Componente principal AnimalList
export default function AnimalListVuelta() {

    //Estado para no mostrar la validacion en tiempo real si no se ha escrito aun
    const [isFirstEdit, setIsFirstEdit] = useState(false);
    //Estado para comprobar si lo escrito es valido o no
    const [valid, setValid] = useState(false);
    //Estado para el array de animales
    const [animals, setAnimals] = useState(initialAnimals);
    //Estado para controlar todos los campos de inputs
    const [inputTexts, setInputTexts] = useState({
        id: "",
        nombre: "",
        edad: "",
        especie: "",
        sexo: ""
    });

    /**
     * Va cambiando el estado de los inputs en tiempo real. También los valida para que el boton se pueda habilitar o no
     * @param e 
     */
    function handleChange(e) {
        const { name: type, value: newValue } = e.target;
        //Dejamos todos los inputs tal cual menos el que le pasamos el nombre, que lo vamos actualizando con el newValue
        const updatedInputs = {
            ...inputTexts,
            [type]: newValue
        }
        //Hacemos el set de input actualizados
        setInputTexts(updatedInputs)
        setIsFirstEdit(true);

        //Comprobamos la validacion de name y especie
        const isNameValid = updatedInputs.name.length >= 1;
        const isEspecieValid = updatedInputs.especie.length >= 1;
        setValid(isNameValid && isEspecieValid)
    }

    /**
     * Funcion para añdir animales
     * @param e 
     */
    function addAnimalsClick(e) {
        e.preventDefault();
        //Hacemos el set de un nuevo animal con el valor de los inputs
        setAnimals([
            ...animals,
            {
                id: index++,
                name: inputTexts.name,
                especie: inputTexts.especie,
                edad: inputTexts.edad,
                sexo: inputTexts.sexo
            }
        ])
        //Pongo todos los inputs facios tras añadir el animal
        setInputTexts({
            id: "",
            name: "",
            especie: "",
            edad: "",
            sexo: ""
        });
        setIsFirstEdit(false)
    }

    //Inputs para añadir todos los campos de los animales. Tienen un name para identificar cada campo en las funciones
    //Se les indica el tipo y un placeholder para mostrar lo que va en cada uno
    //Si no se ha empezado a editar, no muestra la validacion en tiempo real
    return (
        <div>
            <form>
                <input name="name" type="text" placeholder="Nombre..." onChange={handleChange}  />
                <input name="especie" type="text" placeholder="Especie..." onChange={handleChange} />
                <input name="edad" type="number" placeholder="Edad..." onChange={handleChange}  />
                <input name="sexo" type="text" placeholder="Sexo..." onChange={handleChange}  />
                {isFirstEdit && <Validacion name={inputTexts.name} especie={inputTexts.especie} />}
                <button onClick={addAnimalsClick} disabled={!valid}>Agregar</button>
            </form>
            <br></br>
            <br></br>
            {animals.map((u) => (
                <Animal key={u.id} name={u.name} especie={u.especie} edad={u.edad} sexo={u.sexo} />
            ))}
        </div>
    )
}