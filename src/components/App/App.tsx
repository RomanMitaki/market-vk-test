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
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

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
                  <Card>
                    <div style={{ paddingBottom: "92%" }} />
                  </Card>
                  <Card>
                    <div style={{ paddingBottom: "92%" }} />
                  </Card>
                  <Card>
                    <div style={{ paddingBottom: "92%" }} />
                  </Card>
                </CardGrid>
              </Group>
            </Panel>
          </View>
        </SplitCol>
        <SplitCol width="25%" autoSpaced={true}>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader></PanelHeader>
              <Group>
                <SimpleCell height="100vh">
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
