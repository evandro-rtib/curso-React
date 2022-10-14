const Events = ()  =>{
    const handleMyEvent = (e) =>{
        console.log(e);
        console.log("Ativou o evento!");
    };

    return(
        <div>
            <button onClick={handleMyEvent}>Clique aqui</button>
        </div>
    );    
}
export default Events;