<?php

namespace app\assets;

use yii\web\AssetBundle;


class AppAsset extends AssetBundle {
    public $basePath = '@bower';
    public $css = [
    ];
    public $js = [
        'backbone/backbone.js',
        'jquery/dist/jquery.min.js',
        'underscore/underscore-min.js'
    ];
    public $depends = [
        'yii\bootstrap\BootstrapAsset',
    ];
}
