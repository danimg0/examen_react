"use client"
import { useState } from 'react';

const libros = [
    { id: 1, titulo: "Libro 1" },
    { id: 2, titulo: "Libro 2" },
    { id: 3, titulo: "Libro 3" }
]

let numId = 4

//Componente Book
function Book({ libro, onUpdate }) {

    const [isEditing, setIsEditing] = useState(false)

    let mostrarLibro;

    if (isEditing) {
        mostrarLibro =
            <>
                <input value={libro.titulo} onChange={e => onUpdate(libro.id, e.target.value)} />
                <button onClick={() => setIsEditing(false)}>Actualizar</button>
            </>
    } else {
        mostrarLibro =
            <>
                {<p style={{ display: "inline" }} >{libro.titulo}</p>}
                <button onClick={() => setIsEditing(true)}>Editar</button>
            </>
    }
    return (<div >
        {mostrarLibro}
    </div>);
}


export default function TaskList() {

    const [librosEstado, setLibrosEstado] = useState(libros);

    

    function handleUpdate(libroId, textoNuevo) {
        setLibrosEstado(librosEstado.map(libro => {
            if (libro.id === libroId) {
                return { ...libro, descripcion: textoNuevo }
            } else {
                return libro
            }
        }
        ))
    }

    return (
        <div>
            {librosEstado.map(libro =>
                <Book key={libro.id} libro={libro} onUpdate={handleUpdate} />
            )}
        </div>);
}