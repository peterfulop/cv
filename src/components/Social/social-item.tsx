export default function SocialItem(props: any) {
  const soc = props.soc;
  return (
    <a href={soc.link} target="blank" className="sidebar__social">
      <div className="sidebar__item sidebar-social d-flex justify-content-left p-3">
        <div className="icon__lg d-flex justify-content-center align-items-center me-2">
          <i className={soc.icon}></i>
        </div>
        <div className="item-text d-flex flex-column justify-content-center align-content-center">
          <p className="item-text__heading">{soc.title}</p>
          <p className="item-text__link">
            /{soc.link.split("/")[soc.link.split("/").length - 1]}
          </p>
        </div>
      </div>
    </a>
  );
}
