import "./index.css"
function SharedItem({sharedWork, index}){
    function oddNumber(key){
        if(key % 2 === 0){
            return <li className="itemwork"><a href={sharedWork}>{sharedWork}</a></li>
        }else{
            return <li className="itemworkOdd"><a href={sharedWork}>{sharedWork}</a></li>
        }
    }
    return (oddNumber(index))
}

export default SharedItem;