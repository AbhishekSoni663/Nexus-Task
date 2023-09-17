import "../Notifaction/Notification.css"

const Notification = () => {
  return (
    <>
      {/* <div className="notification">
     <a className="noti-icon" href=""></a>
   </div> */}
      <a className="noti-icon" href="" style={{border:"1px solid white", width:"42px",borderRadius:"50%",padding:"6px", display:"flex",alignItems:"center",justifyContent:"center",position:"fixed"}}>
        <i className="bi bi-chat-right"></i>
      </a>
    </>
  );
}

export default Notification