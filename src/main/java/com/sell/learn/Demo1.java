package com.sell.learn;

public class Demo1 {

     int a=3;
     static int b=5;

     static{
         System.out.println("父类的静态代码块");
     }

     public static void t1(){
         System.out.println("父类的静态方法t1");
     }

     public Demo1(){
         System.out.println("父类的构造方法");
     }

}
