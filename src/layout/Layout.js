import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../css/Layout.css'

export default function Layout() {
  return (
    <div className='Layout'>
        <Header />
        <div className='Text'>
            <h2>레이아웃</h2>
        </div>
        <Footer />
    </div>
  )
}
