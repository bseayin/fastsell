package com.sell.learn;

/**
 * 单列模式
 * 永远最多只有一个对象
 */
public class Singleton {
    //1.用private修饰构造方法，保证只有本类里面可以创建对象
    private Singleton(){}
    static Singleton singleton=null;
    public static Singleton getInstance(){
        if(singleton==null){
            singleton=new Singleton();
        }
        return singleton;
    }
}
