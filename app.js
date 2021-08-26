
const api = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))
}
const userInfo = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()).then(data => userData(data))
}
const userData = data =>{
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        li.innerText = user.name;
        p.innerText = user.email
        li.appendChild(p);
        ul.appendChild(li);
    }
}
// image api 

const imgApi = () =>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => getImage(data))
}
imgApi();
const getImage = data =>{
    const imageArea = document.getElementById('img-area')
    for (let i = 0; i < 10; i++) {
        const item = data[i];
        const div = document.createElement('div');
        div.classList.add('single-image');
        div.innerHTML = `
        <img class='img' src=${item.url} alt="">
        `
        imageArea.appendChild(div);
    }
}
