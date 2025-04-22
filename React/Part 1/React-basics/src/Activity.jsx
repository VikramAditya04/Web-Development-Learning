function Greet({ userName, textColor }) {
  // let styles = {color: textColor};
  return (
    <div className="greet">
      <h3 style={{ color: textColor }}>Hello! {userName}</h3>
    </div>
  );
}

export default Greet;
