import { Button, Form, Input } from "antd";
const { TextArea } = Input;
import React from "react";
import baseURL from "../../../config";
import Swal from "sweetalert2";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const AddSubscription = () => {
    const navigate = useNavigate();
    const handleAddSubscription = async (values) => {
        console.log(values);
        console.log();
       
        try {
          const data = {
            ...values
          }
          const response = await baseURL.post("/subscription/create-plan", data, {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          console.log("----------------------", response);
         
    
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            message: error.response.data.message,
          });
        }
      };
    return (
        <div>
            <div onClick={() => navigate("/subscription")} className="mt-[44px] cursor-pointer  flex items-center gap-1 p-5">
        <MdOutlineKeyboardArrowLeft
        
          size={34}
        />
        <h1 className="text-[24px]  font-semibold">Add Subscription</h1>
      </div>

      <div className="p-5">
          <Form
            name="basic"
            // labelCol={{ span: 22 }}
            // wrapperCol={{ span: 40 }}
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={handleAddSubscription}
            //   onFinishFailed={handleCompanyInformationFailed}
            autoComplete="off"
          >
            <div className="flex gap-5">
              <Form.Item
                name="title"
                label={<span className="text-[18px] ">Title</span>}
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Title!",
                  },
                ]}
              >
                <Input
                  placeholder="Title"
                  className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                />
              </Form.Item>
              <Form.Item
                name="price"
                label={<span className="text-[18px] ">Price</span>}
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Price!",
                  },
                ]}
              >
                <Input
                  placeholder="Price"
                  className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                  type="text"
                />
              </Form.Item>
            </div>

            <div className="flex gap-5">
              <Form.Item
                name="duration"
                label={<span className="text-[18px]">Duration</span>}
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Duration!",
                  },
                ]}
              >
                <Input
                  // name="publisherName"
                  // onChange={(e) => setPublisherName(e.target.value)}
                  placeholder="Duration"
                  className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                />
              </Form.Item>
              <Form.Item
                name="liveSession"
                label={<span className=" text-[18px] ">Live Session</span>}
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Live Session!",
                  },
                ]}
              >
                <Input
                  // onChange={(e) => setBlogName(e.target.value)}
                  placeholder="Live Session"
                  className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                  type="text"
                />
              </Form.Item>
            </div>

            <div className="flex gap-5">
              <Form.Item
                name="liveSessionDuration"
                label={
                  <span className="text-[18px]">Live Session Duration</span>
                }
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Live Session Duration!",
                  },
                ]}
              >
                <Input
                  // name="publisherName"
                  // onChange={(e) => setPublisherName(e.target.value)}
                  placeholder="Live Session Duration"
                  className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                />
              </Form.Item>
              <Form.Item
                name="weeklyResponse"
                label={<span className=" text-[18px] ">Weekly Response</span>}
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Weekly Response!",
                  },
                ]}
              >
                <Input
                  // onChange={(e) => setBlogName(e.target.value)}
                  placeholder="Weekly Response"
                  className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                  type="text"
                />
              </Form.Item>
            </div>

            <div className="flex-1">
              <Form.Item
                name="description"
                label={<span className="text-[18px]">Description</span>}
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Description!",
                  },
                ]}
              >
                <TextArea
                  rows={4}
                  // name="publisherName"
                  // onChange={(e) => setPublisherName(e.target.value)}
                  placeholder="Description"
                  className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                />
              </Form.Item>
            </div>

            <Button
              htmlType="submit"
              // onClick={handleAddEvent}
              block
              className="block w-[500px] h-[56px] mt-[30px] px-2 py-4  text-white bg-gradient-to-r from-primary to-green-800 rounded-lg hover:bg-primary"
              style={{
                marginTop: "30px",
                backgroundColor: "#54A630",
                color: "#fff",
                size: "18px",
                height: "56px",
              }}
            >
              Add Subscription
            </Button>
          </Form>
        </div>
        </div>
    );
}

export default AddSubscription;
