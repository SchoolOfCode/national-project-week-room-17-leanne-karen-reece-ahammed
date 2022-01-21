import { useEffect } from "react";
import "./index.css"


function DisplayItem({reflect, index}){

    function oddNumber(key){
        if(key % 2 === 0){
            return (<li className="item">{reflect}</li>)
        }else{
            return (<li className="itemOdd">{reflect}</li>)
        }
    }

    return  (<div>
        {oddNumber(index)}
</div>
)
        }

export default DisplayItem;