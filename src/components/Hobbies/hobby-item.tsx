export default function HobbyItem(props: any) {
  return (
    <div className="hobby-box" title={props.title}>
      <i className={props.icon}></i>
    </div>
  );
}
