
import Logo from './Logo';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <nav>
          <a href="/" className="mr-4">Home</a>
          <a href="/shop" className="mr-4">Shop</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
