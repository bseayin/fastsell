package com.sell.vo;

import lombok.Data;

import java.util.List;

@Data
public class ProductListVO<T> {
    private  String code;
    private  String msg;
    private T data;
}
