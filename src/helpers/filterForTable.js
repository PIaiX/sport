export const filterForTable = (tableFromServer) => {

    let rounds = []
    const {size} = tableFromServer
    for (let i = size; i != 1; i /= 2) {
        rounds[rounds?.length] = []
    }

    for(let i=1;Math.pow(2,i)<=size;i++)
        for (let j=1;j<=size/(Math.pow(2,i));j++)
            rounds[i-1].push({round:i})

    tableFromServer?.matches?.map((element, index)=>{
        const {round, ordinal} = element
        rounds[round-1][ordinal-1]=element
    })

    return {matches: rounds}
}