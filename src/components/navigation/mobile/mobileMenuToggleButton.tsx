function MobileMenuToggleButton({
  icon,
  handleClick,
}: {
  icon: string;
  handleClick: () => void;
}) {
  return (
    <span
      className="mobile-nav-bar__toggle material-icons"
      id="mobile-menu-toggle-button"
      onClick={handleClick}
    >
      {icon}
    </span>
  );
}

export default MobileMenuToggleButton;
