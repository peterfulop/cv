export default function SoftSkillItem(props: { softSkill: string }) {
  return (
    <div className='softskill_bubble'>
      <p>{props.softSkill}</p>
    </div>
  );
}
