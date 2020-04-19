import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from "@reach/router";
import ImageGrid from "../../components/imageGrid/ImageGrid";
import {queryGql} from "../../core/graphQL/graphQL.service";

const Products = (props: RouteComponentProps) => {
    const [productTypes, setProductTypes] = useState([]);
    useEffect(() => {
        const getProductTypes = async () => {
            const data = await queryGql(`getProductType{
                        id
                        name
                        imageLink
                      }`);
            setProductTypes(data.data.getProductType)
        };
        getProductTypes()
    },[]);

    return <ImageGrid items={productTypes} />
};
export default Products;
