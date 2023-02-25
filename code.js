// Input Boxes
const UsernameInput=document.getElementById('username-input');
const PasswordInput=document.getElementById('password-input');
// Functions
function OnContinue(){
  let UI=UsernameInput.value;
  let PI=PasswordInput.value;
  // Length Check
  function ErrorInput(elementid,elementid2){
    let e2=document.getElementById(elementid2);
    e2.style.color="rgb(245, 73, 73)";
  }
  function NormalizeInput(elementid,elementid2){
    let e2=document.getElementById(elementid2);
    e2.style.color="rgb(255,255,255)";
  }
  if (UI.length<6){
    ErrorInput('username-title','invalid-username-title');
    document.getElementById('gap').style.height="15px";
    document.getElementById('password-title').style.marginTop="0px";
  } else {
    document.getElementById('password-title').style.marginTop="-20px";
    document.getElementById('gap').style.height="35px";
    NormalizeInput('username-title','invalid-username-title');
  }
  if (PI.length<6){
    ErrorInput('password-title','invalid-password-title');
    document.getElementById('continue').style.marginTop="5px";
  } else{
    document.getElementById('continue').style.marginTop="-5px";
    NormalizeInput('password-title','invalid-password-title');
  }
}