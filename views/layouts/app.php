<?php
use yii\helpers\Html;
use app\assets\AppAsset;

/* @var $this \yii\web\View */
/* @var $content string */

AppAsset::register($this);
?>
<!DOCTYPE html>
<html>
<head>
<title>Percussion</title>
<meta charset="utf-8">
<meta name="document-state" content="dynamic">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Percun</title>

<link rel="stylesheet" type="text/css" href="/css/app.css">
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
<script data-main="/js/init.js" src="/js/lib/require.js"></script>

</head>

<body>
<div class="top-menu">
    <ul class="menu-wrapper">
        <li><a href="#">Пункт</a></li>
        <li><a href="#">Пункт</a></li>
        <li><a href="#">Пункт</a></li>
    </ul>
</div>
<div class="wrapper">
    <div class="content">
        <div class="col left-col">
            <!-- sound_list -->
        </div>
        <div class="main">
            <div class="work-menu">
                <!-- sound list -->
            </div>
            <div class="work-tabs-wrapper">
                <!-- work tabs -->

            </div>
        </div>
    </div>
</div>
</body>
</html>

