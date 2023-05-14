import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import '@/styles/index.css'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

export default function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef()
  return (
    <>
      <Header title={pageProps.title} />
      <Layout ref={ref}>
        <Component {...pageProps} />
        {/* The canvas can either be in front of the dom or behind. If it is in front it can overlay contents.
         * Setting the event source to a shared parent allows both the dom and the canvas to receive events.
         * Since the event source is now shared, the canvas would block events, we prevent that with pointerEvents: none. */}
        {Component?.canvas && (
          <Scene
            className='pointer-events-none'
            eventSource={ref}
            eventPrefix='client'
            camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
            {Component.canvas(pageProps)}
          </Scene>
        )}
      </Layout>
    </>
  )
}
