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
        </div>
    )

}

export default TemplateExpressions;