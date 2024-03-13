import React from 'react'
import styles from './PostCard.module.scss'
import LinkTag from '../../../../UI/linkTag/LinkTag'

const PostCard = ({post}) => {
    console.log(post.linkImg)
    return (
        <div className={styles.card}>
            <img src={post.linkImg} alt="img" />
            <div className={styles.cardDesc}>
                <span>{post.date}</span>
                <span className={styles.postType}>#{post.postType}</span>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <LinkTag to='/' text='More...' />
            </div>
        </div>
    )
}

export default PostCard
