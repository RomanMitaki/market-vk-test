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
import { useEffect } from "react";
import { TUseSelector, useAppDispatch } from "../../utils/types";
import { renderProducts } from "../../services/actions/products";

const App = () => {
  const platform = usePlatform();
  const dispatch = useAppDispatch();
  const { products, isLoading, hasError } = TUseSelector(
    (store) => store.products,
  );
  useEffect(() => {
    dispatch(renderProducts());
  }, [dispatch]);

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
