import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import './video.css'



const Video = () => {

    const[animeList,setAnimeList] = useState([]);

    




    return (
         
        <div className="containerVideo">
           
            <div className="content">
                <div className="card">
                    <div className="modal">
                        <iframe  src="https://www.youtube.com/embed/VSdS29SDvn4"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                       
                    </div>                  
                </div>
                <div className="textBox">
                      <h2>Eighty Six - Saison 1</h2>
                      <p>Basé sur le roman 86 de Asato Asato.

                        La République de San Magnolia est un vaste territoire constitué de 85 districts. Constamment attaqué par un Empire voisin et ses mystérieuses armes baptisées "Legion", la République a décidé de contre-attaquer et est finalement parvenue à repousser la menace grâce au développement d'armes similaires. C'est du moins ainsi que sont officiellement présentées les choses.

                        Officiellement, le 86è district n'existe pas. Pourtant, c'est grâce aux combattants qui s'y trouvent, parmi lesquels l'escadron Spearhead, dirigé par Shin et commandé par Lena, que la République a retrouvé un semblant de paix.

                    </p>
                    
                </div>
              
            </div>
            
        </div>
    
    );
};

export default Video;
