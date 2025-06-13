

export function FirstCard(prom){
    return(
        <div>
            <img src={prom.emblem} />
            <p>{prom.name}</p>
            <p>{prom.city}</p>
            <p>{prom.date}</p>
        </div>
    );
}




