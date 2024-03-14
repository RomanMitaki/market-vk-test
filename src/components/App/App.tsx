import * as React from "react";
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  usePlatform,
  Group,
  CardGrid,
  SimpleCell,
  Text,
  Separator,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import ProductCard from "../ProductCard/ProductCard";
import { TProductMapped } from "../../utils/types";
import { useEffect, useState } from "react";
import { getProducts } from "../../utils/api";

const App = () => {
  const platform = usePlatform();
  const [products, setProducts] = useState<TProductMapped[]>([]);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      if (data) {
        setProducts(data);
      }
    } catch (error) {
    } finally {
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <AppRoot>
      <SplitLayout
        header={
          platform !== "vkcom" && (
            <PanelHeader delimiter="none" style={{ justifyContent: "start" }} />
          )
        }
      >
        <SplitCol width="75%">
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>Market VK test</PanelHeader>
              <Group description="Карточки товаров">
                <CardGrid spaced={true} size="s">
                  {products.length &&
                    products.map((product) => (
                      <ProductCard key={product.id} info={product} />
                    ))}
                </CardGrid>
              </Group>
            </Panel>
          </View>
        </SplitCol>
        <Separator />
        <SplitCol width="25%">
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader></PanelHeader>
              <Group>
                <SimpleCell>
                  <Text>Price</Text>
                </SimpleCell>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
