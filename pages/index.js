import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "../src/components/layout"
import Hero from "../src/components/hero"
import Projects from "../src/components/projects"
import About from "../src/components/about"
import Contact from "../src/components/contact"
import { getAboutPost } from '../lib/api'

export default function Illiac({ aboutPosts }) {
  const aboutPost = aboutPosts[0]
  return (
    <>
            <Layout>
        <Parallax pages={5}>
          <Hero offset={0} factor={1} />
          <Projects offset={1} factor={2} />
          <About offset={3} factor={1} aboutPost={aboutPost}/>
          <Contact offset={4} factor={1} />
        </Parallax>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const aboutPosts = (await getAboutPost(preview)) || []
  return {
    props: { aboutPosts },
  }
}