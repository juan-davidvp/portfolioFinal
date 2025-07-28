import { abilities } from "../constants";
import TitleHeader from '../components/TitleHeader.jsx'

const FeatureCards = () => (

  
  <div className="mt-40 w-full padding-x px-5 md:px-60">
    <div className='my-20'>
            <TitleHeader 
            title="My Soft and Key Skills"ll
            sub="👌 What i bring to the table"
            />
            </div>
    <div className="mx-auto grid-4-cols" id="skills">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="card-border rounded-xl p-6 flex flex-col justify-center gap-5"
        >
          <div className="size-10 flex items-center gap-5">
            <img src={imgPath} alt={title} className="p-1"/>
            <h3 className="text-white text-xl font-semibold">{title}</h3>
          </div>
          
          <p className="text-white-50 text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;