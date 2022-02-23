// lesson-14
const btn = document.getElementById('btn');
const input = document.getElementById('input');

btn.addEventListener('click', () => {
    fetch('https://fe-student-api.herokuapp.com/api/file', {
        method: 'POST',
        headers: {
            'Content-type': 'multipart/form-data'
        },
        // body: new FormData(form)
    }).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
    })
})

// lesson-15 (6)
const checkIsSyntaxCorrect = (input) => {
    const stack = [];
    for (const symbol of input) {
      if (symbol === '{') {
        stack.push(symbol);
      } else if (symbol === '}') {
        if (!stack.pop()) {
          return false;
        }
      }
    }
    return stack.length === 0;
  };
  console.log(checkIsSyntaxCorrect('{user: {name: "John", age: 21}}'))
  console.log(checkIsSyntaxCorrect('{user: {name: }{"John", age: 21{}}'))

