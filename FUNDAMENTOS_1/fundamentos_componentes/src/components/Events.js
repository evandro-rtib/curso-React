const Events = ()  =>{
    const handleMyEvent = (e) =>{
        console.log(e);
        console.log("Ativou o evento!");
    };

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
                }}>Clique aqui também</button>
            </div>
        </div>
    );    
}
export default Events;