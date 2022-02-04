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
                      <p>Basé sur le roman 86 de Asato Asato.

                        La République de San Magnolia est un vaste territoire constitué de 85 districts. Constamment attaqué par un Empire voisin et ses mystérieuses armes baptisées "Legion", la République a décidé de contre-attaquer et est finalement parvenue à repousser la menace grâce au développement d'armes similaires. C'est du moins ainsi que sont officiellement présentées les choses.

                        Officiellement, le 86è district n'existe pas. Pourtant, c'est grâce aux combattants qui s'y trouvent, parmi lesquels l'escadron Spearhead, dirigé par Shin et commandé par Lena, que la République a retrouvé un semblant de paix.

                    </p>
                    <img id="shinei" src="/assets/shinhome.png" alt="" />
                </div>
              
            </div>
            
        </div>
    
    );
};

export default Video;
