import Card from "./card";
function Main(){
    return(
        <div className="main">
            <h2>Blockbuster Deals on Computer Asseories | Shop Now</h2>
            <div className="card-Container">
                <Card title = "Logitech MX Master 3S" idx = {0}/>
                <Card title = "Apple Pencil (2nd gen)" idx = {1}/>
                <Card title = "Zebronics Zeb-Transformer" idx = {2}/>
                <Card title = "Portronics Wireless Mouse" idx = {3}/>
            </div>
        </div>
    );
}

export default Main;