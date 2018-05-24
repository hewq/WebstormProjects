/**
 * Created by hewq on 2016/12/9.
 */
$(function(){
    var x, y,o;
    var ItemsArr = ["1,青龙","1,白虎","1,朱雀","1,玄武","1,麒麟","1,凤凰","1,黄龙","1,玄龟","1,梼杌","1,穷奇","1,饕餮","2,混沌","2,应龙","2,鲲鹏","2,烛龙","2,陆吾","2,白泽","2,黄鸟","2,獬豸","1,貔貅","1,角端","2,勾陈","3,马交","3,金蟾","3,当康","3,乘黄","3,呲铁","3,腓腓","2,青牛","1,火鼠","1,甪端","2,赤鱬","3,夔牛","4,青鸾","4,青龙","4,天狗","4,狸力","3,翻羽","2,九婴","1,祸斗","1,傲因","2,诸怀","3,长右","4,慠曳","5,鸣蛇","5,玄蜂","4,土蝼","3,蛊雕","2,钩蛇","1,化蛇","1,凿齿","2,修蛇","3,夫诸","4,猰貐","5,商羊","5,毕方","4,朱厌","3,鬼车","2,讹兽","1,肥遗","1,并封","2,钦原","3,飞廉","4,诸犍","5,溪边","5,矔疏","4,当扈","3,螣蛇","2,蛟龙","1,虬龙","1,赑屃","2,螭吻","3,蒲牢","4,狴犴","4,蚣蝮","4,睚眦","4,狻猊","3,椒图","2,囚牛","1,举父","1,帝江","2,狸力","3,精卫","3,白矖","3,犀渠","3,雍和","3,狍茑","3,华方","2,英招","1,玄蜂","1,青牛","2,山臊","2,商羊","2,讹兽","2,民鸟","2,类马","2,鬼车","2,奚鼠","2,傒囊","1,风狸","1,魍魉","1,类狗","1,率然","1,云阳","1,谏珂","1,鬼母","1,人鱼","1,影木","1,延维","1,角虎"];
    function aa(){
        $("svg text[class='svg-text']").each(function(){
            x = $(this).attr("x");
            y = $(this).attr("y");
            o = $(this).attr("opacity");
            x = +x + (Math.random() + 0.5);
            y = +y + (Math.random() + 0.5);
            if( +o < 1){
                o = +o + (Math.random()/20);
            }

            if( +x > 400 || +y > 480){
                $(this).attr("class","svg-texta")
            }
            $(this).attr("x",x);
            $(this).attr("opacity",o);
        });
        $("svg text[class='svg-texta']").each(function(){
            x = $(this).attr("x");
            y = $(this).attr("y");
            o = $(this).attr("opacity");
            x = +x - (Math.random() + 0.5);
            y = +y - (Math.random() + 0.5);
            if( +o > 0.2){
                o = +o - (Math.random()/20);
            }
            if( +o < 0.2){
                o = +o + (Math.random()/20);
            }
            if( +x < 50 || +y < 100){
                $(this).attr("class","svg-text")
            }
            $(this).attr("x",x);
            $(this).attr("opacity",o);
        });

    }
    function addItems(){
        for( var i = 0; i < ItemsArr.length; i++){
            var arr = ItemsArr[i].split(",");
            $(".rect").append("<a href='#' class='item" + arr[0] + "'>" + arr[1] + "</a>");
        }
        $(".Items").css("opacity",0.2);
    }
    addItems();
});