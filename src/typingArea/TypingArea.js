import './TypingArea.css';
import { useState } from 'react'
import messages from '../message/Messages';


function TypingArea({ f }) {

    // const addMsg = (msg) => {
    //     const newMsg = {msgStyle1:"media w-50 ml-auto mb-3", msgStyle2:"bg-primary rounded py-2 px-3 mb-2", msgStyle3:"text-small mb-0 text-white",  content: msg};
    //     console.log("before " + messages)
    //     messages.push(newMsg);
    //     console.log("after " + messages)
    //     // messages.push(newMsg);
    //     // window.alert(1);
    //     // setMsgList(messages.concat(newMsg));
    //   }
    const [textMsg, setTextMsg] = useState('');

    return (
        <form action="#" className="bg-light">
            <pre>{JSON.stringify(messages,undefined,2)}</pre>
            <div className="input-group">
                <input type="text" placeholder="Type a message" aria-describedby="button-addon2"
                    className="form-control rounded-0 border-0 py-4 bg-light"
                    value={textMsg} onChange={(e) => setTextMsg(e.target.value)}></input>
                {/* <button id="button-addon2" type="submit" className="btn btn-primary" onClick={()=> {messages.concat([{msgStyle1:"media w-50 ml-auto mb-3", msgStyle2:"bg-primary rounded py-2 px-3 mb-2", msgStyle3:"text-small mb-0 text-white",  content: textMsg.target.value}]);
        console.log("new msg = " + newMsg);
        }}> send</button> */}
                    <button id="button-addon2" type="submit" className="btn btn-primary" onClick={()=>{f(textMsg)}}> send</button>

                <div className="input-group-append">
                </div>
                <div className="dropup">
                    <button className="dropbtn">Dropup</button>
                    <div className="dropup-content">
                        <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-video-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
                            <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg></a>
                    </div>
                </div>
            </div>
        </form>

    )
}
export default TypingArea;



