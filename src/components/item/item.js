import "./item.css";

const MyItem = ({ gist }) => {
  return (
    <div className="item">
      <p>id: {gist.id}</p>

      <div className="separator"> </div>

      {Object.values(gist.files).map((file) => (
        <div className="badge">{file.type}</div>
      ))}
    </div>
  );
};

export default MyItem;
