/* Base styles */
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap');

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  transition: background 0.3s, color 0.3s;
}

.dark-theme {
  background-color: #121212;
  color: #f0f0f0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}
.hamburger span {
  height: 3px;
  width: 25px;
  background: #333;
  margin: 4px 0;
  border-radius: 3px;
}

.nav-list.active {
  display: flex !important;
}

#scrollToTopBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  font-size: 18px;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
}

.counter-box {
  text-align: center;
  margin: 2rem;
}

.contact form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: auto;
}

.contact input,
.contact textarea {
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .row {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .nav-list {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }

  .nav-list li {
    margin: 0.5rem 0;
  }

  .header-content h1 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .hamburger {
    display: flex;
  }

  .nav-list {
    display: none;
    width: 100%;
    flex-direction: column;
    background: #fff;
    padding: 1rem;
  }

  .hero-img img {
    max-width: 90%;
    height: auto;
  }

  .container, .grid-wrapper {
    flex-direction: column;
    padding: 1rem;
  }

  section {
    padding: 2rem 1rem;
  }

  .ctn, .learnmore {
    display: inline-block;
    margin: 0.5rem auto;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 14px;
  }

  .logo {
    max-width: 120px;
  }

  .header-content h1 {
    font-size: 1.5rem;
  }

  .hero-img {
    margin-top: 1rem;
  }
}
