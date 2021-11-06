let tabBarStyle = {
  position: "fixed",
  width: "100%",
  top: "4.55rem", //calculated from menu css
  backgroundColor: "#F8F8F8",
    // height: "3.2em",
  fontWeight: "650",
  fontSize: "1.6rem",
  zIndex: "2",
  boxShadow: "0px 0.5px #C0C0C0",
  // borderBottom:"0.1px solid black"
boxSizing: "border-box"

}
let tabStyle = {
  width:"50%"
}
function TabBar() {
  let url = window.location.pathname
  var cal = ""
  var forum=""
  if (url = "/forum") {
    cal = "nav-link";
    forum = "nav-link active";
  }
  else {
    cal = "nav-link active";
    forum = "nav-link";
  }
  return (
    <div style={tabBarStyle}>
      <ul className="nav nav-tabs" style={tabBarStyle}>
        <li className={cal} style={tabStyle}>
          <a  href="/calendar">Calender</a>
        </li>
        <li className={forum} style={tabStyle}>
          <a  href="/forum">Forum</a>
        </li>
      </ul>
    </div>
  );
}
export default TabBar;