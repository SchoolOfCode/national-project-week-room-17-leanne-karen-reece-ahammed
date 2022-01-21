import "./index.css"


function DisplayItem({reflect, index}){

    function oddNumber(key){
        if(key % 2 === 0){
            return (<li className="item">"- {reflect}"</li>)
        }else{
            return (<li className="itemOdd">"- {reflect}"</li>)
        }
    }

    return  (<div>
        {oddNumber(index)}
        <p>11.22</p>
</div>
)
        }
export default DisplayItem;