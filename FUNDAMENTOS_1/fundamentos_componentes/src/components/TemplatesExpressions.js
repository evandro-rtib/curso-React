const TemplateExpressions = () =>{

    const name = "Evandro";
    const data ={
        name: name,
        age: 32,
        job: "Programmer"
    }
    return (
        <div>
            <h1>Olá {data.name}, tudo bem?</h1>
            <h3>Sua idade {data.age}</h3>
            <h3>Profissão: {data.job}</h3>
        </div>
    )

}

export default TemplateExpressions;