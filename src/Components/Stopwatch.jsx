import { useEffect,useState } from "react";

const Stopwatch = ()=>{
    const [sec,setSec] = useState(0);
    const [min,setMin] = useState(0);
    const [hr,setHr] = useState(0);
    const [id,setId] = useState(0);
    const [stop,setStop] = useState(false);

    useEffect(()=>{
        if(stop){
            setId(setInterval(()=>{
                setSec((sec)=>sec+1);
            },1000));
        }
    },[stop]);

    useEffect(()=>{
        if (sec>59){
            setMin((min)=>min+1);
            setSec(0);
        }
    },[sec])

    useEffect(()=>{
        if(min>=59 && sec>59){
            setHr((hr)=>hr+1);
            setMin(0);
            setSec(0);
        }
    },[min,sec]);
    const handleStart = ()=>{
        setStop(true);
    }
    const handleStop = ()=>{
        clearInterval(id);  
        setStop(false);
    }
    const handleReset = () =>{
        setSec(0);
        setMin(0);
        setHr(0);
        setStop(false);
        clearInterval(id);
    }



return (
<div className="watchmain">
    <div className="name">Stopwatch</div>
    <div className="watch" >{(hr<10)?"0"+hr:hr}:{(min<10)?"0"+min:min}:{(sec<10)?"0"+sec:sec}</div>
    <div className="butt">
        {sec > 0?<button onClick={handleStart}>Resume</button>:<button onClick={handleStart}>Start</button>}
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </div>
</div>

);

}

export default Stopwatch;