import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  max-height: 800px;
  margin: auto;
`;

const Image = styled.img`
  width: 200px;
  height:auto;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const ViewSingleProduct = (obj) => {
  return (
    <>

      <Container className='bg-tailtertiary m-3'>
        <div className='flex-col'>

          <Image className='rounded-lg max-w-md mx-auto border-2 border-black' src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-40284,resizemode-1,msid-94083783/news/sports/virat-kohli-returns-to-the-top-of-the-order-for-the-9th-time-in-t20is.jpg" alt="image" />
          <div className="flex mx-auto">
            <p className='px-3 py-1 bg-tailtertiary3 rounded-md'>Fruits</p>
            <p className='ml-2 px-3 py-1 bg-tailtertiary3 rounded-md'>Summer Fruit</p>
          </div>
        </div>

        <br />
        <div className='flex-col'>
          <h2 className='text-black font-bold bg-tailprimary rounded-md text-xl px-3 py-2 mx-2'>Mango</h2>
          <p className='px-3 m-2 py-1 bg-tailtertiary3 rounded-md'>price : 200</p>
          <p className='px-3 m-2 py-1 bg-tailtertiary3 rounded-md'>Brand : Yash Farms</p>
          <p className='px-3 m-2 py-1 bg-tailtertiary3 rounded-md'>UOM : per KG</p>
          <p className='px-3 m-2 py-1 bg-tailtertiary3 rounded-md'>Offer : 10 % off </p>

        </div>

      </Container>
    </>
  );
};

export default ViewSingleProduct;
