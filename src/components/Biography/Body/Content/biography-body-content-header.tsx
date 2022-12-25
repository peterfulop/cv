export default function ContentHeader(props: { title: string }) {
  return (
    <div className="content-header d-flex justify-content-left pt-2 mb-3">
      <h2>{props.title}</h2>
    </div>
  );
}
