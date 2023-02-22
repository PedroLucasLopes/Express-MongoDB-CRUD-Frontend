import React from "react";
import * as Styled from "./Styles/HomeStyle";
import Card from "../../Components/Card/Card";
import Navbar from "../../Components/Navbar/Navbar";
import instance from "../../utils/instance";

const Home = () => {
  const [search, setSearch] = React.useState('');
  const [productsData, setProductsData] = React.useState();

  React.useEffect(() => {
    instance.get('products').then(({ data }) => {
      setProductsData(data);
    });
  }, [])

  const searchLowerCase = search.toLowerCase();
  const currentItems = search
    ? productsData?.filter(({ name }) => name.toLowerCase().includes(searchLowerCase))
    : productsData

  return (
    <Styled.Main>
      <Navbar setSearch={setSearch} />
      <Styled.Title>Products</Styled.Title>
      <Styled.GridCard>
        {productsData && currentItems.map(({ name, description, price, _id }) =>
          <Card
            key={_id}
            name={name}
            description={description}
            price={Number(price).toFixed(2)}
            id={_id}
          />
        )}
      </Styled.GridCard>
    </Styled.Main>
  );
};

export default Home;
