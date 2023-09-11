import './login.css'
import { useState, useEffect } from 'react';

const Login = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setIsVisible(false); // Hide header when scrolling down
      } else {
        setIsVisible(true);  // Show header when scrolling up
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);


  return (
    <div className={`header ${isVisible ? '' : 'hidden'}`}>
      <div className="header-content">
        <a href="https://react-login-jwt.web.app/login">Login</a>
        <a href="https://react-login-jwt.web.app/register">Register</a>
      </div>
    </div>
  );
};


export default Login