import logo from "@/assets/logo-indaia.jpeg";

const Header = () => {
  return (
    <header className="gradient-header sticky top-0 z-50 w-full py-2 sm:py-3 px-3 sm:px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-center gap-2 sm:gap-3">
        <img
          src={logo}
          alt="Laticínios Indaiá"
          className="h-10 sm:h-14 w-auto rounded-lg bg-white p-0.5 sm:p-1 shadow-md"
        />
        <div className="text-center">
          <h1 className="text-lg sm:text-xl font-bold text-primary-foreground tracking-wide">
            Laticínios Indaiá
          </h1>
          <p className="text-[10px] sm:text-xs text-primary-foreground/80">
            Catálogo de Produtos
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
