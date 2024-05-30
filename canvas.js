window.addEventListener("load", () => {
    //initilize 
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    //resize
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //Pattern Gen:    
    const pos_list = new Array();  
    for(let i = 0; i < window.innerWidth * 2; i += 80){
        for(let j = 0; j < window.innerHeight * 2; j += 80){
            if (Math.random() < 0.4){
                pos_list.push([i+j* (-0.5), j+ i* -(0.2)]);
            }
        }
    }

    for(let i = 0; i < pos_list.length; i++){ 
        if (Math.random() < 0.2){ // color
            ctx.beginPath();
            ctx.arc((pos_list[i])[0], (pos_list[i])[1], 20, 0, 2 * Math.PI);
            
            ctx.fillStyle = "rgb(77 77 77 /" + (Math.random() * 100).toString() + "%)";
            ctx.fill();        
        }
        else{ //gray
            ctx.beginPath();
            ctx.arc((pos_list[i])[0], (pos_list[i])[1], 20, 0, 2 * Math.PI);
            ctx.fillStyle = "rgb(77 77 77 /" + (Math.random() * 100).toString() + "%)";
            ctx.fill();        
        }
    }

});

//keep resized
window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
})