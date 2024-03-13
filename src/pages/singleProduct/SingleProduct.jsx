import React, { useContext, useEffect } from 'react';
import LinkTag from '../../UI/linkTag/LinkTag';
import SectionMain from './sectionMain/SectionMain';
import styles from './SingleProduct.module.scss';
import SectionSlider from './sectionSlider/SectionSlider';
import { productBySlug } from './helpers/productBySlug';
import { useParams } from 'react-router-dom';
import { ListproductsContext } from '../../context/index';

const SingleProduct = () => {

    const { slug } = useParams()
    const [product, setProduct] = useContext(ListproductsContext)
    const productCategoryName = product.categories && product.categories[0].name
    const productCategorySlug = product.categories && product.categories[0].slug

    const productAttributes = product && product.attributes;
    const findAttribute = (attrName) => {
        const pro = productAttributes && productAttributes.filter(attr => attr['name'] === attrName)
    }
    findAttribute('Brand')
    
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchedProduct = await productBySlug({ slug });
                setProduct(fetchedProduct);
            } catch (error) {
                console.error('Error fetching product: ', error);
            }
        };
        fetchProduct();
    }, [slug, setProduct]);

    
    return (
        <div className='container'>
            <div className={styles.productHeaderLinks}>
                <LinkTag to='/' text='Home / ' color='black' />
                <LinkTag to={`/${productCategorySlug}`} text={`${productCategoryName} / `} color='black' />
                <span className={styles.productName}>{product && product.name}</span>
            </div>
            <SectionMain />
            <SectionSlider />
        </div>
    );
};

export default SingleProduct;
