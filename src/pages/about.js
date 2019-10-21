import React from "react"
import Layout from "../components/Layout"
import { rhythm } from "../utils/typography"

export default () => {
  return (
    <Layout>
      <iframe
        title="IMI Presentational Video"
        style={{ marginTop: rhythm(2) }}
        width="660"
        height="415"
        src="https://www.youtube.com/embed/w84Tte7B8Ws"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Layout>
  )
}
