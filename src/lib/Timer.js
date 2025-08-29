export const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
 export  const usDateformat = (dateString)=>{
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

 export  const usTimeformat = (dateString)=>{
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
 }

 export const  getTitle=(gender, won_status)=> {
  if(gender === "male" && won_status === 1){
      return "King";
  }
  else if(gender === "male" && won_status === 2){
      return "Prince";
  }
  else if(gender === "female" && won_status === 1){
      return "Queen";
  } 
 else if (gender === "female" && won_status === 2){
  return "Princess";
 } 
 else{
  return "Unknown";
 }
 
}

  