import SkillBar from '../../components/skills-bar/SkillBar';
import '../../components/skills-bar/SkillBar.css'
import './Skills.css'
export default function Skills() {
  return (
    <>
      <section className="skills py-5 pb-2 text-light">
        <div className="container">
          <h2 className="h1 fw-bold mb-4 text-center mt-4">Skills</h2>
          <p className="lead text-center w-75 m-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <div className="skills-bars d-flex gap-5 text-white py-5">
            <div className="titles w-50  d-flex justify-content-center align-items-center ">
              <ul className="list-group bg-transparent">
                <li className="list-group-item bg-transparent  text-white text-center border-0 border-bottom p-4 pb-5 fs-4">My Focus</li>
                <li className="list-group-item bg-transparent text-white border-0 p-3 fs-5">Ui/Ux Design</li>
                <li className="list-group-item bg-transparent text-white border-0 p-3 fs-5">Web Design</li>
                <li className="list-group-item bg-transparent text-white border-0 p-3 fs-5">Responsive Web Design</li>
                <li className="list-group-item bg-transparent text-white border-0 p-3 fs-5">Mobile App Design</li>
              </ul>
            </div>
            <div className='w-50'>
                 <SkillBar title="Html5" barWidth="90%"/>
                 <SkillBar title="Css3" barWidth="80%"/>
                 <SkillBar title="Javascript" barWidth="70%"/>
                 <SkillBar title="React" barWidth="60%"/>
                 <SkillBar title="Node" barWidth="70%"/>
                 <SkillBar title="MongoDB" barWidth="80%"/>
                 <SkillBar title="Api" barWidth="90%"/>
                 <SkillBar title="PhotoShop" barWidth="70%"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
