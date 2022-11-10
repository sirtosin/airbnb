import React from 'react'
import { Footer, Header } from '../components'

type Props = {}

function Search({}: Props) {
  return (
    <div>
          <Header />
          <main className="flex">
              <section>
                  <p className='text-xs'>
                      300+ stays for 5 number of guests
                  </p>
                  <h3 className='text-3xl font-semibold mb-6 mt-2'>
                     stays in lagos
                  </h3>
                  <div>
                      <p></p>
                  </div>
              </section>
          </main>
      <Footer />
    </div>
  );
}

export default Search
