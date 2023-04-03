export const checkPhotoPath = (path = '', event=false) =>
    path?.length
        ? path.includes('http')
            ? path
            : `https://api.ruchamp.ru/static/uploads/${path}`
        : event?
            '../../imgs/userDontFind.jpg'
            :'../imgs/userDontFind.jpg'
