fetch("data.json")
.then((response)=>{
    return response.json();
}).then((data)=>{
    //console.log(data);
    display_info(data.basics);

})

var bodyElement=document.querySelector("#root");

function display_info(info){
    //card view
    let card=document.createElement("div");
    card.classList.add("card");
    // heading
    let heading=document.createElement("h2");
    heading.textContent=info.name;
    bodyElement.append(card);
    card.append(heading);
    let line=document.createElement("hr");
    card.append(line);
    //role
    let role=document.createElement("h2");
    role.textContent=info.role;
    card.append(role);
    let line1=document.createElement("hr");
    card.append(line1);
    
    //email
    let email=document.createElement("a");
    email.href="mailto:"+info.email;
    email.textContent=info.email;
    card.append(email);
    let line2=document.createElement("hr");
    card.append(line2);
    //break
    
    let br1=document.createElement("br1");
    card.append(br1);
    //mobile
    let mobile=document.createElement("a");
    mobile.href="tel:"+info.mobile;
    mobile.textContent=info.mobile;
    card.append(mobile);
    let br=document.createElement("br");
    card.append(br);
    var button=document.createElement("a");
    button.textContent="view profile";
    button.classList.add("btn");
    card.append(button);
}