import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => 
        setPosts(data),
        setLoading(false)
      )
  }, [])

  return (
    <>
    {loading ? ( "Loading..." ) : ( <></> )}
    
    {posts.length}
    {
      posts.map(post => (
        <div className={styles.post} key={post._id}>
          <p>Title: {post.title}</p>
          <p>Content: {post.content}</p>
          <p>Date: {post.date}</p>
          <p>Feature: {post.feature}</p>
        </div>
      ))
    }
  </>
  )
}

