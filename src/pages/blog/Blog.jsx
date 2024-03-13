import React from 'react'
import styles from './Blog.module.scss'
import titleBgImage from '../../assets/img/titlesBg/about.png'
import PagesTitle from '../../components/pagesTitle/PagesTitle'
import PostCard from './components/postCard/PostCard'
import { fetchBlogPost, fetchBlogPosts } from '../../services/apiService'
import classNames from 'classnames'
const blogPostsList = await fetchBlogPosts()

const blogPostList = await fetchBlogPost()

const Blog = () => {
    return (
        <>
            <PagesTitle img={titleBgImage} pageName='Blog' />
            <div className={classNames(styles.blog, 'container')}>
                <div className={styles.blogPosts}>
                    {
                        blogPostsList.map((post, index) => (
                            <PostCard key={index} post={post} />
                        ))
                    }
                </div>
                <button className={styles.blogBtn} type='button'>Show more...</button>
            </div>
        </>

    )
}

export default Blog
