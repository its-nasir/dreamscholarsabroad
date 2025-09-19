import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary">
                <Globe className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Dream Scholars</span>
                <span className="text-xs text-background/70 -mt-1">Abroad Pvt Ltd</span>
              </div>
            </Link>
            <p className="text-sm text-background/70 mb-4">
              Connecting talented students with global career opportunities worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-background/70 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/services" className="text-background/70 hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link to="/about" className="text-background/70 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-background/70 hover:text-primary transition-colors text-sm">Contact</Link></li>
              <li><Link to="/student-dashboard" className="text-background/70 hover:text-primary transition-colors text-sm">Student Portal</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-background/70 text-sm">Career Counseling</span></li>
              <li><span className="text-background/70 text-sm">Job Placement</span></li>
              <li><span className="text-background/70 text-sm">Resume Building</span></li>
              <li><span className="text-background/70 text-sm">Interview Preparation</span></li>
              <li><span className="text-background/70 text-sm">Skill Development</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  123 Business District, New Delhi, India 110001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm">info@dreamscholarsabroad.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/70 text-sm">
            © 2024 Dream Scholars Abroad Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;