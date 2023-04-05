import image from "../diagram.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="top-image">
        <img src={image} alt="" />
      </div>
      <div className="main-header">
        <h1>HEADER</h1>
      </div>
      <div className="sub-header">
        <h2>SUBHEADER</h2>
      </div>
    </div>
  );
};
