import { Inter } from 'next/font/google'
import Project from '@/components/Project'
import Resume from '@/components/Resume'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Content from '@/components/Content'
import HomePage from '@/components/Home'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
    <Header/>
    <HomePage/>
    <Content/>
    <Project/>
    <Resume/>
    <Footer/>
  </>
  )
}
