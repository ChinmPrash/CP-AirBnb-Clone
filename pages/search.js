import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { useRouter } from "next/dist/client/router"
import { format } from "date-fns";
import InfoCard from "../Components/InfoCard";

function Search({ SearchResults }) {

    const router = useRouter();
    const {location, startDate, endDate, guests} = router.query;
    
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedStartDate}`

    console.log(SearchResults)

    return (
        <div className="h-screen">
            <Header placeholder={`${location} | ${range} | ${guests} Guests`} />

                <main className="flex pt-14 px-6">
                    <section className="flex-grow">
                    <p className="text-xs">300+ Stays {range}  {guests} Guests</p>


                <h1 className="text-3xl font-semibold mt-2 mb-6">
                    Stays In {location}</h1>
               
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                    <p className="button">Cancellation Flexibility</p>
                    <p className="button">Type Of Place</p>
                    <p className="button">Price</p>
                    <p className="button">Rooms & Beds</p>
                    <p className="button">More Filters</p>
                    </div>
                   <div className="flex-col">
                   {
                        SearchResults.map(({ img, location, title, description, star, price, total}) => (
                            <InfoCard key={img} img={img} location={location} title={title} description={description} star={star} price={price} total={total} />
                        ))
                    }
                   </div>
                   
                    </section>
                </main>

            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const SearchResults = await fetch("https://links.papareact.com/isz")
    .then(res => res.json());

    return {
        props: {
            SearchResults
        }
    }
}
