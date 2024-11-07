import { useState,useEffect,useRef } from "react"


function Stopwatch(){
    const [isRunning,setIsRunning]= useState(false); 
    const [ElapsedTime,setElapsedTime] = useState(0);
    const intervalidref = useRef(null);
    const startTimeRef = useRef(0);
    
   useEffect(()=>{
if(isRunning){
    intervalidref.current = setInterval(()=>{
        setElapsedTime(Date.now()-startTimeRef.current);
    },10);
}
return(()=>{
    clearInterval(intervalidref.current)
}); 
   },[isRunning])
  
 

    function startWatch () {
      setIsRunning(true);
      startTimeRef.current = Date.now() - ElapsedTime;
    }
    function stopWatch  () {
      setIsRunning(false);
    }
    function ResetWatch ()  {
 setElapsedTime(0);
 setIsRunning(false);
    }
    function formatwatch(){
        let milliseconds = Math.floor((ElapsedTime % 1000)/10);
        let seconds = Math.floor(ElapsedTime / (1000)%60);
        let minutes = Math.floor(ElapsedTime / (1000*60)%60);
        if(minutes<10){
            minutes = "0"+minutes;
        }
        seconds < 10 ? seconds = "0" + seconds : seconds; 
        milliseconds < 10 ? milliseconds = "0" + milliseconds : milliseconds; 
        return(`${minutes}:${seconds}:${milliseconds}`);
    }
return(
<div className="container">
<h1>Stopwatch App</h1>
<div className="display-clock">
    <h3 className="watch">{formatwatch()}</h3>
</div>
<div className="btn-group">
    <button onClick={()=>startWatch()} className="btn">Start</button>
    <button onClick={()=>stopWatch()} className="btn">Stop</button>
    <button  onClick={()=>ResetWatch()} className="btn">Reset</button>
</div>
</div>

)
}
export default Stopwatch