<?php
namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;
use app\models\User;

class AppController extends Controller{

    public $layout = "app";

    public function actionIndex() {
//        return "1123";
        return $this->render("index");
    }
}