import React from 'react'
import { landingPageSushiPic } from '../assets/constants'

function Landing() {
  return (
    <>
  
    <div className='pl-20 mb-20'>
    <h1 className='flex items-center justify-center mt-10 font-bold text-4xl'>Sushi 101</h1>
    <div className='flex items-center justify-center my-10'>
        <img className='max-w-[700px] rounded-lg drop-shadow-lg' src={landingPageSushiPic} alt="Sushi" />
    </div>
    <div>
    <p className= 'mt-10 mx-20'>
    Sushi, a globally cherished culinary art, traces its origins to Southeast Asia, where it began as a method of preserving fish 
    in fermented rice. This technique, known as narezushi, migrated to Japan around the 8th century. Over time, the Japanese 
    refined the process, and by the Edo period (1603-1868), sushi evolved into a fast food consisting of fresh fish atop 
    vinegared rice, known as nigirizushi. Traditional sushi, particularly from the Edo period, focused on simplicity and the natural 
    flavors of the fish. Ingredients were seasonal and local, emphasizing freshness and quality. Techniques like marinating or 
    lightly cooking the fish were employed to enhance flavors without overpowering them.
    </p>
    <br />
    <p className='mx-20'>
    Modern sushi, while rooted in these traditions, has seen significant innovation and adaptation, especially as it spread globally. 
    Today's sushi often incorporates a variety of ingredients and flavors not found in traditional Japanese sushi.The 
    presentation of modern sushi also tends to be more elaborate, sometimes bordering on artistic, to appeal to a visually 
    driven dining culture. While traditional sushi chefs train for years to perfect their craft, focusing on knife skills 
    and the subtle art of flavor balance, contemporary sushi can be more experimental and fusion-oriented, reflecting the 
    dynamic and evolving nature of global cuisine.
    </p>
    </div>
    </div>
    </>
  )
}

export default Landing