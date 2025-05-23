"use client"

import "./style.scss"
import Image from "next/image"
import { useState } from "react"
import teamData from "../../store/db.json"
import { PARTNER_LOGOS, TEAM_IMAGES } from "./constants"
import { HeroSection } from "./components/HeroSection"
import { NFTFutureSection } from "./components/NFTFutureSection"
import { StatisticsSection } from "./components/StatisticsSection"
import { PartnersSection } from "./components/PartnersSection"
import { TeamSection } from "./components/TeamSection"
import { JoinUsSection } from "./components/JoinUsSection"
import { Modal } from "./components/Modal"

// Import images
import AboutImg from "../../assets/images/about_image.png"
import Astronot from "../../assets/images/ASTRONOT.png"
import Rocket from "../../assets/images/rocket-nft.png"
import Collections from "../../assets/images/collections.png"
import Creators from "../../assets/images/creators.png"
import Volurme from "../../assets/images/volurme.png"
import NftDistro from "../../assets/images/nft-distro.png"
import { useContext } from "react";
import { context } from "../../store";

export default function AboutPage() {
  return (
    <main style={{padding: '0 0 40px 0', background: '#f7f7f7'}}>
      <section className="about-hero-section">
        <div>
          <h1 className="about-hero-title">About Us</h1>
          <div className="about-hero-desc">
            XIVV.SHOP is a store for sports, tourism and outdoor activities. We have been operating since 2024 and offer only original products from leading brands. Our mission is to make sports and travel accessible and comfortable for everyone.
          </div>
        </div>
      </section>
      <section className="about-why-card">
        <h2 className="about-why-title">Why Choose Us?</h2>
        <ul className="about-why-list">
          <li>Only original products and trusted brands</li>
          <li>Large selection for sports, tourism and recreation</li>
          <li>Professional consultation and support</li>
          <li>Convenient store location in the center of Samarkand</li>
          <li>Profitable promotions and special offers</li>
        </ul>
        <div className="about-why-bottom">We value each customer and are always happy to help with your choice!</div>
      </section>
      <section className="about-contacts-card">
        <h2 className="about-contacts-title">Contacts</h2>
        <div className="about-contacts-row"><b>Address:</b> Samarkand, Samarkand region, X.A.V, Zarafshon St, 160</div>
        <div className="about-contacts-row"><b>Phone:</b> <a href="tel:+998772204348" className="about-contacts-link">+998 77 220 43 48</a></div>
        <div className="about-contacts-row"><b>Email:</b> <a href="https://github.com/ShoxruxShokirov" className="about-contacts-link">Github.com/ShoxruxShokirov</a></div>
        <div className="about-contacts-row"><b>Working Hours:</b> Mon-Sun 09:00-21:00</div>
      </section>
    </main>
  );
}
