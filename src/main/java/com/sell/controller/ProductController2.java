package com.sell.controller;

import com.sell.respository.ProductInfoRespository;
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
public class ProductController2 {
    @Resource
    ProductInfoRespository productInfoRespository;
    @RequestMapping("product/list")
    public Map getProductList(){
        List<ProductVO> productVOS= productInfoRespository.findProductVos();

        Map map=new HashMap();
        map.put("code",0);
        map.put("msg","成功");
        List ls=new ArrayList();
        for(ProductVO productVO:productVOS){
            Map map2=new HashMap();
            map2.put("name",productVO.getCategory_name());
            map2.put("type",productVO.getCategory_type());
            List ls2=new ArrayList();
            Map map3=new HashMap();
            map3.put("id",productVO.getProduct_id());
            map3.put("name",productVO.getProduct_name());
            map3.put("price",productVO.getProduct_price());
            map3.put("description",productVO.getProduct_description());
            map3.put("icon",productVO.getProduct_icon());
            ls2.add(map3);
            map2.put("foods",map3);
            ls.add(map2);
        }
        return map;
    }
}
