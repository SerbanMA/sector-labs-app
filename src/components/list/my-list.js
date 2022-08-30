import MyItem from "../item/item";

const MyList = ({ gists }) => {
  return gists.map((gist, index) => <MyItem key={index} gist={gist}></MyItem>);
};

export default MyList;
