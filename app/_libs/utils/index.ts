function unixToDatetime(unixTimestamp: number) {
    const date = new Date(unixTimestamp * 1000);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function dateToUnixTimestamp(dateString:string) {
    
    const date = new Date(`${dateString}T00:00:00Z`);
    return Math.floor(date.getTime() / 1000);
}

function generateSlug(title: string) {
    const from = "áàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđ";
    const to = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd";
    const regex = new RegExp(from.split('').join('|'), 'g');
    title = title.replace(/[^\w\s]/gi, '');

    title = title.toLowerCase().replace(regex, c => to.charAt(from.indexOf(c)));
    return title.replace(/ /g, '-');
}


export {
    unixToDatetime, 
    dateToUnixTimestamp,
    generateSlug
}