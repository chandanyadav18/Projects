import "./modal.css";

const SafModal = ({ setOpenModal }) => {
  return (
    <div className="modalBackground" onClick={() => setOpenModal(false)}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="titleCloseBtn">
          <button onClick={() => setOpenModal(false)}> X </button>
        </div>
        <div className="title">
          <h3>🔐 Safety</h3>
        </div>
        <div className="body">
          <p>
            Your work email is immediately one-way hashed and held separately
            from the account that you are about to create.
          </p>
          <p>
            This means that there is no way for your organization to trace your
            username or activity back to your work email.
          </p>
          <p>
            Our secure system provides the true psychological safety required
            for colleagues to speak openly and honestly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafModal;
