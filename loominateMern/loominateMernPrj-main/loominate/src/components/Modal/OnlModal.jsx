import "./modal.css";

const OnlModal = ({ setOpenModal1 }) => {
  return (
    <div className="modalBackground" onClick={() => setOpenModal1(false)}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="titleCloseBtn">
          <button onClick={() => setOpenModal1(false)}> X </button>
        </div>
        <div className="title">
          <h3>🦄 The only place to just be yourself</h3>
        </div>
        <div className="body">
          <p>Loominate is an alias-based platform where staff can...</p>
          <ul>
            <li>
              Connect across hierarchies and divisions to trade battle stories
              and exchange thoughts on company issues.
            </li>
            <li>
              Get honest answers about layoffs, mental health, salaries, and
              career progression.
            </li>
            <li>
              Have a voice and be counted by joining staff campaigns and
              petitions - bring light to widespread concerns or make a brilliant
              staff idea go viral so that leaders sit up and listen!
            </li>
            <li>
              Be vulnerable - speak up on your struggles and get upvoted support
              from colleagues who have been through it.
            </li>
            <li>
              Most importantly, earn rewards and reputation for creating a
              kinder, more joyful workplace. Join to see how!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OnlModal;
