const decks = 100; //既存デザインの個数
const canvas_column = 2; //canvasの生成列の個数
const Generated_Design = 10; //デザインの生成個数
const Chromosome = 12;//染色体
const design_element = 12; //一つの図形を構成する要素
const Shapes = 4; //図形の数
const mutation_probability = 10; //突然変異確率
let backcolor = '#fff'; //canvasの背景色
let linecolor = '#222222';
const elite = 100 ;//エリート個体の上限
const checks = [];

const deck_design = []; //既存のデザイン情報
const pre_design = []; //前世代のデザイン情報
let create_design = []; //生成されるデザイン
let elite_design = []; //エリート個体
let end_design = []; //終了時に表示されるデザイン（進化過程）
let create_design_last = [];//終了時に表示されるデザイン（最終世代）

let draw_switch = 'progress';
let elite_count = 1;
let Gene = 0;
let create_count = 1;

for (let j = 1; j <= decks; j++) {
    deck_design[j] = [];
    deck_design[j].push(
        Math.floor(Math.random()*  Shapes) + 1, //0_図形の種類
        Math.floor(Math.random()* 41), //1_点AのX座標
        Math.floor(Math.random()* 41), //2_点AのY座標
        Math.floor(Math.random()* 31) + 20, //3_長さB 
        Math.floor(Math.random()* 31) + 20, //4_長さC
        Math.floor(Math.random()* 71) + 10, //5_軸円の半径
        Math.floor(Math.random()* 21) + 5, //6_描画回数
        Math.floor(Math.random()*  4), //7_塗りつぶしの有無
        Math.floor(Math.random()* 256), //8_色情報R
        Math.floor(Math.random()* 256), //9_色情報G
        Math.floor(Math.random()* 256), //10_色情報B
        (Math.floor(Math.random()* 5) + 1) / 10, //11_色の透過度
        );
    }

for (let h = 1; h <= Generated_Design; h++) {
    create_design[h] = [];
    pre_design[h] = [];
    create_design_last[h] = [];
}

//追加//エリート分の交叉用//上に組み込
for(let i = Generated_Design + 1 ; i < Generated_Design +1 + elite ; i++){
    create_design[i] = [];
}

console.log(deck_design[5]);

window.onload = function () {
    //初期画面を生成
    const img = document.createElement('img');
    img.src = 'title.png';
    img.className = 'title';
    document.getElementById('base').appendChild(img);
    for (i = 1; i <= decks; i++) {
    }
    const next_button = document.createElement('input');
    next_button.type = 'button';
    next_button.className = 'button_aa';
    next_button.value = 'START';
   
    next_button.onclick = function () {  
        for (let d = 0; d < decks; d++) {
                checks[d] = 'true';
        }
       // console.log(checks);
        div_delete();
        first_next();
    }
    document.getElementById('base').appendChild(next_button);
};

function first_next() {
    div_delete();
    next_create();
    first_design_Preparation();
    draw_canvas();
};

function div_delete() {
    const div_del = document.getElementById('base');
    div_del.removeChild(div_del.firstChild);
};

function next_create() {

    let image_count = 1;

    const img = document.createElement('img');
    img.src = 'mark.png';
    img.className = 'mark';
    document.getElementById('base').appendChild(img);

    const create_p = document.createElement('p');
    create_p.className = 'count_p';
    const new_text_b = document.createTextNode("デザイン作成回数："+ create_count);
    create_p.appendChild(new_text_b);
    document.getElementById('base').appendChild(create_p);
    
    //デザイン評価画面
    for (let i = 0; i < canvas_column; i++) {
        const create_ul = document.createElement('ul');
        let ul_id = 'lists' + i;
        create_ul.className = 'ul_a'
        create_ul.id = ul_id
        document.getElementById('base').appendChild(create_ul);

        for (let k = 0; k < 5; k++) {
            const create_li = document.createElement('li')
            let li_id = 'lis' + i + k;
            create_li.id = li_id
            document.getElementById(ul_id).appendChild(create_li);

            for (let t = 0; t < 3; t++) {
                const create_span = document.createElement('span');
                let span_id = 'span' + i + k + t;
                create_span.id = span_id;
                create_span.className = 'span_class'
                document.getElementById(li_id).appendChild(create_span);

                if (t == 0) {
                    const create_canvas = document.createElement('canvas');
                    canvas_id = 'image' + image_count
                    create_canvas.id = canvas_id;
                    create_canvas.className = 'color';
                    create_canvas.width = '250';
                    create_canvas.height = '250';
                    create_canvas.style.backgroundColor = backcolor;
                    document.getElementById(span_id).appendChild(create_canvas);

                } else if (t == 2) {
                    
                } else {
                    const create_range = document.createElement('input');
                    create_range.id = 'range' + image_count;
                    create_range.type = 'range';
                    create_range.className = 'input_range';
                    create_range.max = '4.5';
                    create_range.step = '0.1'
                    create_range.value = '0';
                    document.getElementById(span_id).appendChild(create_range);

                    const create_span_span = document.createElement('span');
                    let span_span_id = span_id + "1";
                    create_span_span.id = span_span_id
                    create_span_span.className = 'create_span_span';
                    create_span_span.innerText = "0";
                    document.getElementById(span_id).appendChild(create_span_span);

                    create_range.oninput = function (e) {
                        const dom_span = document.getElementById(span_id + '1');
                        dom_span.innerText = Math.round(e.target.value);
                        const dom_button = document.getElementById(span_id + '2');
                    }
                }
            }
            image_count = image_count + 1;
        }

    }
    const create_ul_b = document.createElement('ul');
    let ul_id = 'lists' + i;
    create_ul_b.className = 'ul_c'
    create_ul_b.id = 'ul_b'
    document.getElementById('base').appendChild(create_ul_b);

    const create_li_b = document.createElement('li')
    let li_id = 'lis';
    create_li_b.id = li_id;
    
    if (Gene == 0) {
        const regeneration_button = document.createElement('input');
        regeneration_button.type = 'button';
        regeneration_button.alt = image_count;
        regeneration_button.className = 'button_reset';
        regeneration_button.value = 'デザインリセット'
        document.getElementById('ul_b').appendChild(regeneration_button);
        regeneration_button.onclick = function (e) {
            canvas_delete();
            first_design_Preparation();
            next_create();
            draw_canvas();
        }
    }
    const next_design_button = document.createElement('input');
    next_design_button.type = 'button';
    next_design_button.className = 'button';
    next_design_button.alt = image_count;
    next_design_button.value = '次のデザインへ'
    document.getElementById('ul_b').appendChild(next_design_button);
    next_design_button.onclick = function (e) {
        Gene = Gene + 1;
        let select_count = 0;
        for (let i = 1; i <= Generated_Design; i++) {
            const range_value = document.getElementById('range' + i);
            if (Math.round(range_value.value) >= 1) {
                select_count = select_count + 1;
            }
        }
        if (select_count >= 4) {
            create_count = create_count +1;
            end_trans();
            Next_generation_design();
        } else {
            alert('4つ以上のデザインを評価してください')
        }
    } 
    if (Gene != 0) {
        const end_button = document.createElement('input');
        end_button.type = 'button';
        end_button.className = 'button_finish';
        end_button.value = '終了する'
        document.getElementById('ul_b').appendChild(end_button);
        end_button.onclick = function (e) {
            canvas_delete();
            end_canvas();
        }
    }
};

function first_design_Preparation() {
    const first_design = [];
    let first_count = 0
    for (let i = 1; i <= decks; i++) {
        if (checks[i - 1] == 'true') {
            first_count = first_count + 1;
            first_design[first_count] = [];
            for (let k = 0; k < Chromosome; k++) {
                first_design[first_count][k] = deck_design[i][k];
            }
        }
    }
    first_design_create(first_design, first_count);
}

function first_design_create(design, ran) {

    for (let i = 1; i <= Generated_Design; i += 2) {
        var design_rand_a = Math.floor(Math.random() * (ran + 1 - 1)) + 1;
        var design_rand_b = Math.floor(Math.random() * (ran + 1 - 1)) + 1;
        if (design_rand_a == design_rand_b) {
            while (true) {
                var design_rand_b = Math.floor(Math.random() * (ran + 1 - 1)) + 1;
                if (design_rand_a != design_rand_b) {
                    break;
                }
            }
        }
        if (i <= 10) {
            let cross_rand = Math.floor(Math.random() * (Chromosome - 1 + 1 - 2)) + 2;
            for (let l = 0; l < Chromosome; l++) {
                if (l < cross_rand) {
                    create_design[i][l] = design[design_rand_a][l];
                    create_design[i + 1][l] = design[design_rand_b][l];
                } else {
                    create_design[i][l] = design[design_rand_b][l];
                    create_design[i + 1][l] = design[design_rand_a][l];
                }
            }
        } else {
            first_ichiyou_cross(design, i, design_rand_a, design_rand_b);
        }
    }
}

function Next_generation_design() {
    const next_design = [];
    let parent_a;
    let parent_b;

    for (let i = 1; i <= Generated_Design; i++) {
        for (let l = 0; l < Chromosome; l++) {
            pre_design[i][l] = create_design[i][l];
        }
    }
 
    for (let h = 1; h <= Generated_Design; h++) {
        next_design[h] = [];
    }

    for (let i = 1; i <= Generated_Design; i += 2) {
        parent_a = roulette();
        parent_b = roulette();
        if (parent_a == parent_b) {
            while (true) {
                parent_b = roulette();
                if (parent_a != parent_b) {
                    break;
                }
            }
        }
        ichiyou_cross(parent_a, parent_b, next_design, i);
    }
    for (let i = 1; i <= Generated_Design; i++) {
        for (let l = 0; l < Chromosome; l++) {
            create_design[i][l] = next_design[i][l];
        }
    }
    
    if(elite_design.length != 0){
        for(i=0;i<elite_design.length;i++){
            for (let l = 0; l < Chromosome; l++) {
            create_design[Generated_Design + 1 + i][l] = elite_design[i][l];
            }
        }
    }
    mutation();
    canvas_delete();
    next_create();
    draw_canvas();
}

function canvas_delete() {
    const parentelement = document.getElementById('base');
    while (parentelement.firstChild) {
        parentelement.removeChild(parentelement.firstChild);
    }

}

function draw_canvas() {

    if (draw_switch == 'progress') {
        for (let i = 1; i <= Generated_Design; i++) {
            let image_id = 'image' + i;
            const canvas = document.getElementById(image_id);
            var width = canvas.width;
            var height = canvas.height;
            var ctx = canvas.getContext('2d');
        
            draw(ctx, i, width, height);
        }
    } else if (draw_switch == 'end') {
        for (let  i= 1; i <= Generated_Design; i++) {
            for (let l = 0; l < Chromosome; l++) {
                create_design_last[i][l] = create_design[i][l];
               // console.log('終わり:' + create_design_last[i][l]);
            }
        }

        for (let i = 1; i <= end_design.length; i++) {
            for (let l = 0; l < Chromosome; l++) {
                create_design[i][l] = end_design[i - 1][l];
                //console.log('終わり:' + create_design_[i][l]);
            }
        }
                
        for (let i = 1; i <= Generated_Design; i++) {
            let lastimage_id = 'lastimage' + i;
            const canvas = document.getElementById(lastimage_id)
            var ctx = canvas.getContext('2d');
            var width = canvas.width;
            var height = canvas.height;
            draw_last(ctx, i, width, height);
            console.log(lastimage_id);
        }
        
        for (let i = 1; i <= end_design.length; i++) {
            let image_id = 'image' + i;
            const canvas = document.getElementById(image_id)
            var ctx = canvas.getContext('2d');
            var width = canvas.width;
            var height = canvas.height;
            console.log(width);
            console.log(height);
            draw(ctx, i, width, height);
            console.log(image_id);
        }
    }
}

function elite_preservation(i) {
    console.log(i);
    if(elite_design.length == 0){
        elite_design[0] = [];
    }else if(elite_design.length == 1){
        elite_design[1] = [];
        for (let g = 0; g < Chromosome; g++) {
        elite_design[1][g] = elite_design[0][g];
        }
    }
    
    if(elite_design.length == 2){
        for (let g = 0; g < Chromosome; g++) {
        elite_design[1][g] = elite_design[0][g];
        }
    }
    
    for (let g = 0; g < Chromosome; g++) {
        elite_design[0][g] = create_design[i][g];
    }
    console.log(elite_design);
}
//交叉方法
///////////////一様交叉
function ichiyou_cross(a, b, next_design, i) {
    for (let l = 0; l < Chromosome; l++) {
        if(Math.floor(Math.random()) % 2 == 1){
            next_design[i][l] = create_design[a][l];
            next_design[i + 1][l] = create_design[b][l];
        }else{
            next_design[i][l] = create_design[b][l];
            next_design[i + 1][l] = create_design[a][l];
        }
    }
}
function first_ichiyou_cross(design, i, design_a, design_b) {
    for (let l = 0; l < Chromosome; l++) {
        if(Math.floor(Math.random()) % 2 == 1){
            create_design[i][l] = design[design_a][l];
            create_design[i + 1][l] = design[design_b][l];
        }else{
            create_design[i][l] = design[design_b][l];
            create_design[i + 1][l] = design[design_a][l];
        }
    }
}

//親の選択方法
function roulette() {
    let count = 0;
    const select_design = [];
    for (let i = 1; i <= Generated_Design + elite_design.length; i++) {
        if(i <= Generated_Design){
            const range_value = document.getElementById('range' + i);
            for (h = 0; h < Math.round(range_value.value); h++) {
                select_design[count] = i;
                count = count + 1;
            }
        }else {
            for(let p = 0; p < 5 ;p++){
                select_design[count] = i;
                count = count + 1;
            }
        }
    }
    const number = Math.floor(Math.random() * count);
    return select_design[number];
}

function save_canvas(canvas_id)
{
	const canvas = document.getElementById(canvas_id);
	if (canvas.msToBlob) { //for IE
		var blob = canvas.msToBlob();
		window.navigator.msSaveBlob(blob, 'sample_deck.png');
	} else {
		//アンカータグを作成
		var a = document.createElement('a');
		a.href = canvas.toDataURL("image/png");
		//ダウンロード時のファイル名を指定
		a.download = "sample_deck.png";
		//クリックイベントを発生させる
		a.click();
	}
}

function save_lastcanvas(lastcanvas_id)
{
	const canvas = document.getElementById(lastcanvas_id);
	if (canvas.msToBlob) { //for IE
		var blob = canvas.msToBlob();
		window.navigator.msSaveBlob(blob, 'sample_deck.png');
	} else {
		//アンカータグを作成
		var a = document.createElement('a');
		a.href = canvas.toDataURL("image/png");
		//ダウンロード時のファイル名を指定
		a.download = "sample_deck.png";
		//クリックイベントを発生させる
		a.click();
	}
}

function end_trans() {
    let trans_count = end_design.length;
    for (let i = 1; i <= Generated_Design; i++) {
        const range_value = document.getElementById('range' + i);
        if (Math.round(range_value.value) == 4 || Math.round(range_value.value) == 5) {
            end_design[trans_count] = [];
            for (let k = 0; k < Chromosome; k++) {
                end_design[trans_count][k] = create_design[i][k]
            }
            trans_count = trans_count + 1;
        }
    }
    //    console.log(trans_count);
    //    console.log(end_design.length);
}

function end_canvas() {

    let color_control = 0;
    let lastimage_count = 1;
    let design_count = end_design.length;

    const create_ul_b = document.createElement('ul');
    let ul_id = 'lists';
    create_ul_b.className = 'ul_cc'
    create_ul_b.id = ul_id;

    const create_p = document.createElement('p');
    create_p.className = 'down_p';
    const create_pp = document.createElement('p');
    create_pp.className = 'down_p';
    const create_ppp = document.createElement('p');
    create_ppp.className = 'down_p';
    const new_text_b = document.createTextNode("デザインをクリックするとダウンロードすることができます。");
    create_p.appendChild(new_text_b);
    document.getElementById('base').appendChild(create_p);

    const new_text_a = document.createTextNode("---◎ おすすめのシンボルマーク ◎---");
    create_pp.appendChild(new_text_a);
    document.getElementById('base').appendChild(create_pp);

        const create_ul = document.createElement('ul');
        ul_id = 'lists';
        create_ul.id = ul_id
        create_ul.className = 'ul_a'
        document.getElementById('base').appendChild(create_ul);
        let num = 1;
        
        const create_aaa = document.createElement('ul');
        ul_id = 'lists01';
        create_aaa.id = ul_id
        create_aaa.className = 'ul_a'
        document.getElementById('base').appendChild(create_aaa);

        const create_bbb = document.createElement('ul');
        ul_id = 'lists02';
        create_bbb.id = ul_id
        create_bbb.className = 'ul_a'
        document.getElementById('base').appendChild(create_bbb);

        for (let k = 0; k < 5; k++) {
            const create_li = document.createElement('li')
            let li_id_1 = 'lis' + i + k;
            create_li.id = li_id_1
            create_ul.className = 'ul_last1'
            create_aaa.appendChild(create_li);

            const create_canvas = document.createElement('canvas');
            canvas_id = 'lastimage' + lastimage_count;
            create_canvas.id = canvas_id;
            create_canvas.alt = lastimage_count;
            create_canvas.className = 'color';
            create_canvas.width = '250';
            create_canvas.height = '250';
            create_canvas.style.backgroundColor = backcolor;
            document.getElementById(li_id_1).appendChild(create_canvas);
            console.log(canvas_id + 'aaa');

            create_canvas.onclick = function (e) {
                const ret = confirm("デザインをダウンロードしますか？");
                    if (ret == true) {
                    const design_num = e.target.alt;
                    const save_create_canvas = document.createElement('canvas');
                    const savecanvas_id = 'last_savecanvas';
                    save_create_canvas.id = savecanvas_id;
                    save_create_canvas.alt = lastimage_count;
                    save_create_canvas.className = 'color';
                    save_create_canvas.width = '250';
                    save_create_canvas.height = '250';
                    document.getElementById('base').appendChild(save_create_canvas);

                    const canvas = document.getElementById('last_savecanvas')
                    var ctx = canvas.getContext('2d');
                    ctx.setTransform(1,0,0,1,0,0);
                    ctx.fillStyle = backcolor;
                    ctx.fillRect(0, 0, 250, 250);
                    draw_last(ctx, design_num, save_create_canvas.width, save_create_canvas.height);
                    save_canvas(savecanvas_id);
                    alert('ダウンロードしました')
                    }
            }
            i++;
            num++;
            lastimage_count = lastimage_count + 1
            }

            for (let k = 5; k < 10; k++) {
                const create_li = document.createElement('li')
                let li_id_2 = 'lis' + i + k;
                create_li.id = li_id_2
                create_ul.className = 'ul_a'
                create_bbb.appendChild(create_li);
    
                const create_canvas = document.createElement('canvas');
                canvas_id = 'lastimage' + lastimage_count;
                create_canvas.id = canvas_id;
                create_canvas.alt = lastimage_count;
                create_canvas.className = 'color';
                create_canvas.width = '250';
                create_canvas.height = '250';
                create_canvas.style.backgroundColor = backcolor;
                document.getElementById(li_id_2).appendChild(create_canvas);
    
                create_canvas.onclick = function (e) {
                    const ret = confirm("デザインをダウンロードしますか？");
                        if (ret == true) {
                        const design_num = e.target.alt;
                        const save_create_canvas = document.createElement('canvas');
                        const savecanvas_id = 'last_savecanvas';
                        save_create_canvas.id = savecanvas_id;
                        save_create_canvas.alt = lastimage_count;
                        save_create_canvas.className = 'color';
                        save_create_canvas.width = '250';
                        save_create_canvas.height = '250';
                        document.getElementById('base').appendChild(save_create_canvas);
    
                        const canvas = document.getElementById('last_savecanvas')
                        var ctx = canvas.getContext('2d');
                        ctx.setTransform(1,0,0,1,0,0);
                        ctx.fillStyle = backcolor;
                        ctx.fillRect(0, 0, 250, 250);
                        draw_last(ctx, design_num, save_create_canvas.width, save_create_canvas.height);
    
                        //                        let link = document.createElement("a");
                        //                        link.href = canvas.toDataURL("image/png");
                        //                        link.download = "test.png";
                        //                        link.click();
                        save_canvas(savecanvas_id);
                        alert('ダウンロードしました')
                        }
                }
                i++;
                num++;
                lastimage_count = lastimage_count + 1
                }
let image_count = 1;
//design_count = end_design.length;

const new_text_c = document.createTextNode("---○ おすすめのシンボルマーク ○---");
create_ppp.appendChild(new_text_c);
document.getElementById('base').appendChild(create_ppp);

    if (end_design.length == 0) {
        document.getElementById('base').appendChild(create_ul_b);
        draw_switch = 'end';
        draw_canvas();
    } else {
        for (let i = 0; i < (end_design.length / 5); i++) {
            const create_ul = document.createElement('ul');
            let ul_id = 'lists' + i;
            create_ul.id = ul_id
            create_ul.className = 'ul_a'
            document.getElementById('base').appendChild(create_ul);

            if (design_count > 5) {
                for (let k = 0; k < 5; k++) {
                    const create_li = document.createElement('li')
                    let li_id = 'lis' + i + k;
                    create_li.id = li_id
                    document.getElementById(ul_id).appendChild(create_li);

                    const create_canvas = document.createElement('canvas');
                    canvas_id = 'image' + image_count;
                    create_canvas.id = canvas_id;
                    create_canvas.alt = image_count;
                    create_canvas.className = 'color';
                    create_canvas.width = '250';
                    create_canvas.height = '250';
                    create_canvas.style.backgroundColor = backcolor;

                    document.getElementById(li_id).appendChild(create_canvas);
                    create_canvas.onclick = function (e) {
                        const ret = confirm("デザインをダウンロードしますか？");
                        if (ret == true) {
                            const design_num = e.target.alt;
                            const save_create_canvas = document.createElement('canvas');
                            const savecanvas_id = 'savecanvas';
                            save_create_canvas.id = savecanvas_id;
                            save_create_canvas.alt = image_count;
                            save_create_canvas.className = 'color';
                            save_create_canvas.width = '250';
                            save_create_canvas.height = '250';
                            document.getElementById('base').appendChild(save_create_canvas);

                            const canvas = document.getElementById('savecanvas')
                            var ctx = canvas.getContext('2d');
                            ctx.setTransform(1,0,0,1,0,0);
                            ctx.fillStyle = backcolor;
                            ctx.fillRect(0, 0, 250, 250);
                            draw(ctx, design_num, save_create_canvas.width, save_create_canvas.height);
                            save_canvas(savecanvas_id);
                            alert('ダウンロードしました')
                        }
                    }
                    image_count = image_count + 1
                }
            } else {
                for (let k = 0; k < design_count; k++) {
                    const create_li = document.createElement('li')
                    let li_id = 'lis' + i + k;
                    create_li.id = li_id
                    document.getElementById(ul_id).appendChild(create_li);

                    const create_canvas = document.createElement('canvas');
                    canvas_id = 'image' + image_count
                    create_canvas.id = canvas_id;
                    create_canvas.alt = image_count;
                    create_canvas.className = 'color';
                    create_canvas.width = '250';
                    create_canvas.height = '250';
                    create_canvas.style.backgroundColor = backcolor;
                    document.getElementById(li_id).appendChild(create_canvas);
                    
                    create_canvas.onclick = function (e) {
                        const ret = confirm("デザインをダウンロードしますか？");
                        if (ret == true) {
                            const design_num = e.target.alt;
                            const save_create_canvas = document.createElement('canvas');
                            const savecanvas_id = 'savecanvas' + image_count
                            save_create_canvas.id = savecanvas_id;
                            save_create_canvas.alt = image_count;
                            save_create_canvas.className = 'color';
                            save_create_canvas.width = '250';
                            save_create_canvas.height = '250';
                            document.getElementById('base').appendChild(save_create_canvas);
                            const canvas = document.getElementById('savecanvas' + image_count)
                            var ctx = canvas.getContext('2d');
                            ctx.setTransform(1,0,0,1,0,0);
                            ctx.fillStyle = backcolor;
                            ctx.fillRect(0, 0, 250, 250);
                            draw(ctx, design_num ,save_create_canvas.width, save_create_canvas.height);
                            save_canvas(savecanvas_id);
                            alert('ダウンロードしました')
                        }
                    }
                    image_count = image_count + 1;
                }
            }
            design_count = design_count - 5;
        }

        draw_switch = 'end';
        draw_canvas();

        const create_ul_b = document.createElement('ul');
        let ul_id = 'lists';
        create_ul_b.className = 'ul_cc'
        create_ul_b.id = ul_id
        document.getElementById('base').appendChild(create_ul_b);

        document.getElementById('base').appendChild(create_ul_b);

        const backred = document.createElement('input');
        backred.onclick = function (e) {
            const color_back = document.getElementById('li_color');
            color_back.style.display = 'none';
            backred.style.display = 'none';
            const div_color = document.createElement('div');
            div_color.className = 'color_div_b'
            document.getElementById(ul_id).appendChild(div_color);
        }
    }
    const top_button = document.createElement('input');
    top_button.type = 'button';
    top_button.className = 'backbutton';
    top_button.value = 'トップに戻る';
    document.getElementById(ul_id).appendChild(top_button);
    top_button.onclick = function () {
        location.reload();
    }
}

//突然変異
function mutation() {
    let canvas_num = 1;
    for (let i = 1; i <= Generated_Design; i++) {
        for (let l = 0; l < Chromosome; l++) {
            const rand = Math.floor(Math.random() * mutation_probability);
            if (rand == 1) {
                console.log('キャンバス' + canvas_num + ': 突然変異発生！！');
                if (l == 0) {
                    console.log('突然変異_形');
                    const diff = Math.floor(Math.random() * Shapes) + 1;
                    create_design[i][l] = diff;
                } else if (l == 1 && l  == 2) {
                    console.log('突然変異_座標');
                    const diff = Math.floor(Math.random() * 40);
                    create_design[i][l] = diff;
                } else if (l == 3 && l == 4) {
                    console.log('突然変異_長さ');
                    const diff = Math.floor(Math.random() * 30) + 20;
                    create_design[i][l] = diff;
                } else if (l == 5) {
                    console.log('突然変異_軸円半径');
                    const diff = Math.floor(Math.random() * 70) + 10;
                    create_design[i][l] = diff;
                } else if (l == 6) {
                    console.log('突然変異_描画回数');
                    const diff = Math.floor(Math.random() * 20) + 5;
                    create_design[i][l] = diff;
                } else if (l == 7) {
                    console.log('突然変異_塗りつぶし有無');
                    const diff = Math.floor(Math.random() * 4);
                    create_design[i][l] = diff;
                } else if (l >= 8 && l <= 10) {
                    console.log('突然変異_色情報');
                    const diff = Math.floor(Math.random() * 255);
                    create_design[i][l] = diff;
                } else if (l == 11) {
                    console.log('突然変異_透明度');
                    const diff =  (Math.floor(Math.random()* 4) + 1) / 10;
                    create_design[i][l] = diff;
                }
            }
        }
        canvas_num++;
    }
    console.log('---------------------------');
}
