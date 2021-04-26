import React from 'react';
import './MostrarCajas.css';


const MostarCajas = (props) => {
    const {cajas}=props;
    console.log(cajas)
    return (
        
        <div className="contenido">
            
            {cajas.length > 0? cajas.map((item,index)=><div className="cajas" style={{backgroundColor:item.color}}key={index}>{item.color}</div>):<h1>"Usuario Agregue un Color"</h1>}
            
        </div>
    );
}

export default MostarCajas;
