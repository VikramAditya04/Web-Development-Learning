export default function Price({oldPrice, newPrice}){
    let oldStyle = {
        textDecorationLine: "Line-through",
    };
    let newStyle = {
        fontWeight: "bold",
    };
  
    return (
        <div className="price">
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    )
} 