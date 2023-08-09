console.log('hello world');

const textSeach = document.querySelector('#title');
const styleChange = document.querySelector('#change');

textSeach.addEventListener('click', function(){
    styleChange.style.color = 'red'
});

styleChange.addEventListener('click', function(){
    styleChange.style.color = 'green';
    
})