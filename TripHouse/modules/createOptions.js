function createOptions(n) {
    let options = '';
    for (let i=0; i<=n; i++) {
        options += `<option value="${i}">${i} year old</option>`
    }
    return options;
}

export {createOptions};