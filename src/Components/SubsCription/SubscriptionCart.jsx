import { useNavigate } from "react-router-dom";

const SubscriptionCart = ({ item }) => {
  console.log(item);
  const navigate = useNavigate();
  const {
    title,
    price,
    description,
    duration,
    sessionCount,
    planType,
    liveSession,
    liveSessionDuaration,
    weeklyResponse,
  } = item;
  const handleDelete = (id) => {
    console.log(id);
  };
  const handleUpdate = (id) => {
      navigate(`/subscription-update/${id}`)
  }
  return (
    <div className="border-2 p-5 border-primary rounded-md flex flex-col justify-between">
      <div>
        <h1 className="text-[24px] text-center font-bold bg-white py-2 rounded-md text-primary ">
          {title.toUpperCase()}
        </h1>
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
        <div className="text-[18px] text-wrap">
          <p className="font-bold">Description:</p>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <div className="text-center ">
          <p
            onClick={() => handleUpdate(item._id)}
            className="text-[18px] bg-green-500 text-white py-2 rounded-md mt-5 cursor-pointer text-center"
          >
            Edit
          </p>
          <p
            onClick={() => handleDelete(item._id)}
            className="text-[18px] bg-red-500 text-white py-2 rounded-md mt-5 cursor-pointer text-center"
          >
            Delete
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCart;
