export const getAddress = async ([c1, c2])=> {
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
    const token = "515b59349542641686d46596bb39bae3acc9bee2";
    const query = {lat: c1, lon: c2};

    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify(query)
    }

    const result = await fetch(url, options)
    return result.json()
}