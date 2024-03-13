import React from 'react'
import styles from './Post.module.scss'
import PagesTitle from '../../components/pagesTitle/PagesTitle'
import classNames from 'classnames'

import titleBgImage from '../../assets/img/titlesBg/about.png'
import bannerImg from '../../assets/img/blog/singlePostPage/post-banner-img.png'
import contentImg from '../../assets/img/blog/singlePostPage/post-img-1.png'
import contentImgSec from '../../assets/img/blog/singlePostPage/post-img-2.png'

import telegramIcon from '../../assets/img/blog/singlePostPage/telegram.png'
import { fetchBlogPost } from '../../services/apiService'
const blogPostList = await fetchBlogPost()

const html = blogPostList[0].content

const Post = () => {
  return (
    <div>
      <PagesTitle img={titleBgImage} pageName='Pinarello Dogma F carbon road bike!' />
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      <div className={classNames('container', styles.banner)}>
        <h2 className={styles.bannerSubtitle}>Pinarello Dogma F develops the next generation carbon road bike!</h2>
        <p className={styles.bannerDesc}>Pinarello's new Dogma F is a lighter, more responsive and aerodynamic version of their latest F12 road racing motorcycle. And while the overall asymmetrical aerodynamic profile remains definitely familiar with the decades-old Pinarello Dogma curves, the biggest surprise may be that it's not just about the disc brake. While many bicycle manufacturers only use disc brakes, Pinarello professionals continue to win Grand Tours on bicycles with rim brakes, so Dogma F continues to evolve with both rim and disc brakes.…</p>
        <img src={bannerImg} alt="" />

        <h2 className={styles.bannerSubtitle}>2022 Pinarello Dogma F Curved Aerodynamic Carbon Fiber Road Racing Bike</h2>
        <div className={styles.bannerItem}>
          <img src={contentImg} alt="" />
          <p>The shape of the new Pinarello Dogma F road aerodynamic bike does not differ much from the previous Dogma, except for a flatter top and slightly more lowered seat feathers. But interestingly, the license plate has been changed from the most recent Dogma F12 to this new seventh-generation Dogma F, which, according to Pinarello, simplifies the connection of motorcycles with its long past (since 2000) and its "irrefutable" superiority stretching into the future.It's also a hint at the versatility of the new motorcycle. While previous generations had versions for climbers or sprinters, this new Pinarello Dogma F is designed to be a balanced versatile racer.</p>
        </div>

        <h2 className={styles.bannerSubtitle}>Technical Details</h2>
        <div className={styles.bannerItemReverse}>
          <img src={contentImgSec} alt="" />
          <p>The new Dogma F is available in 11 butt sizes, 16 handlebar/cockpit sizes and 2 seatpost offsets to fit any rider. Three standard color schemes are available: Plutonium Flash with a transition from black to gray, Eruption Red with a transition from black to red and completely black on black.Interestingly, the only complete bikes we've seen with Shimano groupsets are Grenadier team edition bikes, which only have rim brakes and will make their debut in the Tour de France races next weekend. We'll take this as another hint that new Dura-Ace groupsets are coming soon.… </p>
        </div>
      </div>

      <div className={classNames('container', styles.bannerShare)}>
        <span>To share:</span>
        <a className={styles.socialLink} href="https://t.me/share/url?url=https://localhost:3000/post&text=Проверьте эту статью!" target="_blank">
          <img className={styles.socialIcon} src={telegramIcon} alt="" />
        </a>
        <a className={styles.socialLink} href="https://t.me/share/url?url=https://localhost:3000/post&text=Проверьте эту статью!" target="_blank">
          <img className={styles.socialIcon} src={telegramIcon} alt="" />
        </a>
        <a className={styles.socialLink} href="https://t.me/share/url?url=https://localhost:3000/post&text=Проверьте эту статью!" target="_blank">
          <img className={styles.socialIcon} src={telegramIcon} alt="" />
        </a>
        <a className={styles.socialLink} href="https://t.me/share/url?url=https://localhost:3000/post&text=Проверьте эту статью!" target="_blank">
          <img className={styles.socialIcon} src={telegramIcon} alt="" />
        </a>
      </div>

    </div>
  )
}

export default Post
