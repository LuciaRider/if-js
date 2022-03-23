// lesson-13
function getRequest(url) {
    const cachedValue = sessionStorage.getItem(url);
    if (cachedValue) {
      return Promise.resolve(JSON.parse(cachedValue))
    } 
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        sessionStorage.setItem(url, JSON.stringify(data));
        return data;
      })
  }