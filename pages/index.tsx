import { ReactElement, cloneElement, useEffect, useState } from 'react';

import AdCard from '../units/AdCard/AdCard';
import Carousel from '../components/Carousel/Carousel';
import FocusGroup from '../units/FocusItems/FocusGroup';
import Footer from '../units/Footer/Footer';
import Head from 'next/head'
import {Header} from '../units/Header/Header';
import Image from 'next/image'
import Navbar from '../units/Navbar/Navbar';
import type { NextPage } from 'next'
import { currentTheme } from '../atoms'
import styles from '../styles/Home.module.css'
import { useRecoilValue } from 'recoil';

type frontProps = {
  componentsData?: any;
}
const Home: NextPage<frontProps> = ({ componentsData }) => {
  console.log(componentsData)
   const [components, setComponents] = useState<ReactElement[]>([]);
  const currentThemes = useRecoilValue(currentTheme);

         componentsData.map((component: { component: string; props: { title: string | undefined; imgSrc: string | undefined; videoSrc: string | undefined; alt: string; width: string | undefined; height: string | undefined; images: { src: string; alt?: string | undefined; }[]; map: (arg0: (group: any, index: number) => number) => void; }; }) => {
            if (component.component === 'AdCard') {
               components.push(cloneElement(<AdCard
                    title={component.props.title} imgSrc={component.props.imgSrc} videoSrc={component.props.videoSrc} alt={component.props.alt} width={component.props.width} height={component.props.height}
               />))
            }
            else if (component.component === 'Header') components.push(cloneElement(<Header />))
            else if (component.component === 'Navbar') components.push(cloneElement(<Navbar />))
            else if (component.component === 'Carousel') components.push(cloneElement(<Carousel images={component.props.images} />))
            else if (component.component === 'FocusGroups') component.props.map((group: any, index: number) => components.push(cloneElement(<FocusGroup key={index} title={group.title} index={index} />)))
            else if (component.component === 'Footer') components.push(cloneElement(<Footer />))
          })
  return (
    <div className={styles.container}>
      <main>
        <Header />
        <Navbar />
         <div> {components} </div>
        <Footer />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.npoint.io/d11db034177ea2071293')
  const componentsData = await res.json()
  return {
    props: {componentsData},
  }
}


export default Home
