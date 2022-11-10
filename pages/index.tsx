import type { NextPage } from "next";
import Head from "next/head";
import { Banner, Footer, Header, LargeCard, MediumCard, SmallCard } from "../components";
type Explore = {
  img: string;
  location: string;
  distance: string;
};
type Card = {
  img: string;
  title: string;
};
type Props = {
  exploreData: Explore[];
  cardData: Card[];
};

const Home = ({ exploreData, cardData }: Props) => {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold py-8">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((explore, i) => (
              <SmallCard key={i} explore={explore} />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex items-center overflow-scroll space-x-3  scrollbar-hide p-3 -ml-3">
            {cardData?.map((card, i) => (
              <MediumCard key={i} card={card} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          desc="Wishlists curated by Airbnb"
          title="The Greatest Outdoors"
          buttonText="Get Inspired"
        />
      </main>
      <Footer/>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
