import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import styles from './SectionBlogLinks.module.scss'
import {blogPostsList} from './api/index'
import SliderSimple from '../../components/sliderSimple/SliderSimple'
import SliderItem from '../../modules/sectionBlogLinks/components/sliderItem/SliderItem';


const SectionBlogLinks = () => {
    return (
        <>
            <div className={styles.blogPosts}>
                <div className={classNames(styles.blogPostsItems, styles.blogPostsItemsFirst)}>
                    <div className={classNames(styles.blogPostsItem, styles.blogPostsItemFirst)}>
                        <span className={styles.blogPostsDesc}>Extreme Mountain bike driving</span>
                        <Link to='' className={styles.blogPostsLink}>Read more</Link>
                    </div>
                </div>

                <div className={classNames(styles.blogPostsItemsSec, styles.blogPostsItems)}>
                    <div className={classNames(styles.blogPostsItem, styles.blogPostsItemSec)}>
                        <span className={styles.blogPostsDesc}>Bicycles for professionals</span>
                        <Link to='' className={styles.blogPostsLink}>Read more</Link>
                    </div>
                </div>

                <div className={classNames(styles.blogPostsItemsThird, styles.blogPostsItems)}>
                    <div className={classNames(styles.blogPostsItem, styles.blogPostsItemThird)}>
                        <span className={styles.blogPostsDesc}>A long road bike ride</span>
                        <Link to='' className={styles.blogPostsLink}>Read more</Link>
                    </div>
                </div>
            </div>
            <div className={styles.blogPostsSlider}>
                <SliderSimple itemsList={blogPostsList} SliderItemComponent={SliderItem}/>
            </div>
        </>

    )
}

export default SectionBlogLinks
