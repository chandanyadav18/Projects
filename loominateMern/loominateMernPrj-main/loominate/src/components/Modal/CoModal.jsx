import "./modal.css";

const CoModal = ({ setOpenModal2 }) => {
  return (
    <div className="modalBackground" onClick={() => setOpenModal2(false)}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="titleCloseBtn">
          <button onClick={() => setOpenModal2(false)}> X </button>
        </div>
        <div className="title">
          <h3>Colleagues Only</h3>
        </div>
        <div className="body">
          <p>
            Loominate is a place for coworkers of the same organization. We
            group colleagues into the same private space (eg.
            acme.loominate.app) based on the work email used during sign-up
            (@acme.com).
          </p>
          <p>All users go through the same verification process.</p>
          <p>
            {" "}
            Note: Loominate is an independent, employee-driven platform and is
            not affiliated to your company or organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoModal;
