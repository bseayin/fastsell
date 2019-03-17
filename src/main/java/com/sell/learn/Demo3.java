package com.sell.learn;

public class Demo3 {
    public static void main(String[] args) {
        Demo2 d2=new Demo2();
//        Singleton singleton=new Singleton();
        //单列模式，只能通过这个静态方法获取对象，不能直接new
        Singleton singleton=Singleton.getInstance();
        d2.t2();
    }
}
