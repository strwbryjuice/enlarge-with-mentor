import './Plus-minus.css';

const PlusMinus = () => {
  return (
    <div id="plus-minus-div">
      <div className="icon plus">
        <div className="circle"></div>
        <div className="horizontal-line"></div>
        <div className="vertical-line"></div>
      </div>
      <div className="icon minus">
        <div className="circle"></div>
        <div className="horizontal-line"></div>
      </div>
    </div>
  );
};

export {PlusMinus};