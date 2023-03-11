let makeIt = document.querySelector('button');
makeIt.addEventListener('click', performTask);

function performTask()
{
    let name = prompt('Type your name');
    makeIt.textContent = 'Name : '+ name;
}
