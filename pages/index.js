import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainNav from '../components/nav'

import React, { Component } from 'react'
import Header from '../components/Header'
import Signin from '../components/Signin'

export class index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Signin />
      </div>
    )
  }
}

export default index

