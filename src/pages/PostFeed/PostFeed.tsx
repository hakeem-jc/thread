import Post from "@/components/Post/Post";

let static_posts = [
    {
      username: 'aoc',
      avatar: 'data:image/jpeg;base64,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',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit mi nec velit accumsan, at dapibus massa laoreet. Aenean id est magna. Nullam lobortis aliquam lobortis. Aliquam vulputate fermentum felis, non fringilla lectus laoreet sed. Proin eu tristique nibh, vitae iaculis enim. Suspendisse aliquet nisl ac nibh rhoncus, in tristique sem hendrerit. Sed gravida, tortor vel blandit consequat, lectus mi finibus nulla, vel finibus purus dui eu est. Mauris condimentum erat vel sem pellentesque consectetur. Sed cursus dictum feugiat. Aenean ut sem eget leo vulputate hendrerit ac in turpis. Donec dignissim enim sed tellus ullamcorper, et ullamcorper ipsum aliquam. Suspendisse potenti. Integer malesuada odio nec mi dapibus tristique. In aliquam enim eget nisi lacinia, vel euismod sapien tristique.',
      time_posted: '29m'
    },
    {
      username: 'aoc',
      avatar: 'data:image/jpeg;base64,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',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit mi nec velit accumsan, at dapibus massa laoreet. Aenean id est magna. Nullam lobortis aliquam lobortis. Aliquam vulputate fermentum felis, non fringilla lectus laoreet sed. Proin eu tristique nibh, vitae iaculis enim. Suspendisse aliquet nisl ac nibh rhoncus, in tristique sem hendrerit. Sed gravida, tortor vel blandit consequat, lectus mi finibus nulla, vel finibus purus dui eu est. Mauris condimentum erat vel sem pellentesque consectetur. Sed cursus dictum feugiat. Aenean ut sem eget leo vulputate hendrerit ac in turpis. Donec dignissim enim sed tellus ullamcorper, et ullamcorper ipsum aliquam. Suspendisse potenti. Integer malesuada odio nec mi dapibus tristique. In aliquam enim eget nisi lacinia, vel euismod sapien tristique.',
      time_posted: '29m'
    },
    {
      username: 'aoc',
      avatar: 'data:image/jpeg;base64,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',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit mi nec velit accumsan, at dapibus massa laoreet. Aenean id est magna. Nullam lobortis aliquam lobortis. Aliquam vulputate fermentum felis, non fringilla lectus laoreet sed. Proin eu tristique nibh, vitae iaculis enim. Suspendisse aliquet nisl ac nibh rhoncus, in tristique sem hendrerit. Sed gravida, tortor vel blandit consequat, lectus mi finibus nulla, vel finibus purus dui eu est. Mauris condimentum erat vel sem pellentesque consectetur. Sed cursus dictum feugiat. Aenean ut sem eget leo vulputate hendrerit ac in turpis. Donec dignissim enim sed tellus ullamcorper, et ullamcorper ipsum aliquam. Suspendisse potenti. Integer malesuada odio nec mi dapibus tristique. In aliquam enim eget nisi lacinia, vel euismod sapien tristique.',
      time_posted: '29m'
    }
  ];

const NewPost = () => {
    return (
      <>
        {static_posts.map((post, i) => {
          return <Post key={post.username + i}{...post}/>
        })}
      </>
    )
}

export default NewPost;