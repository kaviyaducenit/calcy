let res=0;
let val=document.getElementById('b');
val.value=0;
let add=document.getElementById('a');
add.addEventListener('click',inc);
let sub=document.getElementById('c');
sub.addEventListener('click',des);
function inc()
{
    if(val.value<10)
    {
        res=val.value++;
        val.innerText=res;
    }
    else{
        add.disabled=true;
    }
}
function des()
{
    
    if( val.value>0 ) 
    {
        res=val.value--;
    val.innerText=res;
    }
}
