import React from 'react'
import Title from '../../componets/common/Title'
import styles from "../../styles/layout/contact/contact.module.css"

function Contact() {
  return (
    <div className={styles.mainContainer}>
    <div className={styles.container}> 
      <div>
        <Title title="CONTACT US"/>
        <form action="">
            <input type="text" placeholder='Enter Your Name:' />
            <input type="number" placeholder='Enter Your Number:' />
            <input type="email" placeholder='Enter Your Email Address:' />
            <textarea name="" id="" cols="30" rows="2" placeholder='Send Me a Message:'></textarea>
            <button>Send Message</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact
