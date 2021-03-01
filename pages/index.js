import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='page-container'>
        <div className={styles.main}>
            <h1>Next Js News App</h1>
            <h3><a href={'/feed/1'}>See the feed</a></h3>
        </div>

    </div>
  )
}
