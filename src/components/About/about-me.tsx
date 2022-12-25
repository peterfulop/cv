import ContentHeader from "../Biography/Body/Content/biography-body-content-header";

export default function AboutMe(props: {
  headerText: string;
  content?: string;
  birthDate: number;
}) {
  const age = new Date(Date.now()).getFullYear() - props.birthDate;
  const contentWithAge = props.content?.replace("$age$", String(age));

  return (
    <div className="content__item mb-4">
      <ContentHeader title={props.headerText} />
      <div className="content__about-me">
        <div className="content-text">
          <p>{contentWithAge}</p>
        </div>
      </div>
    </div>
  );
}
