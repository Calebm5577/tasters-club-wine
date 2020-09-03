import React from 'react'
import '../CSS/main.scss'
import { slide as Menu } from 'react-burger-menu'
import { Component } from 'react'

export default class Header extends Component {

    showSettings (event) {
        event.preventDefault();
      }


    render() {
    return (
        <div className="Header">
            <div className="Header-HamburgerTitle">
                <div>
                    <h1 className="Header-HamburgerTitle__hamburger">&#9776;</h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 22" className="Header-HamburgerTitle__logo">
                    <path fill="#ba1628" fill-rule="evenodd" className="Header-logo__path" d="M1677.87,450.937h5.57V429.16h-5.57v21.777Zm36.84,0.006,5.56-.012V429.172h-5.56v21.771Zm-63.73-21.792,5.59,0,5.45,12.555h0.38l5.54-12.559,5.71-.008-9.52,21.8-3.54.012Zm36.77,0.018,5.57,0.007,5.43,12.534h0.41l5.49-12.541,5.71,0.007-9.47,21.761-3.56.011Zm39.72-.018h3.92c0.5,0.7.93,1.331,1.37,1.9h0.38c5.56-4.223,14.08-1.577,14.08,5.585l-0.01,14.305h-5.42l-0.05-13.423c-0.27-4.463-6.9-5.1-8.19-.561a14.126,14.126,0,0,0-.41,4.409l0.01,9.586-5.71-.011Zm37-.162c6.35,0,11.53,4.944,11.53,10.983a11.3,11.3,0,0,1-11.53,11.037v-4.57a6.321,6.321,0,0,0,0-12.641v-4.809Zm0,22.02a11.3,11.3,0,0,1-11.53-11.037c0-6.039,5.18-10.983,11.53-10.983V433.8a6.321,6.321,0,0,0,0,12.641v4.57Z" 
                    transform="translate(-1651 -429)"></path>
                </svg>
                <input className="Header-HamburgerTitle__search" type="search" placeholder="Search for any wine"/>
            </div>
            <div className="Header-Icons">
                <span className="Header-Icons-span1">
                    <span className="Header-Icons-span1-text">
                        <p className="Header-Icons-span1-text-p">Ship to</p>
                        <h3 className="Header-Icons-span1-text-h3">North Carolina</h3>
                    </span>
                    <svg className="Header-Icons-span1-img" viewBox="0 0 7 14"><g><path d="M-0.000,13.281 L6.568,7.001 L-0.000,0.722 " fill="none" stroke="#989999" stroke-width="2"></path></g></svg>
                </span>
                <span className="Header-Icons-span2">
                    <span className="Header-Icons-span2-text">
                        <p className="Header-Icons-span2-text-p">Language</p>
                        <h3 className="Header-Icons-span2-text-h3">English</h3>
                    </span>
                    <svg className="Header-Icons-span2-img" viewBox="0 0 7 14"><g><path d="M-0.000,13.281 L6.568,7.001 L-0.000,0.722 " fill="none" stroke="#989999" stroke-width="2"></path></g></svg>
                </span>
                <svg className="Header-Icons__person" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#1e1e1e" fill-rule="evenodd" d="M21.336 20.593c-.03.035-.127.14-.449.145L2.948 21c-.166-.007-.255-.027-.31-.086-.187-.198-.138-.822-.11-1.196.015-.184.027-.352.025-.486-.003-.173.616-1.06 3.695-2.226.384-.146.727-.27 1.031-.378 1.791-.642 2.61-.935 2.578-2.923-.01-.71-.305-1.034-.564-1.32-.219-.241-.445-.49-.635-1.1a.49.49 0 0 0-.097-.175c-.282-.33-.525-.7-.725-1.1a.506.506 0 0 0-.143-.175c-.135-.103-.237-.453-.299-1.056a6.295 6.295 0 0 1-.18-1.382 6.216 6.216 0 0 1 .241-1.803.537.537 0 0 0 .02-.12c.012-.354.184-2.166 2.297-2.961A3.854 3.854 0 0 1 11.625 2L11.681 2c.62 0 1.232.155 1.882.489 2.065.703 2.291 2.509 2.315 2.864.003.04.011.08.023.118.187.584.287 1.188.296 1.794a6.79 6.79 0 0 1-.148 1.459c-.046.72-.18.93-.256.992a.5.5 0 0 0-.14.179 5.336 5.336 0 0 1-.69 1.122.506.506 0 0 0-.092.179c-.172.614-.39.869-.6 1.116-.252.294-.537.627-.526 1.336.03 1.988.856 2.257 2.666 2.846.307.1.653.213 1.042.348 3.14 1.086 3.955 1.916 3.992 2.114.002.11.013.244.024.39.034.402.083 1.009-.133 1.247m1.13-1.328a5.787 5.787 0 0 1-.02-.324c-.015-.954-1.585-1.978-4.666-3.044a52.349 52.349 0 0 0-1.059-.353c-1.809-.59-1.957-.638-1.976-1.911-.005-.332.073-.424.285-.671.232-.271.546-.64.775-1.398.276-.355.515-.744.714-1.16.313-.312.476-.813.518-1.544a7.298 7.298 0 0 0 .16-1.61 7.186 7.186 0 0 0-.325-2.027 4.216 4.216 0 0 0-2.916-3.651C13.207 1.18 12.408.982 11.61 1a4.688 4.688 0 0 0-2.258.608c-2.012.75-2.803 2.483-2.874 3.767a7.184 7.184 0 0 0-.265 2.035c.008.526.08 1.066.197 1.533.075.794.255 1.296.577 1.602.211.408.462.79.748 1.135.252.753.577 1.11.817 1.376.22.24.301.33.305.663.02 1.272-.126 1.325-1.916 1.967-.309.11-.657.236-1.048.384-1.99.755-4.359 1.918-4.34 3.176.001.109-.01.244-.022.394-.047.607-.11 1.438.377 1.958.251.266.595.4 1.025.4h.03l17.94-.261c.5-.008.895-.166 1.173-.473.508-.56.437-1.426.39-2"></path></svg>
                <svg className="Header-Icons__search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#1e1e1e" fill-rule="evenodd" d="M19.96 21.293l-4.203-4.203c.346-.254.681-.527.993-.839a8.71 8.71 0 0 0 .84-.993l4.203 4.202-1.833 1.833zm-14.723-5.75c-2.979-2.979-2.979-7.826 0-10.805a7.618 7.618 0 0 1 5.403-2.235c1.957 0 3.913.745 5.403 2.235 2.98 2.979 2.98 7.826 0 10.805-2.979 2.98-7.826 2.98-10.806 0zm17.616 3.564a.5.5 0 0 1 0 .707l-2.539 2.54a.502.502 0 0 1-.708 0l-4.705-4.706a8.64 8.64 0 0 1-10.37-1.397c-3.37-3.37-3.37-8.851 0-12.22 3.368-3.369 8.85-3.369 12.22 0 2.805 2.806 3.266 7.074 1.397 10.37l4.705 4.706zM10.641 5.457a4.755 4.755 0 0 0-4.75 4.75.499.499 0 1 0 1 0 3.755 3.755 0 0 1 3.75-3.75.5.5 0 0 0 0-1z"></path></svg>
                <svg className="Header-Icons__cart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>cart icon</title><g id="cart_2_"><polygon class="cart__cart--1RnSg" stroke="#1d1d1d" points="21.2,6 4.4,6 6.5,13.4 19.1,12.4 		"></polygon><circle class="cart__cart--1RnSg" stroke="#1d1d1d" cx="16.8" cy="19.5" r="1.2"></circle><circle class="cart__cart--1RnSg" stroke="#1d1d1d" cx="8.7" cy="19.5" r="1.2"></circle><polyline class="cart__cart--1RnSg" stroke="#1d1d1d" points="4.4,6 3.4,3.3 1.2,3.3 		"></polyline><polyline class="cart__cart--1RnSg" stroke="#1d1d1d" points="6.5,13.4 5.5,16.6 17,16.6 		"></polyline></g></svg>
            </div>
        </div>
    )
}
}




