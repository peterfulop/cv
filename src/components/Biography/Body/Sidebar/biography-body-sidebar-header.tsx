export default function SidebarHeader(props: { title: string }) {
  return (
    <div className='sidebar__item sidebar-header d-flex justify-content-left pt-2'>
      <h2 className='text-white'>{props.title}</h2>
    </div>
  );
}
