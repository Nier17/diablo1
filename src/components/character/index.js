import React, {useState, useEffect, useCallback} from 'react'
import img from '../../assets/Warrior2.gif'

export default function() {
    
    const [vida, setVida] = useState(1);
    const [movimiento, setMovimiento] = useState(1);
    const [posY, setPosY] = useState(1);

    const handleKeyPress = (event) => {
        console.log(event.key)
        if(event.key === 'ArrowLeft') {
            let vidita = vida;
            let mov = movimiento;
            setVida(vidita+1);
            setMovimiento(mov-30)
        }
        if(event.key === 'ArrowRight'){
            let vidita = vida;
            let mov = movimiento;
            setVida(vidita+1);
            setMovimiento(mov+30)
        }
        if(event.key === 'ArrowUp') {
            let vidita = vida;
            let posy = posY;
            setVida(vidita+1);
            setPosY(posy-30)
        }
        if(event.key === 'ArrowDown'){
            let vidita = vida;
            let posy = posY;
            setVida(vidita+1);
            setPosY(posy+30)
        }
      }

    function aumentarVida() {
        let vidita = vida;
        let mov = movimiento;
        setVida(vidita+1);
        setMovimiento(mov+30)
    }

    function quitarVida() {
        let vidita = vida;
        let mov = movimiento;
        setVida(vidita-1);
        setMovimiento(mov-30)
    }

    // useEffect(() => {
    //     document.addEventListener("keydown", escFunction, false);

    //     return () => {
    //       document.removeEventListener("keydown", escFunction, false);
    //     };
    // }, [vida, movimiento])

    return (
        <div onKeyDown={handleKeyPress} tabIndex="0">
            {/* <input type="text" onKeyDown={handleKeyPress}></input> */}
            <img src={img} style={{marginLeft:movimiento, marginTop:posY}}></img>
            <div></div>
            <button onClick={aumentarVida}>Aumentar vida</button>
            <h1>posicion: {movimiento}</h1>
            <h1>vida: {vida}</h1>
            <button onClick={quitarVida}>Quitar vida</button>
        </div>
    )
}