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
  Card,
  CardGrid,
  SimpleCell,
  Text,
  Separator,
  Div,
  Image,
  Title,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import ProductCard from "../ProductCard/ProductCard";

const App = () => {
  const platform = usePlatform();

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
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
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
