
const Cell = ({ TieneMina, EstaDestapado, MinasAlrededor, x, y, updateBoard }) => {
  
  const handleOnclick = () => {
    updateBoard(y, x);
  }

  return (
    <button onClick={handleOnclick} className='cell' id={"arround" + MinasAlrededor}>
      {EstaDestapado ? (TieneMina ? '💣' : MinasAlrededor) : null}
    </button>
  );
};

export default Cell;
