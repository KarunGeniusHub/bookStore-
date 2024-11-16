import React, {useState, useEffect} from 'react'
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


// import list from '../../public/list.json'
import Cards from './Cards';
function Freebook() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async()=>{
      try {
       const res = await axios.get("http://localhost:4001/book")
      //  console.log(res.data);
      const data = res.data.filter((value) => value.category === "Free")
       setBook(data)
       console.log(data);
       
      } catch (error) {
        console.log("Error: ",error);
        
      }
    }
    getBook()
  }, [])
  // const filterData = list.filter((value) => value.category === "Free")

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque excepturi, voluptates quidem incidunt quo dolore tenetur, voluptatem magnam qui nulla officia voluptatum com
            modi nihil recusandae labore suscipit nobis quasi.</p>
        </div>

        <div>
        <Slider {...settings}>
          {book.map( (item)=>{
            return <Cards item={item} key={item.id}/>
          } )}
        </Slider>
      </div>
      </div>
    </>
  )
}

export default Freebook
