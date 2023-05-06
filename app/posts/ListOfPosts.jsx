import LikeButton from './LikeButton'
import Link from 'next/link'

const fetchPosts = () => {
    // fetch data from https://jsonplaceholder.typicode.com/posts
    console.log('fetching posts...')
    return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
        .then((response) => response.json())
}

// const fetchPosts = () => {
//     // fetch data from https://jsonplaceholder.typicode.com/posts
//     console.log('fetching posts...')
//     return fetch('https://jsonplaceholder.typicode.com/posts', {
//         next: {
//             revalidate: 1,
//         }
//     })
//         .then((response) => response.json())
// }

export default async function ListOfPost({ params }) {
    const posts = await fetchPosts()

    const handleClick = () => {
        console.log('Me gusta')
    }

    return posts.slice(0, 5).map((post) => (
        <article key={post.id}>
            <Link href={`/posts/[id]`} as={`/posts/${post.id}`}
                style={{
                    textDecoration: 'none',
                    color: 'inherit',
                }}>
                <h2 style={{ color: '#09f' }}>{post.title}</h2>
                <p>{post.body}</p>
            </Link>
            <LikeButton id={post.id} />
        </article>
    ))
}