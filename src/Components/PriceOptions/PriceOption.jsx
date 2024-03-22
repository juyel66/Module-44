import Price from "../Price/Price";


const PriceOption = () => {
    const priceOption  =  [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to cardio area",
              "Access to weightlifting area",
              "Locker room access",
              "Basic fitness assessment",
              "Discounts on gym merchandise",
              "Access to online workout videos"
            ]
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
              "Access to all gym facilities",
              "Unlimited group classes",
              "Personalized workout plans",
              "Nutritional counseling",
              "Sauna and steam room access",
              "Discounts on personal training sessions",
              "Access to premium equipment"
            ]
          },
          {
            "id": 3,
            "name": "Gold Membership",
            "price": 79.99,
            "features": [
              "All features of Premium Membership",
              "Priority booking for personal training sessions",
              "Towel service",
              "Exclusive access to VIP events",
              "Complimentary gym apparel"
            ]
          }
        ];
      
      
    return (
        <div className="m-12">
            <h1 className="lg:text-5xl text-3xl font-bold">Best Price in th Town</h1>
            <div className="grid  lg:grid-cols-3 mt-10 gap-5">
            {
                priceOption.map(Opt =><Price key={Opt.id} option={Opt} ></Price>)
            }
            </div>

            
        </div>
    );
};

export default PriceOption;