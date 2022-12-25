//Function that adds the text to the rectangle
function textCanvas(id,letter,width,height){
    var canvas = document.getElementById(id);
        var c = canvas.getContext("2d");
        c.font = width/2 +"px Arial";
        c.fillStyle = "black";
        c.textAlign = "center";
        c.fillText(letter, width/2, height/2); 
}

function Letters(a,b){
    $('#canvas1').attr('height',a);
    $('#canvas1').attr('width',a);
    textCanvas('canvas1','A',a,a);
    $('#canvas2').attr('height',a);
    $('#canvas2').attr('width',b);
    textCanvas('canvas2','B',b,a);
}

//Function that deletes the rectangle when it is too big to draw
function deleteRectangle(a,b){
    $('#canvas1').attr('height',a);
    $('#canvas1').attr('width',a);
    $('#canvas2').attr('height',a);
    $('#canvas2').attr('width',b);
}

function rectangle_A(){      
    var value1 = parseFloat(document.getElementById("input1").value) || 0;
    //calculate the width and height using the golden ratio
    var width = value1;
    var height = value1/1.618;
    document.getElementById("input2").value = parseFloat(height.toFixed(2));
    document.getElementById("calc").value = parseFloat((parseFloat(height+width)).toFixed(2));
    var boxWidth = document.getElementById("goldenRatio").offsetWidth;
    var boxHeight = document.getElementById("goldenRatio").offsetHeight;
    
    if((boxWidth+boxHeight) > width+height){  
        document.getElementById("error").innerHTML=""; 
        Letters(width,height);
    }
    else{
        deleteRectangle(0,0);
        document.getElementById("error").innerHTML="Rectangle is too big to draw...";
    }
}
    
function rectangle_B(){
    var value2 = parseFloat(document.getElementById("input2").value) || 0;
    //calculate the width and height using the golden ratio
    var width = value2;
    var height = value2*1.618;
    document.getElementById("input1").value = parseFloat(height.toFixed(2));
    document.getElementById("calc").value = parseFloat((parseFloat(height+width)).toFixed(2));
    var boxWidth = document.getElementById("goldenRatio").offsetWidth;
    var boxHeight = document.getElementById("goldenRatio").offsetHeight;
    
    if((boxWidth+boxHeight) > width+height){ 
        document.getElementById("error").innerHTML=""; 
        Letters(height,width);
    }
    else{
        deleteRectangle(0,0);
        document.getElementById("error").innerHTML="Rectangle is too big to draw...";
    }
}