import Image from "next/image"
import React, { Component } from "react"

import Logo from "../../assets/logo.svg"

interface LayoutProps {
  children: React.ReactNode
}

export default class index extends Component<LayoutProps> {
  render() {
    return (
      <div className="">
        <header className="fixed top-0 left-0 bg-brick py-2 px-16 w-screen">
          <Image
            src={Logo}
            alt={"Logo Image"}
          />
        </header>
        <section className="fixed left-0 top-[110px] w-64 h-screen bg-brickLight"></section>
        <div className="min-h-screen bg-purple-500 pt-[110px] pl-64 flex flex-col justify-between">
          <div className="">{this.props.children}</div>
          <footer className="h-56 bg-brick flex items-center justify-center">
            footer legal com informações boas sobre a empresa copyright
          </footer>
        </div>
      </div>
    )
  }
}
