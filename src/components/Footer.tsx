const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6 px-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} Laticínios Indaiá
        </p>
        <p className="text-xs opacity-70 mt-1">
          Produtos frescos e de qualidade
        </p>
      </div>
    </footer>
  );
};

export default Footer;
