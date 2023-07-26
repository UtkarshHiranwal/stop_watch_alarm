import {useEffect,useRef,useState} from "react";
import mysong from "../assets/song.mp3"
const Alarm = ()=>{
    const time = new Date();
    const [chk,setChk] = useState(0);
    const [syssec,setSyssec] = useState(time.getSeconds());
    const [sysmin,setSysmin] = useState(time.getMinutes());
    const [syshrs,setSyshrs] = useState(time.getHours());
    const [userhr,setUserhr] = useState(null);
    const [usermin,setUsermin] = useState(null);
    const [usersec,setUsersec] = useState(null);
    const [showtime,setShowtime] = useState("")
    const audioRef = useRef();
    const hrref = useRef();
    const minref = useRef();
    const secref = useRef();
    
    useEffect(()=>{
        setInterval(()=>{
            setChk((a)=>a+1)
            setSyssec(time.getSeconds())
            setSysmin(time.getMinutes())
            setSyshrs(time.getHours())
        },1000) },[chk])
   
    useEffect(()=>{
        
        if(userhr == syshrs && usermin == sysmin && usersec == syssec){
            audioRef.current.play();
        }
    },[syshrs,sysmin,syssec,userhr,usermin,usersec])

    const setAlarm = (e) =>{
        e.preventDefault();
        
        setUserhr(hrref.current.value);
        console.log(hrref.current.value);
        setUsermin(minref.current.value);
        setUsersec(secref.current.value); 
        
        setShowtime("Set on "+hrref.current.value+" hours "+minref.current.value+" minutes "+ secref.current.value+" seconds")    
        
    }
  
    const stopAlarm = (e) =>{
        e.preventDefault();
        audioRef.current.pause();
        hrref.current.value = null;
        minref.current.value = null;
        secref.current.value = null;
        setUserhr(null);
        setUsermin(null);
        setUsersec(null);
        setShowtime("");
        
    }
    const chng = ()=>{
        
    }

    return (
        <div className="alamain">
            <div className="name">Alarm Clock</div>
            <div className="tym">
                <span id="hhrs">{syshrs}</span><span>:</span><span id="mmin">{(sysmin<10)?"0"+sysmin:sysmin}</span><span>:</span><span id="ssec">{(syssec<10)?"0"+syssec:syssec}</span></div>
            <div className="alrmset">
                <form className="form" >
                    <input type="number" placeholder="Enter hours (System format)" ref={hrref} />
                    <input type="number" placeholder="Enter minutes " ref = {minref}/>
                    <input type="number" placeholder="Enter seconds" ref = {secref}/>
                    <div className="butt" id="alabutt">
                        <button onClick={setAlarm} onChange={chng}>Set</button>
                        <button onClick={stopAlarm}>Stop</button>
                    </div>
                    <audio ref={audioRef} src = {mysong}></audio>
                </form>
                <div className="name" id="set">{showtime}</div>
            </div>
        </div>
    )
}
export default Alarm;                                                                                             