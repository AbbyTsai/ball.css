var data={
    'leftop_h':10,
    'rightop_h':10,
    'rightbottom_h':10,
    'leftbottom_h':10,	
    'leftop_v':10,
    'rightop_v':10,	
    'rightbottom_v':10,
    'leftbottom_v':10,
    'color_1':'#ffc0cb',
    'color_2':'#30d9c5'
};
var size='width:300px; height:300px;'
var borderStyle=' border-radius:'+data['leftop_h']+'% '+data['rightop_h']+'% '+data['rightbottom_h']+'% '+data['leftbottom_h']+'% / '+data['leftop_v']+'% '+data['rightop_v']+'% '+data['rightbottom_v']+'% '+data['leftbottom_v']+'%;';
var gradient=' background: linear-gradient(0.3turn,'+data['color_1']+', '+data['color_2']+');';
document.getElementById("picture").style=borderStyle+gradient;

function colorchange(e){
    updateinput(e);
    gradient='background:linear-gradient(0.3turn, '+data['color_1']+', '+data['color_2']+');';
    document.getElementById("picture").style=borderStyle+gradient;
    return gradient;    
}

function change(e){
    updateinput(e);
    document.querySelector(`#${e.id}_value`).innerHTML=e.value;	
    borderStyle='border-radius:'+data['leftop_h']+'% '+data['rightop_h']+'% '+data['rightbottom_h']+'% '+data['leftbottom_h']+'% / '+data['leftop_v']+'% '+data['rightop_v']+'% '+data['rightbottom_v']+'% '+data['leftbottom_v']+'%;';
    document.getElementById("picture").style=borderStyle+'background:linear-gradient(0.3turn,'+data['color_1']+', '+data['color_2']+');';
    return borderStyle;
}

var copybutton_1=document.getElementById('copybutton_1');		

function copy(){
    textarea=document.createElement("textarea");
    textarea.value=size+borderStyle+gradient;
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    textarea.remove();
    console.log(size+borderStyle+gradient);
    document.getElementById('picture').style.borderRadius=borderStyle;
    document.getElementById('picture').style.animation='copied 0.1s 2';
    if (copybutton_1.style.background==='lightpink'){
        copybutton_1.style.background='hotpink';
    } else {
        copybutton_1.style.background='lightpink';
    }
}

function updateinput(e){
    data[`${e.id}`]=e.value;
    return data[`${e.id}`];
}