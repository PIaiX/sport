export const GetStringFromDate = (dateFrom,  dateTo) => {
    const months = ["январь",
        "Фев",
        "Мар",
        "Апр",
        "Мая",
        "Июн",
        "Июл",
        "Авг",
        "Сен",
        "Окт",
        "Ноя",
        "Дек",]

    const GetDay = (d) => {
        const date = new Date(d)
        return date.getDay().toString()+ ' ' + months[date.getMonth()]
    }

    const GetDayWithTime = (d) => {
        const day = GetDay(d)
        return day + ' ' + new Date(d).getHours().toString() + ':'+new Date(d).getMinutes().toString()

    }


    if(dateTo){
        const d1 = GetDay(dateFrom)
        const d2 = GetDayWithTime(dateTo)
        return d1+' - '+d2
    }
    else{
        const d1 = GetDayWithTime(dateFrom)
        return d1
    }
    return dateFrom.toString()
};