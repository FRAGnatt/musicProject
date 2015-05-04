<?php

namespace app\models;
use yii\db\ActiveRecord;

use yii\base\NotSupportedException;
use yii\helpers\Security;
use yii\web\IdentityInterface;


class User extends ActiveRecord implements IdentityInterface {
    private $username;
    private $password;
    private $email;
    private $auth_key;

    public static function tableName()
    {
        return 'user';
    }

    public static function findByUsername($username){
        $result = null;
        $user = User::findOne(['username'=>$username]);
        $user = new User($user->attributes);
        return $user;

    }

    function __construct( $arr = []){
        foreach($arr as $key => $value){
            $this->$key = $value;
        }
    }

    public function toArray(array $fields = [], array $expand = [], $recursive = true) {
    }

    protected function resolveFields(array $fields, array $expand) {
    }


    public static function findIdentity($id)
    {
        return static::findOne($id);
    }


    public static function findIdentityByAccessToken($token, $type = null)
    {
        // TODO: Implement findIdentityByAccessToken() method.
    }


    public function getId()
    {
        return $this->getPrimaryKey();
    }


    public function getAuthKey()
    {
        return $this->auth_key;
    }


    public function validateAuthKey($authKey)
    {
        return $this->getAuthKey() === $authKey;
    }

    public function validatePassword($password){
        return $this->password == $password;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    /**
     * @return mixed
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param mixed $email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }


    public function getUsername(){
        return $this->username;
    }

    public function setUsername($username){
        $this->username = $username;
    }

}
