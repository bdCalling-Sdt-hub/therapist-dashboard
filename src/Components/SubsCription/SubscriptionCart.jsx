

const SubscriptionCart = ({item}) => {
    console.log(item);
    const {title,price,description,duration,sessionCount, planType,liveSession,liveSessionDuaration,weeklyResponse} = item
    const handleDelete = (id) => {
        console.log(id);
    }
    return (
        <div className="border-2 p-5 border-primary rounded-md">
            <h1 className="text-[24px] text-center font-bold bg-white py-2 rounded-md text-primary ">{title.toUpperCase()}</h1>
            <div className="text-[18px] my-2 flex justify-between">
               <p className="font-bold">Price:</p>  
                
                {price}
                </div>
                <div className="text-[18px] my-2 flex justify-between">
               <p className="font-bold">Duration(Min):</p>  
                
                {duration}
                </div>
                <div className="text-[18px] my-2 flex justify-between">
               <p className="font-bold">Session Count:</p>  
                
                {sessionCount}
                </div>

                <div className="text-[18px] my-2 flex justify-between">
               <p className="font-bold">Plan Type:</p>  
                
                {planType}
                </div>

                {/* <div className="text-[18px] my-2 flex justify-between">
               <p className="font-bold">Weekly Response:</p>  
                
                {weeklyResponse}
                </div> */}
            <div className="text-[18px] text-wrap">
                <p className="font-bold">Description:</p>
                <p>{description}</p>
                </div>
           <div>
            <p onClick={()=>handleDelete(item._id)} className="text-[18px] bg-red-500 text-white py-2 rounded-md mt-5 cursor-pointer text-center">Delete</p>
            </div>     
        </div>
    );
}

export default SubscriptionCart;
