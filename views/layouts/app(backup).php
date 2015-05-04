<?php
use yii\helpers\Html;
use app\assets\AppAsset;

/* @var $this \yii\web\View */
/* @var $content string */

AppAsset::register($this);
?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Percun</title>
    <script src="/js/jquery-2.1.3.min.js"></script>
    <script src="/js/lodash.js"></script>
    <script src="/js/backbone.js"></script>
    <script src="/js/howler.js"></script>
    <link rel="stylesheet" type="text/css" href="/css/site.css">
    <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
</head>
<body>
<body data-spy="scroll" data-target="#topnav">

<div class="navbar navbar-inverse navbar-fixed-top" id="topnav">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#home">Главная</a></li>
                <li><a href="#services">Участники</a></li>
                <li><a href="#features">Настройки</a></li>
                <li><a href="#pricing">МуйняМуйней</a></li>

            </ul>

        </div>
    </div>
</div>

<div class="jumbotron" id="home">
    <div class="container" id="services">
        <div class="left_bar">

            <div class="instrument_list">
                <ul>
                    <li id="djembe">Джембе</li>
                    <li id="agogo">Агого</li>
                    <li id="metronome">Метроном</li>
                </ul>
            </div>
        </div>
        <div class="top_bar">
            <nav>
                <ul>
                    <li><a href="#" id="open" class="change_editor" onclick='edit("open")'><span>Открытый звук</span></a></li>
                    <li><a href="#" id="middle" class="change_editor" onclick='edit("middle")'><span>Средний звук</span></a></li>
                    <li><a href="#" id="close" class="change_editor" onclick ='edit("close")'><span>Закрытый звук</span></a></li>
                    <li><a href="#" onclick="play()"><span>Play</span></a></li>
                    <li><a href="#" onclick="stop()"><span>Stop</span></a></li>
                    <li><input type="text" id="bpm" value="90"></li>
                </ul>
            </nav>
        </div>
        <div class="sound_generator">
            <div class="sound_track" id="metronome_track">
                <div class="instrumental_name">Metronome</div>
                <div class="track">
                    <div class="four">
                        <div class="point"><span>O</span></div>
                        <div class="point"><span>O</span></div>
                        <div class="point"><span>O</span></div>
                        <div class="point"><span>O</span></div>
                        <div class="vertical-line" style="left:0px;"></div>
                    </div>

                    <div class="four"></div>
                </div>
            </div>
            <div class="sound_track" id="djembe_track">
                <div class="instrumental_name">Djembe</div>
                <div class="track">
                    <div class="four">
                        <div class="vertical-line" style="left:0px;"></div>
                    </div>
                    <div class="four"></div>
                </div>
            </div>
            <div class="sound_track" id="agogo_track">
                <div class="instrumental_name">Agogo</div>
                <div class="track">
                    <div class="four">
                        <div class="vertical-line" style="left:0px;"></div>
                    </div>
                    <div class="four"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>

    var editor = "open";
    var soundList = {
        "djembe-hi" : new Howl({urls: ['/sound/54016__domingus__djembe-hi-3.wav']}),
        "djembe-lo" : new Howl({urls: ['/sound/54019__domingus__djembe-lo-3.wav']}),
        "djembe-mid" : new Howl({urls: ['/sound/54021__domingus__djembe-mid-1.wav']}),
        "agogo-hi" : new Howl({urls: ['/sound/agogo-hi.wav']}),
        "agogo-lo" : new Howl({urls: ['/sound/agogo-lo.wav']}),
        "metronome" : new Howl({urls: ['/sound/250551__druminfected__metronomeup.wav']})
    };
    flag = false;
    function play(){
        if (!flag) {
            flag = true;
            var size = $($(".four")[0]).width();
            var bpm = $("#bpm").val();
            var speed = (size / 4) * ((bpm / 60) / 100);
            var linePosition = 0;
            $line = $(".vertical-line");
            $childrens = $(".four").find("span");
            var soundElements = [];

            var mainOffset = $('.four').offset().left;
            _.each($childrens, function (val, key) {
                soundElements.push({
                    "x": $(val).offset().left - mainOffset,
                    "value": $(val).html()
                });

            });

            var start = Date.now();
            var time = 0;
            var instance = function () {
                linePosition = (linePosition + speed) % size;
                $line.css({"left": linePosition});
                _.each(soundElements, function (val, key) {
                    if (val.x >= linePosition - speed && val.x < linePosition) {
                        switch (val.value) {
                            case "O":
                            {
                                soundList['metronome'].play();
                                break;
                            }
                            case "G":
                            {
                                soundList['djembe-lo'].play();
                                break;
                            }
                            case "S":
                            {
                                soundList['djembe-mid'].play();
                                break;
                            }
                            case "X":
                            {
                                soundList['djembe-hi'].play();
                                break;
                            }
                            case "I":
                            {
                                soundList['agogo-lo'].play();
                                break;
                            }
                            case "K":
                            {
                                soundList['agogo-hi'].play();
                                break;
                            }
                        }
                    }
                });
                time += 10;
                var diff = (Date.now() - start) - time;
                if (flag) {
                    setTimeout(instance, (10 - diff));
                }
            };
            setTimeout(instance, 10);
        }
    }

    function stop(){
        $line = $(".vertical-line");
        setTimeout(function(){
            $line.css({"left":0});
        },10);

        flag = false;
    }

    function edit(str){
        editor = str;
    }

    $('.four').on('click',function(e){
        var symbol = "<";
        switch (editor){
            case "open":
            {
                if (instrumental == "djembe") {
                    symbol = "G";
                } else  if (instrumental == "metronome") {
                    symbol = "O";
                } else {
                    symbol = "I";
                }
                break;
            }
            case "middle":{
                symbol = "S";
                break;
            }
            case "close":{
                if (instrumental == "djembe") {
                    symbol = "X";
                } else {
                    symbol = "K";
                }
                break;
            }
        }
        if ($(this).parent().parent().attr("id") == (instrumental+"_track")) {
            $(this).append("<div class=\"sound\" style=\"left:" + (e.screenX - $(this).offset().left - 4) + "px\"><span>" + symbol + "</span></div>")
        }
    });
    instrumental = "djembe";
    $('.instrument_list').find("li").on("click",function(e){
        instrumental = e.currentTarget.id;
        if (instrumental == "agogo"){
            $("#middle").hide();
            $("#close").show();
            $("#open").show();
        } else if (instrumental == "metronome") {
            $("#middle").hide();
            $("#close").hide();
            $("#open").show();
        } else {
            $("#middle").show();
            $("#close").show();
            $("#open").show();
        }
    });

    $(".four").on("contextmenu","span", function(event) {
        event.preventDefault();
        console.log(this);
        if($(this).parent().hasClass("point")){
            $(this).parent().remove(".point")
        } else {
            $(this).parent().remove(".sound");
        }


    });
    var conn = new WebSocket('ws://localhost:8085');
    conn.onopen = function(e) {
        console.log("Connection established!");
    };
    conn.onmessage = function(e) {
        console.log(e.data);
    };
    conn.onerror = function(){
        console.log("error");
    }
    conn.onclose = function(){
        console.log("close");
    }

</script>
</body>
</html>
