export default function Profile(props: { avatar: string; birthDate: string }) {
  return (
    <div className="sidebar mx-2">
      <div className="d-flex justify-content-center p-2 bg-secondary">
        <div className="d-flex justify-content-center align-items-center me-2">
          <i className="fas fa-birthday-cake"></i>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p className="item-text__heading">
            {new Date(props.birthDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
