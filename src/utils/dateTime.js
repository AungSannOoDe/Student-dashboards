export const formattedDate=(inputDate)=>{
    const  date=new Date(inputDate);
    const result=new Intl.DateTimeFormat("en-EB",{
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    }).format(date)
    return  result;
}