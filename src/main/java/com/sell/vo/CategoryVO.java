package com.sell.vo;

import lombok.Data;

import java.util.List;
@Data
public class CategoryVO {

    private  String name;
    private  String type;
    private List<FoodVO> foods;

    public boolean equals(Object anObject) {
        if (this == anObject) {
            return true;
        }
        if (anObject instanceof CategoryVO) {
                if(((CategoryVO) anObject).getType().equals(this.getType())){
                    return true;
                }else{
                    return false;
                }

            }

        return false;
    }

}
