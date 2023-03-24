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

    // const data = new Date(2023, 1, 1)
    const data = new Date()
    const yearNow=data.getFullYear()
    const month=data.getMonth()
    const dayOfWeek=data.getDay()
    const dayOfMonth=data.getDate()
    if(yearNow%4==0 && month<2) days[1]=29;
    if(yearNow%4==3 && month>1) days[1]=29;
    let year=[];
    let Fday=dayOfMonth
    let count=dayOfWeek==0?0:(dayOfWeek%7)-1;
    for(let i=month;i<12+month;i++){
        year.push({name:months[i%12], index:i%12, days:[]})
        for(let day=Fday; day<=days[i%12];day++){
            year[year.length-1].days.push({day, weekDay:count%7+1})
            count++;
        }
        Fday=1;
    }
   year.push({...year[0], days:[]})
    // тут прописать добавление месяца
    for(let day=1;day<dayOfMonth;day++){
        year[year.length-1].days.push({day,weekDay:count%7+1})
        count++;
    }
    return year
}
/*
    1   0
    2   1
    3   2
    4   3
    5   4
    6   5
    7   6
* */