export default function Form(){
    return (
        <>
        <div className="m-2">
        <input type="text" placeholder="Write Something..." />
        <button onClick={Handle}>Submit</button>
        </div>
        </>
    );
}

function Handle(){
    // event.preventDefault();
    console.log("Form is Submited");
    
}