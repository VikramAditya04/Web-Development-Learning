import { useState } from "react";

export default function Count(){ // using hook
    // let count = 0;
    // function IncreseCount(){
    //     count += 1;
    //     console.log(count);
        
    // }

    let [count, setCount] = useState(0);
    let IncreseCount = () =>{
        setCount(count+1);
    }

    return(
        <div>
            <h3> Count = {count}</h3>
            <button onClick={IncreseCount}>Increse Count</button>
        </div>
    );
}

