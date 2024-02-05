export function RenderList(props){
    const list=props.list;
    // console.log(list);
    if(!Array.isArray(list)){
        console.error("list is  not a list");
        console.log(list);
        return null;
    }
    return (
    <div>
        {list.map(function(anime){
            return (
                <div>
                   <h1>{anime.animeName}</h1> 
                   <h2>{anime.description}</h2>
                   <button>{anime.completion==true?"seen":"continued"}</button>
                </div>
            );
        })}
    </div>
    );
}