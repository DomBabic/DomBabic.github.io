var position_white = "up";
var position_black = "up";
var i = 0, j = 1;
var flag = 0;

var mb = 0, sb = 0, hb = 0;
var mw = 0, sw = 0, hw = 0;

var d_black = new Date();
var d_white = new Date();

document.getElementById("turn_number").innerHTML = j;
document.getElementById("time_white").innerHTML = "0:0:0";
document.getElementById("time_black").innerHTML = "0:0:0";

var uhw = 0, uhb = 0, umw = 0, umb = 0;

function update_white()
{
    i = i + 1;
    document.getElementById("button_black").style.WebkitAnimation = "button_update 1s forwards";
    document.getElementById("button_white").disabled = false;
    document.getElementById("button_black").disabled = true;
    position_black = "down";
    sb = sb - turn_bonus.value;
    if(position_white === "down")
    {   
        document.getElementById("button_white").style.WebkitAnimation = "button_update_reverse 1s forwards";
        position_white = "up";
    }
    if(i % 2 == 0)
    {
        j = j + 1;
        document.getElementById("turn_number").innerHTML = j;
    }
}

function update_black()
{
    i = i + 1;
    document.getElementById("button_white").style.WebkitAnimation = "button_update 1s forwards";
    document.getElementById("button_white").disabled = true;
    document.getElementById("button_black").disabled = false;
    position_white = "down";
    sw = sw - turn_bonus.value;
    if(position_black === "down")
    {   
        document.getElementById("button_black").style.WebkitAnimation = "button_update_reverse 1s forwards";
        position_black = "up";
    }
    if(i % 2 == 0)
    {
        j = j + 1;
        document.getElementById("turn_number").innerHTML = j;
    }
}

function b_time()
{
    if(sb === 60)
    {   
        sb = 0;
        if(mb === (umb - 1))
        {
            hb += 1;
            mb = 0;
            umb = 60;
        }
        else
        {
            mb += 1;
        }
    }
    else {  sb = sb + 1;  }
    d_black.setHours(uhb - hb);
    d_black.setMinutes(umb - 1 - mb);
    d_black.setSeconds(60 - sb);
    document.getElementById("time_black").innerHTML = d_black.getHours() + ":" + d_black.getMinutes() + ":" + d_black.getSeconds();
}

function w_time()
{
    if(sw === 60)
    {   
        sw = 0;
        if(mw === (umw - 1))
        {
            hw += 1;
            mw = 0;
            umw = 60;
        }
        else
        {   
            mw += 1;
        }
    }
    else {  sw = sw + 1;    }
    d_white.setHours(uhw - hw);
    d_white.setMinutes(umw - 1 - mw);
    d_white.setSeconds(60 - sw);
    document.getElementById("time_white").innerHTML = d_white.getHours() + ":" + d_white.getMinutes() + ":" + d_white.getSeconds();
}

function update()
{
    if(position_white === "up" && position_black === "up")
    {
        w_time();
    }
    else if(position_white === "down" && position_black === "up")
    {
        b_time();
    }
    else if(position_white === "up" && position_black === "down")
    {
        w_time();
    }
}

function set_time()
{
    if(position_white === "down" || position_black === "down")
    {
        position_white = "up";
        position_black = "up";
        document.getElementById("button_white").disabled = false;
        document.getElementById("button_black").disabled = false;
        document.getElementById("button_white").style.WebkitAnimation = "button_update_reverse 1s forwards";
        document.getElementById("button_black").style.WebkitAnimation = "button_update_reverse 1s forwards";
    }
    if(game_time.value >= 60 && game_time.value < 120)
    {
        uhw = 1; uhb = 1;
        umw = game_time.value - 60; umb = game_time.value - 60;
        document.getElementById("time_black").innerHTML = uhw + ":" + umw + ":0";
        document.getElementById("time_white").innerHTML = uhw + ":" + umw + ":0";
    }
    else if(game_time.value < 60)
    {
        uhw = 0; uhb = 0;
        umw = game_time.value; umb = game_time.value;
        document.getElementById("time_black").innerHTML = uhw + ":" + umw + ":0";
        document.getElementById("time_white").innerHTML = uhw + ":" + umw + ":0";
    }
    j = 1;
    document.getElementById("turn_number").innerHTML = j;
    flag = 1;
}

setInterval(function check() {
    if(flag === 1)
    {   update(); }
}, 1000);
