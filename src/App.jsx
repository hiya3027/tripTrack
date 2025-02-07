import Header from './component/header.jsx'
import Entry from './component/entry.jsx'
import data from './data.jsx'

export default function App() {

  const entryElements= data.map((entry)=>{
    return (
      <Entry
        img={entry.img}
        title={entry.title}
        description={entry.description}
        />
    )
  }
  )
  return (
    <>
      <Header/>
      {entryElements}
    </>
  )
}
