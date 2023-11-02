import "./Colors.css"

function Colors() {
  return (
    <div>
      <h2 className="color-title sidebar-title">Color</h2>
      <label className="sidebar-label-container">
        <input type="radio" name="test" ></input>
        <span className="checkmark"></span>All
        </label>

        <label className="sidebar-label-container">
        <input type="radio" name="test" ></input>
        <span className="checkmark"></span>Black
        </label>

        <label className="sidebar-label-container">
        <input type="radio" name="test" ></input>
        <span className="checkmark"></span>Red
        </label>

        <label className="sidebar-label-container">
        <input type="radio" name="test" ></input>
        <span className="checkmark"></span>White
        </label>

        <label className="sidebar-label-container">
        <input type="radio" name="test" ></input>
        <span className="checkmark"></span>Blue
        </label>

        <label className="sidebar-label-container">
        <input type="radio" name="test" ></input>
        <span className="checkmark"></span>Green
        </label>
    </div>
  );
}

export default Colors;