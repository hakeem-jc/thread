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
                    <span className={styles.header_data}>
                        <p className={styles.time_posted}>29m</p>
                        <p className={styles.menu}>...</p>
                    </span>
                </div>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit mi nec velit accumsan, at dapibus massa laoreet. Aenean id est magna. Nullam lobortis aliquam lobortis. Aliquam vulputate fermentum felis, non fringilla lectus laoreet sed. Proin eu tristique nibh, vitae iaculis enim. Suspendisse aliquet nisl ac nibh rhoncus, in tristique sem hendrerit. Sed gravida, tortor vel blandit consequat, lectus mi finibus nulla, vel finibus purus dui eu est. Mauris condimentum erat vel sem pellentesque consectetur. Sed cursus dictum feugiat. Aenean ut sem eget leo vulputate hendrerit ac in turpis. Donec dignissim enim sed tellus ullamcorper, et ullamcorper ipsum aliquam. Suspendisse potenti. Integer malesuada odio nec mi dapibus tristique. In aliquam enim eget nisi lacinia, vel euismod sapien tristique.
                </p>

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