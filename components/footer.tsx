import React from 'react'

type Props = {

}

function Footer({}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="uppercase font-bold">About</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb plus</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="uppercase font-bold">Accesibility</h5>
        <p>This is not a real site</p>
        <p>Awesome Design</p>
        <p>sirtosin45@gmail.com</p>
        <p>Airbnb plus</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="uppercase font-bold">Contact</h5>
        <p>sirtosin45@gmail.com</p>
        <p>love to code</p>
        <p>linkedin</p>
        <p>adefope tosin</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="uppercase font-bold">Help Center</h5>
        <p>remote support </p>
        <p>message me</p>
        <p>see you at the top</p>
        <p>Next js</p>
      </div>
    </div>
  );
}

export default Footer
