import './App.css';
import pianosystemimg from "./pianosystem.png"
import codeviewerimg from "./codeviewer.png"
import React, { useState } from 'react';

function SystemDetail(props) {
  if(props.show) {
    return (
      <div className="overlay">
        <div className='content'>
          <div className="content-system">
            <img className='detail_img' src={props.img} alt="detail_image" />
            <div className='detail'>
              <p className='left'>{props.detail}</p>
              <p className='left'>使用スキル：</p>
              <ul>
                {props.skills.map(skill =>
                  <li className='left'>{skill}</li>
                  )}
              </ul>
                {props.link && <a className="link" href={props.link} target="_blank" rel="noopener noreferrer">
                  link
                </a>
                }
            </div>
          </div>
          <p className='hover close' onClick={()=>props.set(false)}>close</p>
        </div>
      </div>
    )
  } else {
    return null;
  }
  
}

function MadeSystem(props){
  return(
    <div className="made_system">
      <img className={"made_system_img"} src={props.img} alt={props.tag + "_img"} />
      <p className={"go_detail hover whitemoji"} onClick={()=>props.set(true)}>{props.name}</p>
      <SystemDetail 
        show ={props.show} 
        set={props.set}
        img={props.img}
        detail={props.detail}
        skills={props.skills}
        link={props.link}
      />
    </div>
  )
}

function App() {
  const [show_pianosystem, setPianosystem] = useState(false)
  const [show_codeviewer, setCodeviewer] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"　/>
        <h1 className="name-fix">Numakana's portfolio</h1>
      </header>
      <p className='pinkmoji large'>About</p>
      <div className='numakana'>
        <p>沼田佳夏 (ぬまた　かな)</p>
        <p>筑波大学情報学群情報メディア創成学類　卒業</p>
        <p>筑波大学大学院人間総合科学学術院情報学学位プログラム　1年生</p>
        <p>2025年3月修了予定　22歳</p>
        <p>筑波大学JAZZ愛好会所属</p>
        <a className='whitemoji' href='https://github.com/Numakana' target="_blank" rel="noopener noreferrer">Github</a>
      </div>
      <p className='pinkmoji large'>Work</p>
      <div className='flex'>
      <MadeSystem 
        name="Piano pracrice system" 
        show={show_pianosystem} 
        set={setPianosystem}
        img={pianosystemimg}
        detail="ピアノ練習のうち、部分練習に焦点を当てた支援システムです。楽譜画像の生成に自作のAPIを使用しています。"
        skills={["Python", "AWS(S3, Lambda, API Gateway)", "Lilypond", "Nodejs"]}
        link="https://numakana-pianosystem-main-kax3og.streamlit.app/"
      />

      <MadeSystem 
        name="Code Viewer"  
        show={show_codeviewer} 
        set={setCodeviewer}
        img={codeviewerimg}
        detail="キーボードを弾くとMIDI入力からどんなコード(和音)を弾いたのかを教えてくれるシステムです。"
        skills={["Python(Pygame)"]}
        link=""
      />
      </div>

      <p className='pinkmoji large'>Awards</p>
      <ul className='awardslist'>
        <li className='whitemoji left'>2023年　Cookpad Summer Internship 「最優秀賞」</li>
        <li className='whitemoji left'>2021年　MTI Ltd. Summer Internship 「最優秀賞」</li>
      </ul>
    </div>
  );
}

export default App;