export function parseUrl() {
    let parts = window.location.href.split('?')[1] || '';

    return parts.split('&')
        .map(el => el.split('='))
        .reduce((acc, obj) => { acc[obj[0]] = obj[1]; return acc; }, {});
}

