import PropTypes from 'prop-types'
import { FaCircleCheck } from "react-icons/fa6";

const Feature = ({feature}) => {
    console.log(feature)
    return (
        <div>
            <div className='flex gap-1 items-center'>
            <p><FaCircleCheck className='text-blue-400'></FaCircleCheck></p>
            <p>{feature}</p>
            </div>
         

            
        </div>
    );
};
Feature.propTypes={
    feature: PropTypes.string
}
export default Feature;