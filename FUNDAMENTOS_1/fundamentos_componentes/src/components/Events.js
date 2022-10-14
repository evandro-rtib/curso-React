const Events = ()  =>{
    const handleMyEvent = (e) =>{
        console.log(e);
        console.log("Ativou o evento!");
    };

    const renderSomenting = (x) => {
        if (x)
        {
            return <h1>Posso retornar isso aqui em um return de função!!!</h1>
        }
        else{
            return <h1>Posso retornar essa outra coisa aqui no return!!!</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={()=> console.log("clicou!")}>Clique aqui também</button>
            </div>
            <div>
                <button onClick={()=> {
                    if (true){
                        console.log("Isso não é bom estar aqui");
                    }
                }}>Clique aqui outro</button>
            </div>
            {renderSomenting(true)}
            {renderSomenting(false)}
        </div>
    );    
}
export default Events;