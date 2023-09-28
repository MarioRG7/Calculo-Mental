import {useState,useEffect} from "react"

export default function Calculo(){
    const [enunciado,setEnunciado]= useState();
    const [respuesta, setRespuesta] = useState("");
    const [resultado, setResultado] = useState(0)
    const [acierto,setAcierto] = useState(0);

    useEffect(()=>{
        newEnunciado()
    },[])

    const newEnunciado = () =>{
        const numeroAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
        setEnunciado(numeroAleatorio);
        const cadenaNumeros = numeroAleatorio.toString().split('').map(Number)
        const suma = cadenaNumeros.reduce((a,b) => a +b ,0)
        setResultado(suma);
        console.log(suma)
    }

    const handleChange = (event)=>{
        setRespuesta(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(respuesta)
        if(respuesta == resultado){
            setRespuesta("")
            newEnunciado()
            setAcierto(acierto + 1)
        }else{
            alert("Resultado Erroneo")
            setRespuesta("")
        }

        
    }
    return (
        <>
            <div className="principal">
                <h3>Llevas {acierto} aciertos</h3>
                <div className="enunciado">
                    <h1>{enunciado}</h1>
                </div>
                <div className="respuesta">
                    <form onSubmit= {handleSubmit}>
                        <input type="text" name="respuesta" value = {respuesta} onChange={handleChange}/>
                    </form>
                </div>
            </div>
        </>
    )
}