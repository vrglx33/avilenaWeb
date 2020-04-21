import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from "@reach/router";
import ImageGrid from "../../components/imageGrid/ImageGrid";
import {queryGql} from "../../core/graphQL/graphQL.service";

const ProductDetail = (props: RouteComponentProps) => {
    const [productTypes, setProductTypes] = useState([]);
    console.log(props);
    useEffect(() => {
        const getProductTypeProducts = async () => {
            // @ts-ignore
            const data = await queryGql(`getCategoryProducts(id:"${props.id}")
                                          {
                                            id
                                            name
                                            fileName
                                            size
                                          }`);
            setProductTypes(data.data.getCategoryProducts.map(() => { return {

            }}))
        };
        getProductTypeProducts()
    },[]);

    return <ImageGrid items={productTypes} />
};
export default ProductDetail;
