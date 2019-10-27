import React from "react"
import Layout from "../components/Layout"
import { rhythm } from "../utils/typography"

export default () => {
  return (
    <Layout>
      <div>
        <h3>Mobile</h3>
        <ul>
          <li>
            <a href="tel:+359887889434">(+359) 887-889-434</a>
          </li>
          <li>
            <a href="tel:+359888773347">(+359) 888-773-347</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Email</h3>
        <a href="mailto:contact@imi.boutique" target="_blank">
          contact@imi.boutique
        </a>
      </div>
      <div>
        <h3>
          <a href="https://www.facebook.com/IMIteteven/" target="_blank">
            Facebook
          </a>
        </h3>
      </div>
      <div>
        <h3>Summer Season Address</h3>
        <p>
          During the summer season (May-Sep), you can find us in our retail shop
          in the{" "}
          <a href="https://goo.gl/maps/bhXTvJnN63v" target="_blank">
            Old Town of Nessebar, at 5 Ribarska Str
          </a>
          .
        </p>
      </div>
      <div>
        <h3>HQ Address</h3>
        <p>
          The main boutique along with our factory is located in Teteven - a
          small town in north central Bulgaria -
          <a href="https://goo.gl/maps/MB47DGXCYVD2" target="_blank">
            view map
          </a>
          .
        </p>
      </div>
    </Layout>
  )
}
