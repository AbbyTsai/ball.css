var data={
    'leftop_h':10,
    'rightop_h':10,
    'rightbottom_h':10,
    'leftbottom_h':10,	
    'leftop_v':10,
    'rightop_v':10,	
    'rightbottom_v':10,
    'leftbottom_v':10,
};

var borderStyle=' border-radius:'+data['leftop_h']+'% '+data['rightop_h']+'% '+data['rightbottom_h']+'% '+data['leftbottom_h']+'% / '+data['leftop_v']+'% '+data['rightop_v']+'% '+data['rightbottom_v']+'% '+data['leftbottom_v']+'%;';
document.getElementById("picture").style=borderStyle;

function change(e){
    updateinput(e);
    document.querySelector(`#${e.id}_value`).innerHTML=e.value;	
    borderStyle='border-radius:'+data['leftop_h']+'% '+data['rightop_h']+'% '+data['rightbottom_h']+'% '+data['leftbottom_h']+'% / '+data['leftop_v']+'% '+data['rightop_v']+'% '+data['rightbottom_v']+'% '+data['leftbottom_v']+'%;';
    document.getElementById("picture").style=borderStyle+'background:linear-gradient(0.3turn,'+data['color_1']+', '+data['color_2']+');';
    copybutton_1.style=borderStyle;
    return borderStyle;
}

var copybutton_1=document.getElementById('copybutton_1');		

function copy(e){
    textarea=document.createElement("textarea");
    textarea.value=borderStyle;
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    textarea.remove();
    document.getElementById('picture').style.borderRadius=borderStyle;
    copybutton_1.innerHTML='copied';
    window.setTimeout(function(){
        copybutton_1.innerHTML='copy';
    },2000);
};

function updateinput(e){
    data[`${e.id}`]=e.value;
    return data[`${e.id}`];
};

var radius=[
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];

var colors=['hotpink','#ffeb3b','#bb8c64','lightcyan','lightgray','lightskyblue','pink','lightgreen'];
//var radius_single=[0, 0, 0, 0, 0, 0, 0, 0];

randomnumber();

for (let i=0; i<colors.length; i++){
    document.getElementById('samplearea').children[i].style.background=colors[i];
    let div=document.createElement('div');
    newchild=document.getElementById('samplearea').children[i].appendChild(div);
    newchild.setAttribute('class','newchild')
    var sampleradius='border-radius:'+radius[i][0]+'% '+radius[i][1]+'% '+radius[i][2]+'% '+radius[i][3]+'% / '+radius[i][4]+'% '+radius[i][5]+'% '+radius[i][6]+'% '+radius[i][7]+'%;';
    document.getElementById('samplearea').children[i].children[0].style='background:'+colors[colors.length-i-1]+';'+sampleradius;
}

function randomnumber() {
    for (let n=0; n<radius.length;n++){
        for(let i=0;i<radius.length;i++){
            var random=Math.floor(Math.random()*101);
            radius[n][i]=random;
    }
}
    return radius;
};

for (let count=0; count<radius.length;count++){
    document.getElementById('samplearea').children[count].children[0].addEventListener('click',
    function(event){
    sampleradius=document.getElementById('samplearea').children[count].children[0].style.borderRadius;
    textarea=document.createElement("textarea");
    textarea.value='border-radius:'+sampleradius+';';
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    textarea.remove();
    button=document.getElementById('samplearea').children[count].children[0];
    button.innerHTML='copied';
    window.setTimeout(function(){
        button.innerHTML='';
    },2000);
    });
}
