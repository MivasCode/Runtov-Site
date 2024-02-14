import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="contacts">
          <p className="contacts-address">
            г. Тирасполь, бульвар Гагарина 2
          </p>
          <p className="contacts-phone">(373) 533-79479</p>
          <p className="contacts-email">efdekan@mail.ru</p>
          <div className="contacts-social">
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="#">
              <i className="bx bxl-vk"></i>
            </a>
          </div>
        </div>
        <p className="copyright">&copy; 2023 Экономический факультет</p>
      </div>
    </div>
  );
}

export default Footer;
