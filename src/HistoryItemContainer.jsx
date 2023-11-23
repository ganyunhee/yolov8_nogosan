import "./App.css";

const HistoryItemContainer = ({ title, date, category, confidence}) => {
  return (
    <div className="w-full rounded-xl bg-slate-100 hover:bg-gray-200 cursor-pointer">
      <div style={item_wrapper}>
        <h1 style={item_title}>{title}</h1>
        <div style={item_date}>{date}</div>
        <div style={item_summary}>
          <div>{category}</div>
          <div>Confidence : {confidence}</div>
        </div>
      </div>
    </div>
  );
};

const item_container = {
  width: "466px",
  height: "132px",
  maxwidth: "auto",
  maxHeight: "auto",
  border: "1px solid black",
  margin: "15px 30px 15px 30px",
};
const item_wrapper = {
  padding: "10px 20px 10px 20px",
};
const item_title = {
  marginTop: 5,
  marginBottom: 0,
};
const item_date = {
  marginBottom: "10px",
};
const item_summary = {
  /**/
};
export default HistoryItemContainer;
