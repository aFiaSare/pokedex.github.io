export const Button = ({ name, event, classname }) => {
  return (
    <button className={"m-1"} onClick={event}>
      {name}
    </button>
  );
};
