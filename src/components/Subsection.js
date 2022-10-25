import Github from '.././assets/github.png';
import Slack from '.././assets/slack.png';


function Subscetion() {
    const githubLink = "https://github.com/solex55"
    const slackLink = ""

    return (
      <div>
        <div className='flex w-full mx-auto justify-center items-center gap-10 '>
        <a href={slackLink}>
          <img src={Slack} alt='Slack logo' style={{borderRadius: '50%', width:'23px', height:'24px' }} />
        </a>
        <a href={githubLink}>
          <img src={Github} alt='Github logo' style={{borderRadius: '50%', width:'23px', height:'24px' }} />
        </a>
      </div>
      </div>
    )
  }

export default Subscetion;