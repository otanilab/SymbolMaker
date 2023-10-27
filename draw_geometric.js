function draw(ctx, i, width, height) {
        ctx.globalAlpha = 1;
        ctx.fillStyle = linecolor;
        ctx.strokeStyle = linecolor;
        ctx.lineWidth = 0.4;
        if (create_design[i][0] == 4) {//rect
            var angle = 0;
            var Rx = create_design[i][1];
            var Ry = create_design[i][2];
        
            var x = create_design[i][3];
            var y = create_design[i][4];
            
            var j = create_design[i][6];;
            var angleplus = 360 / create_design[i][6];
        
            ctx.translate(width / 2, height / 2); 
            let max = create_design[i][8];
                    let min = create_design[i][8];
                    for(let a = 9; a <= 10; a++){
                        if(max < create_design[i][a]){
                            max = create_design[i][a];
                        }
                    }
                    for(let a = 9; a <= 10; a++){
                        if(min > create_design[i][a]){
                            min = create_design[i][a];
                        }
                    }
            let comp_color = max + min; 
            let red = comp_color - create_design[i][8];
            let green = comp_color - create_design[i][9];
            let blue = comp_color - create_design[i][10];
           
            for(k = 0; k < j; k++ ){
                //枠線
                ctx.beginPath();
                ctx.rotate(angle * Math.PI /180);
                ctx.strokeRect(Rx,Ry,x,y);

                //塗りつぶし１_白色ver
                //描画回数が偶数回の時
                if(create_design[i][7] == 1 && j % 2 == 0 && k % 2 == 0){
                    ctx.fillStyle = "rgba(255,255,255,1)";
                    ctx.fillRect(Rx,Ry,x,y);
                }
                if(create_design[i][7] == 1 && j % 2 == 0 && k % 2 == 1){
                    
                    ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                    ctx.fillRect(Rx,Ry,x,y);
                }
                //描画回数が奇数回の時
                if(create_design[i][7] == 1 && j % 2 == 1 && k % 2 == 1){
                    ctx.fillStyle = "rgba(255,255,255,1)";
                    ctx.fillRect(Rx,Ry,x,y);
                }
                if(create_design[i][7] == 1 && j % 2 == 1 && k % 2 == 0){
                    ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                    ctx.fillRect(Rx,Ry,x,y);
                }
                //塗りつぶし２＿補色ver
                //描画回数が偶数回の時
                if(create_design[i][7] == 2 && j % 2 == 0 && k % 2 == 0){
                    ctx.fillStyle = "rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design[i][11] + ")";
                    ctx.fillRect(Rx,Ry,x,y);
                }
                if(create_design[i][7] == 2 && j % 2 == 0 && k % 2 == 1){
                    
                    ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                    ctx.fillRect(Rx,Ry,x,y);
                }
                //描画回数が奇数回の時
                if(create_design[i][7] == 2 && j % 2 == 1 && k % 2 == 1){
                    ctx.fillStyle = "rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design[i][11] + ")";
                    ctx.fillRect(Rx,Ry,x,y);
                }
                if(create_design[i][7] == 2 && j % 2 == 1 && k % 2 == 0){
                    ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                    ctx.fillRect(Rx,Ry,x,y);
                }
                //塗りつぶし3_灰色ver
                //描画回数が偶数回の時
                if(create_design[i][7] == 3 && j % 2 == 0 && k % 2 == 0){
                    ctx.fillStyle = "rgba(175,175,176,0.8)";
                    ctx.fillRect(Rx,Ry,x,y);
                }
                if(create_design[i][7] == 3 && j % 2 == 0 && k % 2 == 1){
                    
                    ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                    ctx.fillRect(Rx,Ry,x,y);
                }
                //描画回数が奇数回の時
                if(create_design[i][7] == 3 && j % 2 == 1 && k % 2 == 1){
                    ctx.fillStyle = "rgba(175,175,176,0.8)";
                    ctx.fillRect(Rx,Ry,x,y);
                }
                if(create_design[i][7] == 3 && j % 2 == 1 && k % 2 == 0){
                    ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                    ctx.fillRect(Rx,Ry,x,y);
                }
                ctx.stroke();
                angle =+ angleplus;
            }
        }

        if (create_design[i][0] == 3) {//triangle
            var angle2 = 0;
            var a1 = create_design[i][1];
            var a2 = create_design[i][2];
            var b1 = create_design[i][3];
            var b2 = create_design[i][4];
            var c1 = (Math.random() * 41 )+ 60;  
            var c2 = (Math.random() * 41 )+ 60;    

            var j = create_design[i][6];
            var angleplus = 360 / create_design[i][6];

            ctx.translate(width / 2, height / 2);  
            let max = create_design[i][8];
            let min = create_design[i][8];
            for(let a = 9; a <= 10; a++){
                if(max < create_design[i][a]){
                    max = create_design[i][a];
                }
            }
            for(let a = 9; a <= 10; a++){
                if(min > create_design[i][a]){
                    min = create_design[i][a];
                }
            }
         let comp_color = max + min;
         let red = comp_color - create_design[i][8];
         let green = comp_color - create_design[i][9];
         let blue = comp_color - create_design[i][10];  
         console.log("rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")");
         console.log("補色rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design[i][11] + ")");
            for(k1 = 0; k1 < j; k1++ ){
                ctx.beginPath();
                ctx.rotate(angle2 * Math.PI /180);
                ctx.moveTo(a1, a2);
                ctx.lineTo(b1, b2);
                ctx.lineTo(c1, c2);
                ctx.closePath();

                 //描画回数が偶数階の時
                 if(create_design[i][7] == 1 && j % 2 == 0 && k1 % 2 == 0){
                    ctx.fillStyle = "rgba(255,255,255,1)";
                    ctx.fill();
                }
                if(create_design[i][7] == 1 && j % 2 == 0 && k1 % 2 == 1){
                    ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                    ctx.fill();
                }
                //描画回数が奇数回の時
                if(create_design[i][7] == 1 && j % 2 == 1 && k1 % 2 == 1){
                    ctx.fillStyle = "rgba(255,255,255,1)";
                    ctx.fill();
                }
                if(create_design[i][7] == 1 && j % 2 == 1 && k1 % 2 == 0){
                    ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                    ctx.fill();
                }
                //塗りつぶし２＿補色ver
                //描画回数が偶数回の時
                if(create_design[i][7] == 2 && j % 2 == 0 && k1 % 2 == 0){
                    ctx.fillStyle = "rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design[i][11] + ")";
                    ctx.fill();
                }
                if(create_design[i][7] == 2 && j % 2 == 0 && k1 % 2 == 1){
                    ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                    ctx.fill();
                }
                //描画回数が奇数回の時
                if(create_design[i][7] == 2 && j % 2 == 1 && k1 % 2 == 1){
                    ctx.fillStyle = "rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design[i][11] + ")";
                    ctx.fill();
                }
                if(create_design[i][7] == 2 && j % 2 == 1 && k1 % 2 == 0){
                    ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                    ctx.fill();
                }
                //塗りつぶし3＿灰色ver
                 //描画回数が偶数階の時
                 if(create_design[i][7] == 3 && j % 2 == 0 && k1 % 2 == 0){
                    ctx.fillStyle = "rgba(175,175,176,0.8)";
                    ctx.fill();
                }
                if(create_design[i][7] == 3 && j % 2 == 0 && k1 % 2 == 1){
                    ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                    ctx.fill();
                }
                //描画回数が奇数回の時
                if(create_design[i][7] == 3 && j % 2 == 1 && k1 % 2 == 1){
                    ctx.fillStyle = "rgba(175,175,176,0.8)";
                    ctx.fill();
                }
                if(create_design[i][7] == 3 && j % 2 == 1 && k1 % 2 == 0){
                    ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                    ctx.fill();
                }
                else{
                     ctx.stroke();
                }
                angle2 =+ angleplus;
            }
        }

        if (create_design[i][0] == 1) {//circle
            var angle3 = 0;
            var cr = create_design[i][5];
            var r = Math.sqrt(create_design[i][3] * create_design[i][3] + create_design[i][4] * create_design[i][4]) / 2; 
            
            var j = create_design[i][6];
            var angleplus = 360 / create_design[i][6];
            
            var x = cr * Math.cos( angle3 * Math.PI / 180);
            var y = cr * Math.sin( angle3 * Math.PI / 180);
            
          //  console.log(create_design[i][8]);
           // console.log(create_design[i][9]);
           // console.log(create_design[i][10]);
           // console.log(create_design[i][11]);

            ctx.translate(width / 2, height / 2);  
            let max = create_design[i][8];
                    let min = create_design[i][8];
                    for(let a = 9; a <= 10; a++){
                        if(max < create_design[i][a]){
                            max = create_design[i][a];
                        }
                    }
                    for(let a = 9; a <= 10; a++){
                        if(min > create_design[i][a]){
                            min = create_design[i][a];
                        }
                    }
            let comp_color = max + min;
            let red = comp_color - create_design[i][8];
            let green = comp_color - create_design[i][9];
            let blue = comp_color - create_design[i][10];  
            for(k2 = 0; k2 < j; k2++ ){
                ctx.beginPath();
                ctx.rotate(angle3 * Math.PI /180);
                ctx.arc(x,  y, r, 0 * Math.PI/180, 360 * Math.PI, true);
                //塗りつぶし１＿白色ver
                if(create_design[i][7] == 1){
                    if(j % 2 == 0 && k2 % 2 == 0){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(255,255,255,1)";
                        ctx.fill();
                    }
                    if(j % 2 == 0 && k2 % 2 == 1){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                        ctx.fill();
                    }
                    //描画回数が奇数回の時
                    if(j % 2 == 1 && k2 % 2 == 1){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(255,255,255,1)";
                        ctx.fill();
                    }
                    if(j % 2 == 1 && k2 % 2 == 0){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                        ctx.fill();
                    }
                }else if(create_design[i][7] == 2){//塗りつぶし2＿補色ver
                    if(j % 2 == 0 && k2 % 2 == 0){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design[i][11] + ")";
                        ctx.fill();
                    }
                    if(j % 2 == 0 && k2 % 2 == 1){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                        ctx.fill();
                    }
                    //描画回数が奇数回の時
                    if(j % 2 == 1 && k2 % 2 == 1){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design[i][11] + ")";
                        ctx.fill();
                    }
                    if(j % 2 == 1 && k2 % 2 == 0){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                        ctx.fill();
                    }
                }else if(create_design[i][7] == 3){
                    if(j % 2 == 0 && k2 % 2 == 0){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(175,175,176,0.8)";
                        ctx.fill();
                    }
                    if(j % 2 == 0 && k2 % 2 == 1){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                        ctx.fill();
                    }
                    //描画回数が奇数回の時
                    if(j % 2 == 1 && k2 % 2 == 1){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(175,175,176,0.8)";
                        ctx.fill();
                    }
                    if(j % 2 == 1 && k2 % 2 == 0){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";
                        ctx.fill();
                    }
                }else{
                    ctx.stroke();
                }               
                angle3 =+ angleplus;
            }
        }

        if (create_design[i][0] == 2) {//ellipse
            var angle4 = 0;
            var r = create_design[i][5];
            var Ex = Math.sqrt(create_design[i][3] * create_design[i][3] + create_design[i][4] * create_design[i][4]) / 2;
            var Ey = Math.sqrt(create_design[i][3] * create_design[i][3] + create_design[i][4] * create_design[i][4]) / 2.5;

            var k = (create_design[i][1] % 19) * 10;

            var j = create_design[i][6];
            var angleplus = 360 / create_design[i][6];

            var x = r * Math.cos( angle4 * Math.PI / 180);
            var y = r * Math.sin( angle4 * Math.PI / 180);

            ctx.translate(width / 2, height / 2);   
            let max = create_design[i][8];
                    let min = create_design[i][8];
                    for(let a = 9; a <= 10; a++){
                        if(max < create_design[i][a]){
                            max = create_design[i][a];
                        }
                    }
                    for(let a = 9; a <= 10; a++){
                        if(min > create_design[i][a]){
                            min = create_design[i][a];
                        }
                    }
            let comp_color = max + min;  
            let red = comp_color - create_design[i][8];
            let green = comp_color - create_design[i][9];
            let blue = comp_color - create_design[i][10];  

            for(k3 = 0; k3 < j; k3++ ){
                ctx.beginPath();
                ctx.rotate(angle4 * Math.PI /180);
                ctx.ellipse(x,  y, Ex, Ey, k * Math.PI / 180, 0 * Math.PI/180, 360 * Math.PI/180, true);
                if(create_design[i][7] == 1){
                    if(j % 2 == 0 && k3 % 2 == 0){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(255,255,255,1)";
                        ctx.fill();
                    }
                    if(j % 2 == 0 && k3 % 2 == 1){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";                        ctx.fill();
                    }
                    //描画回数が奇数回の時
                    if(j % 2 == 1 && k3 % 2 == 1){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(255,255,255,1)";
                        ctx.fill();
                    }
                    if(j % 2 == 1 && k3 % 2 == 0){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";                        ctx.fill();
                    }
                }else if(create_design[i][7] == 2){
                    if(j % 2 == 0 && k3 % 2 == 0){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design[i][11] + ")";
                        ctx.fill();
                    }
                    if(j % 2 == 0 && k3 % 2 == 1){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";                        ctx.fill();
                    }
                    //描画回数が奇数回の時
                    if(j % 2 == 1 && k3 % 2 == 1){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design[i][11] + ")";
                        ctx.fill();
                    }
                    if(j % 2 == 1 && k3 % 2 == 0){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";                        ctx.fill();
                    }
                }else if(create_design[i][7] == 3){
                    if(j % 2 == 0 && k3 % 2 == 0){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(175,175,176,0.8)";
                        ctx.fill();
                    }
                    if(j % 2 == 0 && k3 % 2 == 1){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";                        ctx.fill();
                    }
                    //描画回数が奇数回の時
                    if(j % 2 == 1 && k3 % 2 == 1){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(175,175,176,0.8)";
                        ctx.fill();
                    }
                    if(j % 2 == 1 && k3 % 2 == 0){
                        ctx.stroke();
                        ctx.fillStyle = "rgba(" + create_design[i][8] + ","+ create_design[i][9]+ ","+ create_design[i][10]+ ","+ create_design[i][11] + ")";                        ctx.fill();
                    }
                }else{
                    ctx.stroke();
                }               
                angle4 =+ angleplus;
            }
        }

   // }
   
}

///終了画面の最終10デザイン
function draw_last(ctx, i, width, height) {
    ctx.globalAlpha = 1;
    ctx.fillStyle = linecolor;
    ctx.strokeStyle = linecolor;
    ctx.lineWidth = 0.4;
    console.log(i);
    console.log(create_design_last[i][0]);
    if (create_design_last[i][0] == 4) {//rect
        var angle = 0;
        var Rx = create_design_last[i][1];
        var Ry = create_design_last[i][2];
    
        var x = create_design_last[i][3];
        var y = create_design_last[i][4];
        
        var j = create_design_last[i][6];;
        var angleplus = 360 / create_design_last[i][6];
    
        ctx.translate(width / 2, height / 2); 
        let max = create_design_last[i][8];
                let min = create_design_last[i][8];
                for(let a = 9; a <= 10; a++){
                    if(max < create_design_last[i][a]){
                        max = create_design_last[i][a];
                    }
                }
                for(let a = 9; a <= 10; a++){
                    if(min > create_design_last[i][a]){
                        min = create_design_last[i][a];
                    }
                }
        let comp_color = max + min; 
        let red = comp_color - create_design_last[i][8];
        let green = comp_color - create_design_last[i][9];
        let blue = comp_color - create_design_last[i][10];
       
        for(k = 0; k < j; k++ ){
            //枠線
            ctx.beginPath();
            ctx.rotate(angle * Math.PI /180);
            ctx.strokeRect(Rx,Ry,x,y);

            //塗りつぶし１_白色ver
            //描画回数が偶数回の時
            if(create_design_last[i][7] == 1 && j % 2 == 0 && k % 2 == 0){
                ctx.fillStyle = "rgba(255,255,255,1)";
                ctx.fillRect(Rx,Ry,x,y);
            }
            if(create_design_last[i][7] == 1 && j % 2 == 0 && k % 2 == 1){
                
                ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                ctx.fillRect(Rx,Ry,x,y);
            }
            //描画回数が奇数回の時
            if(create_design_last[i][7] == 1 && j % 2 == 1 && k % 2 == 1){
                ctx.fillStyle = "rgba(255,255,255,1)";
                ctx.fillRect(Rx,Ry,x,y);
            }
            if(create_design_last[i][7] == 1 && j % 2 == 1 && k % 2 == 0){
                ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                ctx.fillRect(Rx,Ry,x,y);
            }
            //塗りつぶし２＿補色ver
            //描画回数が偶数回の時
            if(create_design_last[i][7] == 2 && j % 2 == 0 && k % 2 == 0){
                ctx.fillStyle = "rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design_last[i][11] + ")";
                ctx.fillRect(Rx,Ry,x,y);
            }
            if(create_design_last[i][7] == 2 && j % 2 == 0 && k % 2 == 1){
                
                ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                ctx.fillRect(Rx,Ry,x,y);
            }
            //描画回数が奇数回の時
            if(create_design_last[i][7] == 2 && j % 2 == 1 && k % 2 == 1){
                ctx.fillStyle = "rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design_last[i][11] + ")";
                ctx.fillRect(Rx,Ry,x,y);
            }
            if(create_design_last[i][7] == 2 && j % 2 == 1 && k % 2 == 0){
                ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                ctx.fillRect(Rx,Ry,x,y);
            }
            //塗りつぶし3_灰色ver
            //描画回数が偶数回の時
            if(create_design_last[i][7] == 3 && j % 2 == 0 && k % 2 == 0){
                ctx.fillStyle = "rgba(175,175,176,0.8)";
                ctx.fillRect(Rx,Ry,x,y);
            }
            if(create_design_last[i][7] == 3 && j % 2 == 0 && k % 2 == 1){
                
                ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                ctx.fillRect(Rx,Ry,x,y);
            }
            //描画回数が奇数回の時
            if(create_design_last[i][7] == 3 && j % 2 == 1 && k % 2 == 1){
                ctx.fillStyle = "rgba(175,175,176,0.8)";
                ctx.fillRect(Rx,Ry,x,y);
            }
            if(create_design_last[i][7] == 3 && j % 2 == 1 && k % 2 == 0){
                ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                ctx.fillRect(Rx,Ry,x,y);
            }
            ctx.stroke();
            angle =+ angleplus;
        }
    }

    if (create_design_last[i][0] == 3) {//triangle
        var angle2 = 0;
        var a1 = create_design_last[i][1];
        var a2 = create_design_last[i][2];
        var b1 = create_design_last[i][3];
        var b2 = create_design_last[i][4];
        var c1 = (Math.random() * 41 )+ 60;  
        var c2 = (Math.random() * 41 )+ 60;    

        var j = create_design_last[i][6];
        var angleplus = 360 / create_design_last[i][6];

        ctx.translate(width / 2, height / 2);  
        let max = create_design_last[i][8];
        let min = create_design_last[i][8];
        for(let a = 9; a <= 10; a++){
            if(max < create_design_last[i][a]){
                max = create_design_last[i][a];
            }
        }
        for(let a = 9; a <= 10; a++){
            if(min > create_design_last[i][a]){
                min = create_design_last[i][a];
            }
        }
     let comp_color = max + min;
     let red = comp_color - create_design_last[i][8];
     let green = comp_color - create_design_last[i][9];
     let blue = comp_color - create_design_last[i][10];  
     console.log("rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")");
     console.log("補色rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design_last[i][11] + ")");
        for(k1 = 0; k1 < j; k1++ ){
            ctx.beginPath();
            ctx.rotate(angle2 * Math.PI /180);
            ctx.moveTo(a1, a2);
            ctx.lineTo(b1, b2);
            ctx.lineTo(c1, c2);
            ctx.closePath();

             //描画回数が偶数階の時
             if(create_design_last[i][7] == 1 && j % 2 == 0 && k1 % 2 == 0){
                ctx.fillStyle = "rgba(255,255,255,1)";
                ctx.fill();
            }
            if(create_design_last[i][7] == 1 && j % 2 == 0 && k1 % 2 == 1){
                ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                ctx.fill();
            }
            //描画回数が奇数回の時
            if(create_design_last[i][7] == 1 && j % 2 == 1 && k1 % 2 == 1){
                ctx.fillStyle = "rgba(255,255,255,1)";
                ctx.fill();
            }
            if(create_design_last[i][7] == 1 && j % 2 == 1 && k1 % 2 == 0){
                ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                ctx.fill();
            }
            //塗りつぶし２＿補色ver
            //描画回数が偶数回の時
            if(create_design_last[i][7] == 2 && j % 2 == 0 && k1 % 2 == 0){
                ctx.fillStyle = "rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design_last[i][11] + ")";
                ctx.fill();
            }
            if(create_design_last[i][7] == 2 && j % 2 == 0 && k1 % 2 == 1){
                ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                ctx.fill();
            }
            //描画回数が奇数回の時
            if(create_design_last[i][7] == 2 && j % 2 == 1 && k1 % 2 == 1){
                ctx.fillStyle = "rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design_last[i][11] + ")";
                ctx.fill();
            }
            if(create_design_last[i][7] == 2 && j % 2 == 1 && k1 % 2 == 0){
                ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                ctx.fill();
            }
            //塗りつぶし3＿灰色ver
             //描画回数が偶数階の時
             if(create_design_last[i][7] == 3 && j % 2 == 0 && k1 % 2 == 0){
                ctx.fillStyle = "rgba(175,175,176,0.8)";
                ctx.fill();
            }
            if(create_design_last[i][7] == 3 && j % 2 == 0 && k1 % 2 == 1){
                ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                ctx.fill();
            }
            //描画回数が奇数回の時
            if(create_design_last[i][7] == 3 && j % 2 == 1 && k1 % 2 == 1){
                ctx.fillStyle = "rgba(175,175,176,0.8)";
                ctx.fill();
            }
            if(create_design_last[i][7] == 3 && j % 2 == 1 && k1 % 2 == 0){
                ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                ctx.fill();
            }
            else{
                 ctx.stroke();
            }
            angle2 =+ angleplus;
        }
    }

    if (create_design_last[i][0] == 1) {//circle
        var angle3 = 0;
        var cr = create_design_last[i][5];
        var r = Math.sqrt(create_design_last[i][3] * create_design_last[i][3] + create_design_last[i][4] * create_design_last[i][4]) / 2; 
        
        var j = create_design_last[i][6];
        var angleplus = 360 / create_design_last[i][6];
        
        var x = cr * Math.cos( angle3 * Math.PI / 180);
        var y = cr * Math.sin( angle3 * Math.PI / 180);
        
      //  console.log(create_design[i][8]);
       // console.log(create_design[i][9]);
       // console.log(create_design[i][10]);
       // console.log(create_design[i][11]);

        ctx.translate(width / 2, height / 2);  
        let max = create_design_last[i][8];
                let min = create_design_last[i][8];
                for(let a = 9; a <= 10; a++){
                    if(max < create_design_last[i][a]){
                        max = create_design_last[i][a];
                    }
                }
                for(let a = 9; a <= 10; a++){
                    if(min > create_design_last[i][a]){
                        min = create_design_last[i][a];
                    }
                }
        let comp_color = max + min;
        let red = comp_color - create_design_last[i][8];
        let green = comp_color - create_design_last[i][9];
        let blue = comp_color - create_design_last[i][10];  
        for(k2 = 0; k2 < j; k2++ ){
            ctx.beginPath();
            ctx.rotate(angle3 * Math.PI /180);
            ctx.arc(x,  y, r, 0 * Math.PI/180, 360 * Math.PI, true);
            //塗りつぶし１＿白色ver
            if(create_design_last[i][7] == 1){
                if(j % 2 == 0 && k2 % 2 == 0){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(255,255,255,1)";
                    ctx.fill();
                }
                if(j % 2 == 0 && k2 % 2 == 1){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                    ctx.fill();
                }
                //描画回数が奇数回の時
                if(j % 2 == 1 && k2 % 2 == 1){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(255,255,255,1)";
                    ctx.fill();
                }
                if(j % 2 == 1 && k2 % 2 == 0){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                    ctx.fill();
                }
            }else if(create_design_last[i][7] == 2){//塗りつぶし2＿補色ver
                if(j % 2 == 0 && k2 % 2 == 0){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design_last[i][11] + ")";
                    ctx.fill();
                }
                if(j % 2 == 0 && k2 % 2 == 1){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                    ctx.fill();
                }
                //描画回数が奇数回の時
                if(j % 2 == 1 && k2 % 2 == 1){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design_last[i][11] + ")";
                    ctx.fill();
                }
                if(j % 2 == 1 && k2 % 2 == 0){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                    ctx.fill();
                }
            }else if(create_design_last[i][7] == 3){
                if(j % 2 == 0 && k2 % 2 == 0){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(175,175,176,0.8)";
                    ctx.fill();
                }
                if(j % 2 == 0 && k2 % 2 == 1){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                    ctx.fill();
                }
                //描画回数が奇数回の時
                if(j % 2 == 1 && k2 % 2 == 1){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(175,175,176,0.8)";
                    ctx.fill();
                }
                if(j % 2 == 1 && k2 % 2 == 0){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                    ctx.fill();
                }
            }else{
                ctx.stroke();
            }               
            angle3 =+ angleplus;
        }
    }

    if (create_design_last[i][0] == 2) {//ellipse
        var angle4 = 0;
        var r = create_design_last[i][5];
        var Ex = Math.sqrt(create_design_last[i][3] * create_design_last[i][3] + create_design_last[i][4] * create_design_last[i][4]) / 2;
        var Ey = Math.sqrt(create_design_last[i][3] * create_design_last[i][3] + create_design_last[i][4] * create_design_last[i][4]) / 2.5;

        var k = (create_design_last[i][1] % 19) * 10;

        var j = create_design_last[i][6];
        var angleplus = 360 / create_design_last[i][6];

        var x = r * Math.cos( angle4 * Math.PI / 180);
        var y = r * Math.sin( angle4 * Math.PI / 180);

        ctx.translate(width / 2, height / 2);   
        let max = create_design_last[i][8];
                let min = create_design_last[i][8];
                for(let a = 9; a <= 10; a++){
                    if(max < create_design_last[i][a]){
                        max = create_design_last[i][a];
                    }
                }
                for(let a = 9; a <= 10; a++){
                    if(min > create_design_last[i][a]){
                        min = create_design_last[i][a];
                    }
                }
        let comp_color = max + min;  
        let red = comp_color - create_design_last[i][8];
        let green = comp_color - create_design_last[i][9];
        let blue = comp_color - create_design_last[i][10];  

        for(k3 = 0; k3 < j; k3++ ){
            ctx.beginPath();
            ctx.rotate(angle4 * Math.PI /180);
            ctx.ellipse(x,  y, Ex, Ey, k * Math.PI / 180, 0 * Math.PI/180, 360 * Math.PI/180, true);
            if(create_design_last[i][7] == 1){
                if(j % 2 == 0 && k3 % 2 == 0){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(255,255,255,1)";
                    ctx.fill();
                }
                if(j % 2 == 0 && k3 % 2 == 1){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";                        ctx.fill();
                }
                //描画回数が奇数回の時
                if(j % 2 == 1 && k3 % 2 == 1){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(255,255,255,1)";
                    ctx.fill();
                }
                if(j % 2 == 1 && k3 % 2 == 0){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";                        ctx.fill();
                }
            }else if(create_design_last[i][7] == 2){
                if(j % 2 == 0 && k3 % 2 == 0){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design_last[i][11] + ")";
                    ctx.fill();
                }
                if(j % 2 == 0 && k3 % 2 == 1){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                    ctx.fill();
                }
                //描画回数が奇数回の時
                if(j % 2 == 1 && k3 % 2 == 1){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(" + red + ","+ green+ ","+ blue+ ","+ create_design_last[i][11] + ")";
                    ctx.fill();
                }
                if(j % 2 == 1 && k3 % 2 == 0){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";                        ctx.fill();
                }
            }else if(create_design_last[i][7] == 3){
                if(j % 2 == 0 && k3 % 2 == 0){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(175,175,176,0.8)";
                    ctx.fill();
                }
                if(j % 2 == 0 && k3 % 2 == 1){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                    ctx.fill();
                }
                //描画回数が奇数回の時
                if(j % 2 == 1 && k3 % 2 == 1){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(175,175,176,0.8)";
                    ctx.fill();
                }
                if(j % 2 == 1 && k3 % 2 == 0){
                    ctx.stroke();
                    ctx.fillStyle = "rgba(" + create_design_last[i][8] + ","+ create_design_last[i][9]+ ","+ create_design_last[i][10]+ ","+ create_design_last[i][11] + ")";
                    ctx.fill();
                }
            }else{
                ctx.stroke();
            }               
            angle4 =+ angleplus;
        }
    }

// }

}