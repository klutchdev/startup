import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { IconContext } from "react-icons"
import { MdDone } from "react-icons/md"

import "../components/global.css"

export default () => (
  <>
    <Layout>
      <Banner />
      <Packages
        title="CardPointe"
        para="CardPointe is everything a small to midsize needs to simply and securely integrate, accept and manage payments."
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package
            title="Integrations"
            description="Easily add secure payment acceptance capabilities into any application"
          >
            <ul>
              <li>
                <u>ISV Integrations</u>
              </li>
              <li>
                <MdDone />
                Partnership
              </li>
              <li>
                <u>Developer Tools</u>
              </li>
              <li>
                <MdDone />
                APIs
              </li>
              <li>
                <MdDone />
                Support
              </li>
              <li>
                <u>Enterprise Solutions</u>
              </li>
              <li>
                <MdDone />
                Oracle
              </li>
              <li>
                <MdDone />
                SAP
              </li>
            </ul>
          </Package>

          <Package
            title="Security"
            description="Protect transactions and reduce PCI scope with the most effective security solutions in the industry"
            // active={true}
          >
            <ul>
              <li>
                <MdDone />
                Tokenization
              </li>
              <li>
                <MdDone />
                P2PE
              </li>
              <li>
                <MdDone />
                PCI Compliance
              </li>
            </ul>
          </Package>

          <Package
            title="Reporting"
            description="Everything a business needs to view and manage transactions."
          >
            <ul>
              <li>
                <MdDone />
                Full Transaction Lifecycle Reporting
              </li>
              <li>
                <MdDone />
                Mobile Optimization
              </li>
              <li>
                <MdDone />
                Multiple Merchant Locations
              </li>
              <li>
                <MdDone />
                Automatic Reconciliation
              </li>
              <li>
                <MdDone />
                User Permission Management
              </li>
            </ul>
          </Package>
        </IconContext.Provider>
      </Packages>

      <TextBlock
        id="about"
        title="Looking for an affordable payment solution?"
        paragraph="If you’re in the Bay Area and you’re looking for a payment solution — we dare say you’ve found the best place.For 15 years we’ve been a part of the Bay Area community and have helped hundreds of local businesses with their payment needs.
          Globally, CardConnect has helped more than 230,000 businesses, ranging from Fortune 500 companies to youthful startups."
      />

      <Contact
        id="contact"
        title="We would love to hear from you"
        subtitle="Simply let us know what you need help with."
      />
    </Layout>
  </>
)
