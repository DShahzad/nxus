// import React from 'react'
import './Footer.css';
function Footer() {
  return (
    <footer className=" container-fluid footer pt-5">
      <hr />
  <div className="container-fluid pt-3">
    <div className="row">
      <div className="col-md-3">
        <h5 className="text-uppercase mb-4">About Us</h5>
        <p>Our mission is to provide the best products and services to our customers. We value quality, innovation, and customer satisfaction.</p>
        <p><strong>Address:</strong> 123 E-commerce St, Suite 456<br/>City, State, 12345</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Email:</strong> support@example.com</p>
      </div>
  
      <div className="col-md-3">
        <h5 className="text-uppercase mb-4">Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">Shop</a></li>
          <li><a href="#" className="text-white">About Us</a></li>
          <li><a href="#" className="text-white">Contact Us</a></li>
          <li><a href="#" className="text-white">FAQs</a></li>
        </ul>
      </div>
      
      <div className="col-md-3">
        <h5 className="text-uppercase mb-4">Customer Service</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white">Shipping & Delivery</a></li>
          <li><a href="#" className="text-white">Returns & Exchanges</a></li>
          <li><a href="#" className="text-white">Privacy Policy</a></li>
          <li><a href="#" className="text-white">Terms & Conditions</a></li>
        </ul>
      </div>
      
      <div className="col-md-3">
        <h5 className="text-uppercase mb-4">Newsletter</h5>
        <form>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Enter your email"/>
          </div>
          <button type="submit" className="btn btn-info mt-2">Subscribe</button>
        </form>
        <div className="social-icons mt-4">
          <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-white me-3"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-12 text-center">
        <p className="text-muted mb-0">&copy; 2024 E-commerce, Inc. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer