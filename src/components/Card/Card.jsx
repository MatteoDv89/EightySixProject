import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './card.css'







const Card = () => {

    const [perso,setPerso] = useState([ {
            id:'lena',
            name:'Mirize Vladilena',
            img:'/assets/vladilena.png'
        },
        
        {
            id:'shin',
            name:'Nozen Shinei',
            img:'/assets/shinei.png'
        },
        {
            id:'theoto',
            name:'Rikka Theoto',
            img:'/assets/theoto.png'
        },
        
        {
            id:'anju',
            name:'Emma Anju',
            img:'/assets/anju.png'
        },
        {
            id:'raiden',
            name:'Shuga raiden',
            img:'/assets/raiden.png'
        },
        {
            id:'kurena',
            name:'Kukumila kurena',
            img:'/assets/kurena.png'
        },
        {
            id:'Frederica',
            name:'Frederica',
            img:'/assets/frederica.png'
        },
     {
            id:'Fido',
            name:'Fido',
            img:'/assets/Fido.png'
        }])
    
        const [pageNumber, setPageNumber] = useState(0)
        const start = 0
        const characPerPage = 4;
        const countofPage = Math.ceil(perso.length / characPerPage)
  
        console.log(countofPage)

        const display = perso.slice(pageNumber * characPerPage, pageNumber * characPerPage + characPerPage).map((charac) => {
            return (
                <div key={charac.id} className="card">
                               <div  className="card_item">                                
                                <h3>{charac.name}</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.adipisicing elit.</p>
                                <img src={charac.img} alt="" />
                                <button>Read More</button> 
                            </div>   
                            
                </div>   
            )

        })

        const changePage = ({selected}) => {
            setPageNumber(selected)

        }

    return (
              
      

            
        <>
        <div className="cardWidth">
        {display}
       
        </div>
         <ReactPaginate 
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={countofPage}
            onPageChange={changePage}
            containerClassName={"paginationBtn"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            
            
            
        />
        
        </>
        
        
         
    )
}

export default Card;