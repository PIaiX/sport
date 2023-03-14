export const DoCalendar=()=>{
    const months = ["январь",
        "февраль",
        "март",
        "апрель",
        "май",
        "июнь",
        "июль",
        "август",
        "сентябрь",
        "октябрь",
        "ноябрь",
        "декабрь",]
    let days = [31,28,31,30,31,30,31,31,30,31,30,31]

    const data = new Date()
    const yearNow=data.getFullYear()
    const month=data.getMonth()
    const dayOfWeek=data.getDay()
    const dayOfMonth=data.getDate()
    if(yearNow%4==0) months["февраль"]=29;

    let year=[];
    let Fday=dayOfMonth
    let count=dayOfWeek-1;
    for(let i=month;i<13+month;i++){
        year.push({name:months[i%12], index:i%12, days:[]})
        if(i<14) for(let day=Fday; day<=days[i%12];day++){
            year[year.length-1].days.push({day, weekDay:count%7+1})
            count++;
        }
        Fday=1;
    }
    for(let day=1;day<dayOfMonth;day++){
        year[year.length-1].days.push({day,weekDay:count%7+1})
        count++;
    }
    return year
}