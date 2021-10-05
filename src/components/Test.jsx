const Test = ({ geners }) => {
  return (
    <>
      {geners.map((gener) => (
        <span className = "mr-1" key= {Math.random()}>{gener.name}</span>
      ))}
    </>
  );
};

export default Test;
