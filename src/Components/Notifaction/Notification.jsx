import "../Notifaction/Notification.css"

const Notification = () => {
  return (
    <>
      {/* <div className="notification">
     <a className="noti-icon" href=""></a>
   </div> */}
      <a className="noti-icon" href="" style={{borderRadius:"50%", display:"flex",alignItems:"center",justifyContent:"center",position:"fixed"}}>
        <i className="bi bi-chat-right"></i>
      </a>
    </>
  );
}

export default Notification