import React from 'react';
import {addresses} from '@crema/mockapi/fakedb/ecommerce/ecommerceData';
import AppPageMeta from '@crema/components/AppPageMeta';
import {StyledConfirmationView} from './index.styled';
import {useGetDataApi} from '@crema/hooks/APIHooks';
import {
  AddressInfo,
  ItemsList,
  OrderPlaced,
} from '@crema/modules/ecommerce/Confirmation';

const Confirmation = () => {
  const [{apiData: cartItems}] = useGetDataApi('/api/cart/get', []);
  return (
    <>
      <AppPageMeta title='Order Confirmation' />
      <StyledConfirmationView key={'wrap'}>
        <OrderPlaced cartItems={cartItems} />
        <AddressInfo address={addresses[0]} />
        <ItemsList cartItems={cartItems} />
      </StyledConfirmationView>
    </>
  );
};

export default Confirmation;
