import { FC } from "react";
import styles from './Post.module.scss';
import avatar from '@/assets/aoc.jpeg';
import verified from '@/assets/verified.svg';
import Image from 'next/image';

const Post:FC = () => {
    return (
        <div className={styles.post}>
            <div className={styles.image_container}>
                <Image src={avatar} className={styles.user_image} alt='User Image'/>
                <div className={styles.divider}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <p className={styles.username}>aoc <span><Image src={verified} className={styles.verified} alt='Verified'/></span></p>
                    <p className={styles.time_posted}>29m</p>
                    <p className={styles.menu}>...</p>
                </div>
                <p className={styles.text}>If you're at home and don't have bar equipment but want to impress:
                
                1. Make Palomas a staple!
                
                2. Lay out a G&T bar
                
                </p>
            </div>
        </div>
    )
}

export default Post;