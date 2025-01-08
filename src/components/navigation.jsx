const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>

      <ul>
        <a href="https://www.geeksforgeeks.org/react/">Menu</a>
        <a href="https://www.geeksforgeeks.org/front-end-developer-interview-questions/?ref=lbp">
          Location
        </a>
        <a href="https://www.geeksforgeeks.org/javascript-interview-questions-and-answers/?ref=lbp">
          About
        </a>
        <a href="https://www.geeksforgeeks.org/react-interview-questions/">
          Contact
        </a>
      </ul>
      <button>Log In</button>
    </nav>
  );
};

export default Navigation;
