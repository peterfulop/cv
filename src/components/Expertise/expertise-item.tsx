export default function ExpertiseItem(props: { expertise: string }) {
  return (
    <li className="item-text__heading expertise-item py-1">
      {props.expertise}
    </li>
  );
}
