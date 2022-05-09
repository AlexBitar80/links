import { useQuery } from "@apollo/client";
import LINKS from '../../graphql/queries/links';

import './styles.scss';

export function Home() {
  const {loading, data} = useQuery(LINKS)

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <main>
      <header>
        <img src="https://github.com/alexbitar80.png" className='profileImage' alt='João Alexandre Bitar'/>
        <div className='name-box'>
          <h1>
            João Alexandre Bitar
          </h1>
        </div>
        <span>iOS and Web Developer.</span>
      </header>
      <section className='links-container'>
        {data.allAlllinks.map(link => {
          return (
            <a 
              href={link.url} 
              target='_blank' 
              className='link' 
              key={link.name} 
              rel='noreferrer'
            >
              <img src={link.icon.url} alt={link.name}/>
              <span>{link.name}</span>
            </a>
          )
        })}
      </section>
    </main>
  )
}