const form=document.getElementById('task-form');
let task=document.getElementById('task');
const list=document.createElement('ul')
list.className='collection'
list.style.color='#fff'
form.addEventListener('submit',function(e){
     const xhr=new XMLHttpRequest;
     list.innerHTML=""
     if(task.value==''){
         list.innerHTML=`<li>Please Enter the number</li>`
         list.style.textAlign='center'
         list.style.backgroundColor='#ff0011'
         setTimeout(() => {
             list.innerHTML=''
         }, 2000);
     }
     else{
        xhr.open('GET',`http://api.icndb.com/jokes/random/${task.value}`,true)
        xhr.onload=function(){
            let arr=JSON.parse(xhr.responseText);
            arr=arr.value
            arr.forEach(element => {
                const listitem=document.createElement('li');
                listitem.className='collection-item';
                listitem.append(element.joke);
                list.appendChild(listitem)
                listitem.style.backgroundColor='#007E33'
            });
            
           const btn=(document.getElementsByClassName('btn')[0]);
           btn.value="Refresh"
        }
        xhr.send()
     }
     let card=document.getElementsByClassName('card-action')[0];
      card.appendChild(list)
     
    e.preventDefault()
})