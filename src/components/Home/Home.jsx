import React from 'react';
import './home.css'

const Home = () => {
    return (
        <>
        <div className="containerHome">
            <div className="contenthome">
                <div className="welcome">
                    <h2>Welcome To <br/><span>Eighty Six's Univers</span></h2>
                    <p>Basé sur le roman 86 de Asato Asato.

                        La République de San Magnolia est un vaste territoire constitué de 85 districts. Constamment attaqué par un Empire voisin et ses mystérieuses armes baptisées "Legion", la République a décidé de contre-attaquer et est finalement parvenue à repousser la menace grâce au développement d'armes similaires. C'est du moins ainsi que sont officiellement présentées les choses.

                        Officiellement, le 86è district n'existe pas. Pourtant, c'est grâce aux combattants qui s'y trouvent, parmi lesquels l'escadron Spearhead, dirigé par Shin et commandé par Lena, que la République a retrouvé un semblant de paix.
                    </p>
                    <div className="button_welcome">
                     <span>READ MORE</span>
                    <span>LET'S PLAY</span>

                    </div>

                    

                </div>
                <div className="imgBox">
                    <img src="/assets/shin3d.png" alt="" />
                </div>
            </div>
            
        </div>
        </>
    );
};

export default Home;