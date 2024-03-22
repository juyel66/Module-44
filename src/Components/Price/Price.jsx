import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';
import { LineChart, Line } from 'recharts';

const Price = ({option}) => {
    // console.log(option)
    const {name, price, features} = option;


    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},];

   

    return (
        <div className='border-red-600 border bg-green-200 flex flex-col rounded-xl p-8 '>
            <h2 className='text-center'>
                <span className='text-7xl font-bold  '>{price}</span>
                <span className='text-2xl'>/Month</span>
            </h2>
            <h1 className='text-4xl text-center my-5'>
                {name}
            </h1>
          <div className='flex-grow'>
          {
                features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature>)
            }
          </div>
            <button className='bg-green-400  py-2 w-full mt-6 rounded-xl text-white text-xl hover:bg-green-900'>Buy Now</button>

            <div>
               



            </div>
          


            
        </div>
    );
};

Price.propTypes={
    option: PropTypes.object

}

export default Price;