import { FC } from "react";
import styles from './Post.module.scss';
import verified from '@/assets/verified.svg';
import Image from 'next/image';

interface PostInterface {
    username: string,
    avatar: string,
    message: string,
    time_posted: string,
}

const Post:FC<PostInterface> = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.image_container}>
                <Image src={props.avatar} className={styles.user_image} alt='User Image' width={200} height={200}/>
                <div className={styles.divider}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <p className={styles.username}>{props.username} <span><Image src={verified} className={styles.verified} alt='Verified'/></span></p>
                    <span className={styles.header_data}>
                        <p className={styles.time_posted}>{props.time_posted}</p>
                        <p className={styles.menu}>...</p>
                    </span>
                </div>
                <p className={styles.text}>{props.message}</p>

                {/* TODO - Add nested text post */}
                {/* TODO -  Add image in post */}
                {/* TODO - Add Icons - Like Comment Repost Send */}
                {/* TODO - Add replies and likes*/}
                {/* TODO - Add images for likes and replies */}
            </div>
        </div>
    )
}

export default Post;