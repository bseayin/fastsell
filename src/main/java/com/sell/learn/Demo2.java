package com.sell.learn;

public class Demo2 extends Demo1 {
    int a1=3;
    static int a2=9;
    static{
        System.out.println("子类的静态代码块");
    }
    /**
     * 每个类都有一个无参的构造方法
     */
    public Demo2(){
        System.out.println("这个是子类的构造方法");
    }

    public void t2(){
        System.out.println("这个是子类的t2方法");
    }

}
