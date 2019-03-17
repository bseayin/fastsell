package com.sell.controller;

import com.sell.respository.ProductInfoRespository;
import com.sell.vo.CategoryVO;
import com.sell.vo.FoodVO;
import com.sell.vo.ProductListVO;
import com.sell.vo.ProductVO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("buyer")
public class ProductController {
    @Resource
    ProductInfoRespository productInfoRespository;
    @RequestMapping("product/list")
    public ProductListVO getProductList(){
        List<ProductVO> productVOS= productInfoRespository.findProductVos();
        ProductListVO productListVO=new ProductListVO();
        productListVO.setCode("0");
        productListVO.setMsg("成功");
        List<CategoryVO> categoryVOS=new ArrayList<CategoryVO>();
        List<FoodVO> foodVOS=new ArrayList<FoodVO>();
        for(ProductVO productVO:productVOS){
            CategoryVO categoryVO=new CategoryVO();
            categoryVO.setName(productVO.getCategory_name());
            categoryVO.setType(productVO.getCategory_type());
            if(!categoryVOS.contains(categoryVO)){
                categoryVOS.add(categoryVO);
            }

            FoodVO foodVO=new FoodVO();
            foodVO.setDescription(productVO.getProduct_description());
            foodVO.setName(productVO.getProduct_name());
            foodVOS.add(foodVO);


        }
        return productListVO;
    }
}
