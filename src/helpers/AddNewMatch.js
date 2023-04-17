export const AddNewMatch = (tableFromServer, match) => {

    let matches=[...tableFromServer]
    const {round, ordinal} = match
    matches[round-1][ordinal-1]=match

    return {matches}
};
