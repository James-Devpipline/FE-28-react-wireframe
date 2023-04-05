import logo from "../images/logo.png";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top-logo">
        <img src={logo} alt="" />
      </div>
      <div className="five-buttons">
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
      </div>
      <div className="bottom-logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};
