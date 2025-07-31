import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'The Data Alchemists',
  description: 'Official website for TDA, MIT Manipal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-white font-poppins scroll-smooth">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
