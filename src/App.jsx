import React from 'react'
import { Route, Routes, } from 'react-router';
import ScrollToTop from './components/Shared/Utils/ScrollToTop';
import { useSelector } from "react-redux"
import HomePage from './pages/home';
import CommonHeader from './components/Common/Header';
import CommonFooter from "./components/Common/Footer";
import Modal from "./components/Shared/Modals/Modal";

const App = () => {
  const isModalOpen = useSelector((state) => state?.modal?.open);
  return (
    <div className=' text-dark '>
      <CommonHeader />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      {/* <CommonFooter /> */}
      {/* 🥡 Modal Box */}
      {isModalOpen && <Modal />}
    </div>
  )
}

export default App