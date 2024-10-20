import React, { useEffect } from 'react';
import './Home.css'; // Pastikan untuk mengimport CSS

const Home = () => {
  useEffect(() => {
    // Membersihkan event listener saat komponen di-unmount
    return () => {
      document.getElementById('mySidebar').style.display = 'none';
    };
  }, []);

  const openNav = () => {
    document.getElementById("mySidebar").style.display = "block";
  };

  const closeNav = () => {
    document.getElementById("mySidebar").style.display = "none";
  };

  return (
    <div id="myPage">
      {/* Sidebar */}
      <nav className="sidebar" id="mySidebar">
        <button onClick={closeNav} className="closebtn">Close</button>
        <button className="link-btn">Link 1</button>
        <button className="link-btn">Link 2</button>
        <button className="link-btn">Link 3</button>
        <button className="link-btn">Link 4</button>
        <button className="link-btn">Link 5</button>
      </nav>

      {/* Navbar */}
      <div className="navbar">
        <button onClick={openNav} className="menu-btn">☰</button>
        <a href="/home" className="navbar-item">Beranda</a>
        <a href="#team" className="navbar-item">Tim</a>
        <a href="#work" className="navbar-item">Proyek</a>
        <a href="#contact" className="navbar-item">Kontak</a>
      </div>

      {/* Image Header */}
      <div className="header">
        <img src="./gambar/telkom-1.webp" alt="boat" className="header-image" />
        <button onClick={() => document.getElementById('id01').style.display='block'} className="header-button">Beranda</button>
      </div>

      {/* Modal */}
      <div id="id01" className="modal">
        <div className="modal-content">
          <span onClick={() => document.getElementById('id01').style.display='none'} className="close-button">×</span>
          <h4>Halo semua!</h4>
          <h5>Selamat datang di website kami</h5>
          <p>Website ini memiliki banyak fitur yang menarik loh!</p>
          <footer>Penasaran?</footer>
        </div>
      </div>

      {/* Team Container */}
      <div className="team-container" id="team">
        <h2>Anggota Tim</h2>
        <p>Dengan bangga memperkenalkan:</p>
        <div className="team-row">
          {[...Array(4)].map((_, i) => (
            <div className="team-member" key={i}>
              <img src={`./gambar/member${i + 1}.jpg`} alt="Member" className="member-img" />
              <h3>Nama Anggota {i + 1}</h3>
              <p>Email Anggota {i + 1}</p>
              <p>Instagram: @username</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Container */}
      <div className="contact-container" id="contact">
        <h2>Hubungi Kami</h2>
        <p>Alamat: Telkom University, Tahun Ajaran 2024/2025</p>
        <p>Bandung, Jawa Barat</p>
        <form>
          <input type="text" placeholder="Nama" required />
          <input type="text" placeholder="Email" required />
          <textarea placeholder="Pesan" required></textarea>
          <button type="submit">Kirim</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Ikuti Kami</p>
        <button className="social-button">Facebook</button>
        <button className="social-button">Twitter</button>
        <button className="social-button">Instagram</button>
      </footer>
    </div>
  );
};

export default Home;
