import React, { useState } from 'react'
import './Header.css'
import logo from '../../img/logo-itb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div id='up' className='navigationBar'>
            <div class="groups pads">
                <div class="siteTitle">
                    <a href="/" rel="home">
                        <img src={logo}></img>
                    </a>
                </div>
                <p class="siteDesc">Pusat Penelitian Teknologi Informasi dan Komunikasi</p>
                <div className={isOpen ? "navbar-toggle button" : "navbar-toggle"} onClick={toggleNavbar}>
                    <FontAwesomeIcon className='icon' icon={faBars} style={{ color: "#fff" }} />
                </div>
            </div>
            <nav class="navContainer group" id="nav-header">
                <div className="navWrap">
                    <ul className={isOpen ? "navbarNav show" : "navbarNav"}>
                        <li>
                            <a href="/" aria-current="page"><span>Home</span></a>
                        </li>
                        <li>
                            <NavLink exact to="/kegiatanpage" activeClassName="active" >Kegiatan</NavLink>
                            <ul className='navbar-dropdown'>
                                <li>
                                    <NavLink exact to="/seminarpage">Seminar &amp; Workshop</NavLink>
                                </li>
                                <li><a href="/risetpage">Riset</a></li>
                            </ul>
                            <div className='drop-menu'></div>
                        </li>
                        <li>
                            <a href="/karyapage" aria-current="page"><span>Karya</span></a>
                            <ul className='navbar-dropdown'>
                                <li><a href="/smartpage"><span>Smart System</span></a>
                                    <div className='drop-menu'></div>
                                    <ul className='navbar-drop-down'>
                                        <li><a href="https://pptik.itb.ac.id/?page_id=3936">Smart Health System</a></li>
                                        <li><a href="https://pptik.itb.ac.id/?page_id=847">Smart Learning</a>
                                            <ul className='navbar-dropdown-down'>
                                                <li><a href="http://tadj.lskk.ee.itb.ac.id/">Tugas Akhir dalam Jaringan</a></li>
                                                <li><a href="http://vidyanusa.lskk.ee.itb.ac.id/">Vidyanusa</a></li>
                                                <li><a href="http://prdoc.lskk.ee.itb.ac.id/">PRD Online Course</a></li>
                                                <li><a href="http://beaconeventcampus.lskk.ee.itb.ac.id/">Open Data Course</a></li>
                                            </ul>
                                            <div className='drop-menu'></div>
                                        </li>
                                        <li><a href="https://pptik.itb.ac.id/?page_id=851">Transportasi</a>
                                            <ul className='navbar-dropdown-down'>
                                                <li><a href="http://bsts.lskk.ee.itb.ac.id">BSTS</a></li>
                                                <li><a href="http://blits.id">BLITS</a></li>
                                                <li><a href="http://tlits.id">TLITS</a></li>
                                                <li><a>BPG</a></li>
                                                <li><a href="http://pptik.itb.ac.id" aria-current="page">System Moving Block Kereta Api</a></li>
                                                <li><a>Sistem Autodrive</a></li>
                                                <li><a>Mobil Listrik</a></li>
                                                <li><a>Simulator Lokomotif</a></li>
                                            </ul>
                                            <div className='drop-menu'></div>
                                        </li>
                                        <li><a href="http://shesop.azurewebsites.net/">Kesehatan</a></li>
                                        <li><a href="https://pptik.itb.ac.id/?page_id=854">Indonesia United</a>
                                            <ul className='navbar-dropdown-down'>
                                                <li><a href="http://idun-nelayan.pptik.id/">Idun Nelayan</a></li>
                                                <li><a href="http://167.205.7.227:10/">DPR Kita</a></li>
                                                <li><a href="http://Pemilu.lskk.ee.itb.ac.id">Pemilu</a></li>
                                                <li><a href="http://167.205.7.227:10/web_verture">Smart Vertical Agriculture</a></li>
                                                <li><a href="http://radio-bandung.lskk.ee.itb.ac.id/">Radio Bandung</a></li>
                                                <li><a>Detektor Gempa</a></li>
                                                <li><a href="http://sigehpenguten.lskk.ee.itb.ac.id/">Tari Tradisional</a></li>
                                                <li><a>Flora &amp; Fauna</a></li>
                                            </ul>
                                            <div className='drop-menu'></div>
                                        </li>
                                        <li><a href="http://j">Brain Computer Interface</a></li>
                                        <li><a href="https://pptik.itb.ac.id/?page_id=857">Advance Robotics &amp; Automation</a>
                                            <ul className='navbar-dropdown-down'>
                                                <li><a>ROV</a></li>
                                                <li><a href="/">Seaglider</a></li>
                                                <li><a>Lumen Robot Friend</a></li>
                                            </ul>
                                            <div className='drop-menu'></div>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="/risetpage">Riset</a>
                                </li>
                            </ul>
                            <div className='drop-menu'></div>
                        </li>
                        <li>
                            <a href="/mitrapage" aria-current="page">Mitra</a>
                        </li>
                        <li>
                            <a href="/galeripage" aria-current="page">Galeri</a>
                        </li>
                        <li>
                            <a href="/pptikpage" aria-current="page">Tentang PPTIK</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page">Abstein</a>
                            <ul className='navbar-dropdown'>
                                <li><a href="/modulpage">Modul Belajar</a></li>
                            </ul>
                            <div className='drop-menu'></div>
                        </li>
                        <li>
                            <a href="/penelitipage" aria-current="page">Peneliti &amp; Staf</a>
                        </li>
                        <li>
                            <a href="/tentangpage" aria-current="page">Tentang</a>
                            <ul className='navbar-dropdown'>
                                <li><a href="/privacypage">Privacy Policy</a></li>
                                <li><a href="/kontakpage">Kontak</a></li>
                            </ul>
                            <div className='drop-menu'></div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header

