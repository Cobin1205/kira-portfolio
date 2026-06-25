import { Header } from '../../Components/header.jsx'
import { Footer } from '../../Components/footer.jsx'
import { WorkCard } from '../../Components/WorkCard.jsx'

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import GRDSM1 from '../../assets/GRDSM/GRDSM1.jpg'
import GRDSM2 from '../../assets/GRDSM/GRDSM2.jpg'
import GRDSM3 from '../../assets/GRDSM/GRDSM3.jpg'
import GRDSM4 from '../../assets/GRDSM/GRDSM4.png'

const photos = [
  {src: GRDSM1, width: 737, height: 657},
  {src: GRDSM2, width: 784, height: 660},
  {src: GRDSM3, width: 1531, height: 391},
  {src: GRDSM4, width: 1531, height: 574},
]

export function GRDSM() {
  return (
    <>
        <Header/>
        <WorkCard 
        title='GR!DSM Summer Camp Branding'

        label={<p className='font-OverpassMono font-semibold text-[0.9rem]'>
          Client Work at Project7 Design <br/>
          Client: Girls Rock! Des Moines <br/>
          Timeline: 2023-2025 / Role: Designer
        </p>}
          
        description={<p>
          2023 Summer Camp Brand Identity and Printed Materials for Girls Rock! Des Moines. 
          Girls Rock is a music program dedicated to empowering, encouraging, and inspiring 
          cis-girls and gender-expansive folx across Greater Des Moines through music and
          arts-based education. The design concept for the 2023 camps revolved around 
          "Instrumental Synergy," representing the unseen connection inherent in these 
          dynamic youth performances. From swag to t-shirts to lanyards, the printed materials 
          brought this brand to life for the little rockers participating in the program. 
          Girls Rock! Des Moines also celebrated its 10th anniversary with a distinctive logo 
          seamlessly integrated into the overall brand system. The design not only encapsulated 
          the essence of the 2023 camps but also paid homage to a decade of empowering and 
          inspiring young musicians.
        </p>}/>
        
        <div className='w-[90%] mx-auto mt-[100px] mb-[50px] flex flex-col gap-[10px]'>
          <RowsPhotoAlbum
            photos={photos}
            spacing={10}
            targetRowHeight={400}
          />

        </div>

        <Footer/>
    </>
  )
}