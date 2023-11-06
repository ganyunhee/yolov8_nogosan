import './App.css';

const HistoryItemContainer = ({ title, date, category, confidence_rate }) => {
    return (
        <div style={item_container}>
            <div style={item_wrapper}>
                <h1 style={item_title}>Store Name 1</h1>
                <div style={item_date}>2023/10/23 10:23PM</div>
                <div style={item_summary}>
                    <div>Theft accident - 1 Person involved</div>
                    <div>Confidence Rate</div>
                </div>
            </div>
        </div>
    );
}

const item_container = {
    width: "466px",
    height: "132px",
    maxwidth: "auto",
    maxHeight: "auto",
    border: "1px solid black",
    margin: "15px 30px 15px 30px"
}
const item_wrapper = {
    padding: "10px 20px 10px 20px"
}
const item_title = {
    marginTop: 5,
    marginBottom: 0
}
const item_date = {
    marginBottom: "10px",
}
const item_summary = {
    /**/
}
export default HistoryItemContainer;