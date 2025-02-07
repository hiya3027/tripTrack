import Header from './component/header.jsx'
import Entry from './component/entry.jsx'
export default function App() {

  return (
    <>
      <Header/>
      <Entry
        img={{ 
          src:"./src/images/white-desert.jpg",
          alt:"White rann of Kutch"
        }}
        title="White Rann of Kutch-Kutch,Gujarat"
        description="The Rann of Kachchh region is also home to a range of ecologically rich wildlife such as the flamingos and the wild ass that can be spotted around the desert often. Rann is also a part of a few sanctuaries such as the Indian wild ass sanctuary, Kachchh desert wildlife sanctuary etc. It is a paradise for wildlife photographers and nature enthusiasts alike."
      />
      <Entry
      img={{ 
          src:"./src/images/girnar.jpg",
          alt:"Girnar-Junagadh"
        }}
        title="Girnar-Junagadh,Gujarat"
        description="Girnar, also known as Girinagar or Revatak Parvata, is a group of mountains in the Junagadh District of Gujarat, India, situated near Junagadh. Is considered older than the Himalayas, Girnar, the mountain and its range are considered sacred. It is an important pilgrimage site for both Hindus , who gather here during the Girnar Parikrama festival. Later on some Jain temples were also built, some of which are very recent. Girnar is one of the five major ‘tirthas’ attributed to the ‘panch kalyanakas’ of various ‘Jain tirthankaras’."
      />
      <Entry
        img={{
          src:"./src/images/statue-Of-Unity.jpg",
          alt:"statue of unity"
        }}
        title="Statue of Unity"
        description="Statue of Unity is the best place to visit in Gujarat for families and tourists. The Statue of Unity has earned the title of the world’s tallest statue. This statue honors Sardar Vallabh Bhai Patel, India’s first deputy prime minister and home minister. The statue is estimated to be 597 feet tall, twice the height of the Statue of Liberty in the United States of America"
      
      />      
    </>
  )
}
