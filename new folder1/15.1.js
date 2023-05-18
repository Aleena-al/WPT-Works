function addMsg()
{
    let parentTag=document.querySelector("#parent");

    let existingValue=parentTag.innerHTML;
    let newValue = `<div>Hello</div>`;

    parentTag=newValue+existingValue;
}