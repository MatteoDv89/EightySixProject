import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import './video.css'



const Video = () => {

    const[animeList,setAnimeList] = useState([]);
    const[modal,setModal] = useState(false)
    const [numEpisode,setNumEpisode] = useState(null)
    const pathImg = "/assets/"
    
    const url = `https://autoembed.xyz/tv/imdb/tt13718450-1-${animeList[numEpisode]}`;

   
    useEffect(()=>{
        setAnimeList([
            "1","2","3","4","5","6","7","8","9","10","11","12"
        ])
    },[])

    

    const openModal = async (ep) => {
        
         setNumEpisode(parseInt(ep) - 1)
        setModal(true)
    }
    const closeModal = () => {
        setModal(!modal)
    }

    



    return (
         
        <div className="containerVideo">
           
            <div className="content">
                <div className="card_video">
                    {modal && (
                        <>
                        <div className="videoPopUp">
                            <div className="contentPopUp">
                                <iframe src={url} allowFullScreen title={url}></iframe>
                                <span onClick={closeModal} className="closeBtn">close</span>
                            </div>
                        </div>
                        </>
                    )}

                    
                    <>
                    {animeList !== [] && (
                        animeList?.map((eps)=>{
                            return (
                                
                     <div className="modal">
                         <span onClick={() => openModal(eps)}className="awaitMedia">
                             <p>Ep.{eps}</p>
                             <img src={pathImg + eps + ".png"} alt="img episode" />
                             </span>                       
                    </div>
                            )
                        })
                    )}
                    </> 

                </div>
                <div className="textBox">
                      <h2>Eighty Six - Saison 1</h2>
                      <p>Bas?? sur le roman 86 de Asato Asato.

                        La R??publique de San Magnolia est un vaste territoire constitu?? de 85 districts. Constamment attaqu?? par un Empire voisin et ses myst??rieuses armes baptis??es "Legion", la R??publique a d??cid?? de contre-attaquer et est finalement parvenue ?? repousser la menace gr??ce au d??veloppement d'armes similaires. C'est du moins ainsi que sont officiellement pr??sent??es les choses.

                        Officiellement, le 86?? district n'existe pas. Pourtant, c'est gr??ce aux combattants qui s'y trouvent, parmi lesquels l'escadron Spearhead, dirig?? par Shin et command?? par Lena, que la R??publique a retrouv?? un semblant de paix.

                    </p>
                    <img id="shinei" src="/assets/shinhome.png" alt="" />
                </div>
              
            </div>
            
        </div>
    
    );
};

export default Video;
