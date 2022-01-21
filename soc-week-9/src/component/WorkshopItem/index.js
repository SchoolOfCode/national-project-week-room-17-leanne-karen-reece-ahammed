import "./style.css"

function WorkshopItem({percent}){
    return (<li className="percent"><pre>{percent}%</pre></li>)
}

export default WorkshopItem;