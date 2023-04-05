import image from "../images/diagram.png";

export const MainContent = () => {
  return (
    <div className="main-content">
      <div className="top-content">
        <h1>MAIN CONTENT</h1>
      </div>

      <div className="middle-content">
        <div className="first-div">
          <div className="content-wrapper">
            <h1>MAIN CONTENT</h1>
          </div>

          <div className="image-wrapper">
            <image src={image} />
          </div>
        </div>

        <div className="second-div">
          <div className="image-wrapper">
            <image src={image} />
          </div>

          <div className="content-wrapper">
            <h1>MAIN CONTENT</h1>
          </div>
        </div>
      </div>

      <div className="bottom-content">
        <h1>MAIN CONTENT</h1>
      </div>
    </div>
  );
};
