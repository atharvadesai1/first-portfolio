let chooseit = document.querySelector('button');
chooseit.addEventListener('click',submitForm);

function submitForm()
{
    let confirm = promopt("Are you sure you want to submit(Yes/No)?");
    if(confirm==Yes)
    {
        console.log("Done");
    }
    else if(confirm==No)
    {
        console.log("Not done");
    }
    else
    {
        console.log("Correct the appropriate input");
    }
}