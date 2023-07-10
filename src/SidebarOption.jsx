import "./SidebarOption.css";

export default function SidebarOption({ active, text, Icon }) {
  const isActive = active ? "sidebarOption--active" : "";
  return (
    <div className={`sidebarOption ${isActive}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}
