import { useState } from 'react'
import { useHistory } from 'react-router-dom';
function SettingsMenu(props) {
  let [backdrop,setBackdrop]=useState()
  let oldBg = document.body.style.backgroundColor;
  function openNav() {
    document.getElementById("mySidenav").style.width = "70vw";
    setBackdrop(<div className="backdrop"></div>);
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = oldBg;
    setBackdrop(<></>);
  }
  let history = useHistory();
  const redirect = (url) => {
    history.push(url)
  }
  let icon = ""
  let onClkFun=""
  if (props.type == "menu") {
     onClkFun = openNav;
    icon="/asserts/img/icons/menu.png"
  }
  else { //only back as of now
    onClkFun = () => { redirect(props.url) };
    icon="/asserts/img/icons/back.png"

  }
  return (
    <>
      {backdrop}
      <div id="mySidenav" className="sidenav" style={{ zIndex: "10" }}>
        <a className="closebtn" onClick={closeNav}>&times;</a>
        <a href="#">Room ID : 1a2De3 </a>
        <a href="#">Profile</a>
        <a href="#">Leave Room</a>
        <a href="#">Signout</a>
      </div>
      <div id="outView" style={{backgroundColor:"#f8f8f8"}}>
        <span onClick={onClkFun}>
        <img width="20px" style={{ left:"1.5rem",top:"1.5rem",position :"fixed" }} alt="NavIcon" src={icon} />
        </span>
      <div className="smallGap" ></div>

      </div>
    </>
  )
}
export default SettingsMenu;