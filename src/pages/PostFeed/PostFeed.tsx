import Post from "@/components/Post";

interface PostInterface {
  username: string,
  avatar: string,
  message: string,
  time_posted: string,
}

async function fetchPosts() {
  // TODO - Add error handling
  return fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`).then(res => res.json());
}

export default async function PostFeed() {
  const data = await fetchPosts();
  
    return (
      <>
        {data.posts.map((post:PostInterface, i:number) => {
          return <Post key={post.username + i}{...post}/>
        })}
      </>
    )
}

