import React,{useState} from 'react';
import CrearCajas from './CrearCajas';
import MostarCajas from './MostarCajas';

const App = () => {
    const [caja,setCaja]=useState({tamaño:"",color:""});
    const [cajas,setCajas]=useState([]);

    console.log(cajas);
    return (
        <div>
            <CrearCajas setCajas={setCajas}setCaja={setCaja}caja={caja}cajas={cajas}/>
            <MostarCajas cajas={cajas}/>
        </div>
    );
}

export default App;
