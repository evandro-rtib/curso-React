const Challenge = ()=>{
    const numero1=5, numero2=10;

    const soma = (n1,n2) => n1 +n2;

    return(
        <div>
            <h2>Número 1: {numero1}</h2>
            <h2>Número 2: {numero2}</h2>
            <h4>A soma de {numero1} + {numero2}  = {soma(numero1,numero2)}</h4>
            <button onClick={() => console.log(soma(numero1,numero2))}>somar</button>
        </div>
    );
}

export default Challenge;