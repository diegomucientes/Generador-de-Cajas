import React from 'react';

const CrearCajas = (props) => {
    const {cajas,caja,setCaja,setCajas}= props; //setCajas deberá ser onSubmit ya que siempre el usuario entregará una caja 
                                        //Pero setColores deberá ser onChange porque irá cambiando el color de la caja 

    const onSubmit=(e)=>{
        e.preventDefault();
        setCajas([caja,...cajas]);
        // props.mostrar(cajas);
        // Llamo a la función papaPivote contenida en "mostrar", para que tome un array de las cajas y aplique el parametro colores a cajas
    }
    const onChange=(e)=>{
        e.preventDefault();
        setCaja({...caja,[e.target.name]:e.target.value}) // llamo a la función setColores a que cambie el estado de colores, por el input del usuario
    }
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="color">Write a Color String:</label>
            <input onChange={onChange}name="color"></input>
            <label htmlFor="tamaño"></label>
            <input name="tamaño"></input>
            <button>Add Color</button>

        </form>
    );
}

export default CrearCajas;
