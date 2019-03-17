package com.sell.respository;

import com.sell.entity.ProductInfo;
import com.sell.vo.ProductVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductInfoRespository extends JpaRepository<ProductInfo,String> {

    @Query(nativeQuery = true,value = "select c.category_name,c.category_type,i.product_icon,i.product_name,i.product_description,i.product_id,i.product_price from product_category as c\n" +
            " inner join product_info as i on (c.category_type=i.category_type)")
    public List findProductVos();
}
