import React, { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router';

export type NavLink = {
    label: string;
    href: string;
    element?: React.ReactNode;
};

interface NavbarProps {
    links: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-linen/40 shadow-xs' : 'bg-transparent'}`}
            style={{ backdropFilter: 'blur(8px)' }}
        >
            <div className="w-full flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl sarina-regular">Maor Shushan</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center lowercase">
                    {links.map((link) => (
                        <Link to={link.href} className="mr-5 hover:underline decoration-4 decoration-xanthous hover:font-bold transition-all duration-400">
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex flex-row gap-4">
                    <button className="lowercase inline-flex items-center bg-black text-linen py-2 px-5 
                    transition-all duration-300 
                    hover:bg-linen hover:font-bold animatedbutton
                    rounded-full md:mt-0">Download CV
                        <Download size={16} />
                    </button>
                    <button className="lowercase inline-flex items-center bg-black text-linen py-2 px-5 
                    transition-all duration-300 
                    hover:bg-linen hover:font-bold animatedbutton
                    rounded-full md:mt-0">
                        Contact
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
