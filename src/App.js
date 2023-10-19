import './App.css';
import React, { useState } from 'react';
import Modal from "react-modal"
import { Container } from "@mui/material";

import pianosystemimg from "./img/pianosystem.png"
import codeviewerimg from "./img/codeviewer.png"
import ufoimg from "./img/kawaiiufo.png"
import rpgimg from "./img/rpg.png"
import tetlisimg from "./img/tetlis.png"
import valimg from "./img/valken.png"
import portfolioimg from "./img/portforio.png"

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "50%",
    maxWidth: "50%",
    height: "80%",
    background: "#282c34",
  },
};


function App() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [detail, setDetail] = useState("");
  const [skills, setSkills] = useState([]);
  const [link, setLink] = useState("");
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  function MadeSystem(props){
    return(
      <div className="made_system">
        <img className={"made_system_img"} src={props.img} alt={props.tag + "_img"} />
        <p 
          className={"go_detail hover whitemoji"} 
          onClick={()=> {
            setEditModalIsOpen(true);
            setName(props.name);
            setImg(props.img)
            setDetail(props.detail)
            setSkills(props.skills)
            setLink(props.link)
          }}
        >
          {props.name}
        </p>
      </div>
    )
  }

  return (
    <div className="App">
      <p className='pinkmoji large'>About</p>
      <div className='numakana'>
        <p>沼田佳夏 (ぬまた　かな)</p>
        <p>筑波大学情報学群情報メディア創成学類　卒業</p>
        <p>筑波大学大学院人間総合科学学術院情報学学位プログラム　1年生</p>
        <p>2025年3月修了予定　23歳</p>
        <p>筑波大学JAZZ愛好会所属</p>
        <a className='whitemoji' href='https://github.com/Numakana' target="_blank" rel="noopener noreferrer">Github</a>
      </div>
      <p className='pinkmoji large'>Work</p>
      
      <div className='flex'>
      <MadeSystem 
        name="Piano pracrice system" 
        img={pianosystemimg}
        detail="ピアノ練習のうち、部分練習に焦点を当てた支援システムです。楽譜画像の生成に自作のAPIを使用しています。"
        skills={["Python", "AWS(S3, Lambda, API Gateway)", "Lilypond", "Nodejs"]}
        link="https://numakana-pianosystem-main-kax3og.streamlit.app/"
      />

      <MadeSystem 
        name="Code Viewer"     
        img={codeviewerimg}
        detail="キーボードを弾くとMIDI入力からどんなコード(和音)を弾いたのかを教えてくれるシステムです。"
        skills={["Python(Pygame)"]}
        link=""
      />
      </div>
      <div className='flex'>
      <MadeSystem 
          name="Numakana's Portfolio"  
          img={portfolioimg}
          detail="このページ。就活用に自分の作成物をひとまとめにしたく作成しました。"
          skills={["React"]}
          link="https://numakana.github.io/my-react/"
        /> 
      <MadeSystem 
        name="RPG?"  
        img={rpgimg}
        detail="バイト先で生徒に教えるために作成。ゴールを目指すRPG風のゲームです。"
        skills={["HTML", "CSS", "Javascript"]}
        link=""
      />
      </div>
      <div className='flex'>
      <MadeSystem 
        name="テトリス"  
        img={tetlisimg}
        detail="バイト先で生徒に教えるために作成。いわゆるテトリスです。"
        skills={["HTML", "CSS", "Javascript"]}
        link="https://numakana.github.io/tetris/"
      /> 

      <MadeSystem 
        name="ChatAPIを用いた経路探索アプリ"  
        img={valimg}
        detail="VAL研究所のインターンで作成。座標からChatGPTに最適な経路探索を行ってもらい、それらを駅すぱあとでつなぐアプリです。"
        skills={["Vue.js", "leaflet"]}
        link=""
      /> 
      </div>

      <div className='flex'>
      <MadeSystem 
        name="Kawaii UFO"   
        img={ufoimg}
        detail="バイト先で生徒に教えるために作成。かわいいUFOのゲームです。"
        skills={["HTML", "CSS", "Javascript"]}
        link=""
      />
      </div>

      <p className='pinkmoji large'>Awards</p>
      <ul className='awardslist'>
        <li className='whitemoji left'>2023年　Cookpad Summer Internship 「最優秀賞」</li>
        <li className='whitemoji left'>2021年　MTI Ltd. Summer Internship 「最優秀賞」</li>
      </ul>

      <header className="App-header">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"　/>
        <h1 className="name-fix">Numakana's portfolio</h1>
      </header>
    
      <Container maxWidth="sm">
        <Modal isOpen={editModalIsOpen} style={modalStyles} >
          <div className="overlay">
            <p className='whitemoji'>{name}</p>
            <div className='content'>
              <div className="content-system">
                <img className='detail_img' src={img} alt="detail_image" />
                <div className='detail'>
                  <p className='left whitemoji'>{detail}</p>
                  <p className='left whitemoji'>使用スキル：</p>
                  <ul>
                    {skills.map(skill =>
                      <li className='left whitemoji'>{skill}</li>
                      )}
                  </ul>
                    {link && <a className="link" href={link} target="_blank" rel="noopener noreferrer">
                      link
                    </a>
                    }
                </div>
              </div>
            </div>
            <p className='hover close pinkmoji' onClick={()=>setEditModalIsOpen(false)}>close</p>
          </div>
        </Modal>
      </Container>
    </div>
  );
}

export default App;
