import css from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={css.Footer}>
        <section className={css.Student}>
          <p className='label bold'>Nicolas Cribb</p>
          <div style={{paddingTop: "5px"}}>
            <p className='caption'>Frontend III</p>
            <p className='caption'>2023</p>
          </div>
        </section>

        <section className={css.DH}>
          <div className={css.SocialMedia}>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src="/images/ico-facebook.png" alt='facebook-logo' />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img src="/images/ico-instagram.png" alt='instagram-logo' />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
              <img src="/images/ico-whatsapp.png" alt='whatsapp-logo' />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
              <img src="/images/ico-tiktok.png" alt='tiktok-logo' />
            </a>
          </div>
          
          <div className={css.Logo}>
            <p>Powered by</p>
            <img src="/images/DH.png" alt='DH-logo' />
          </div>
        </section>

        <div className={css.RainbowContainer}></div>
    </footer>
  )
}

export default Footer
