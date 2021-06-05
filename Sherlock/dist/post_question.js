
const submit_question= document.getElementById('submit_question');
submit_question.addEventListener('click',()=> {
    var content = document.getElementById('textarea').value;

if(content.length<1)
{
    document.getElementById('count').innerHTML = "Cannot leave the post empty! Sherlock cannot read your mind";
   
}

})

  document.getElementById('textarea').onkeyup = function () 
    {
    
    document.getElementById('count').innerHTML = "Characters left: " + (250 - this.value.length);
    if(250 - this.value.length==0)
    {
        alert("You have reached your word limit");
        document.getElementById('count').innerHTML = "You have no charaters left";
    }

    
    };