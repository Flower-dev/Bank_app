import Banner from '../components/Banner';
import Card from '../components/Card';
// mocks
import DISPLAYCARD from '../_mocks_/content';
// custom
import '../custom/pages/home.scss';

// -----------------------------------------

export default function Home() {

    return (
        <>
            <Banner/>
            <div className='features'>
                {DISPLAYCARD.map((item) => {
                    return (
                        <Card
                            key={item.id} 
                            icon={item.icon} 
                            description={item.description}
                            title={item.title} 
                            text={item.text} 
                        />
                )})} 
            </div>
        </>
    )
}