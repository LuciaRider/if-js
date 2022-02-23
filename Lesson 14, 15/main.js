// lesson-14
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const fData = new FormData;

input.onchange = () => fData.append('file', input.files[0])

btn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('https://fe-student-api.herokuapp.com/api/file', {
        method: 'POST',
        headers: {
            'Content-type': 'multipart/form-data'
        },
        body: fData
    }).then((response) => {
        console.log(response.json())
        return response.json()
    }).then((data) => {
        console.log(data)
    }).catch(err => {
      console.log(err)
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

