import { Route, Switch, useRouteMatch } from "react-router-dom";
import { SharingComponent } from "../components/common";
import Goods from "../pages/sections/Goods";
import * as GoodCatalogs from "../pages/goods"


function GoodsRouter() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} children={<SharingComponent MainCreator={Goods} />}></Route>
      <Route path={`${path}/catalog/91f75636-55a8-4776-b06a-34608adbf01c`} children={<SharingComponent MainCreator={GoodCatalogs.QualityLife} />} />
      <Route path={`${path}/catalog/f3e40f36-7f91-49af-a507-552ce90aefbc`} children={<SharingComponent MainCreator={GoodCatalogs.MakeUp} />} />
      <Route path={`${path}/catalog/f226a596-cbb9-4ca4-90fa-23056cb336a9`} children={<SharingComponent MainCreator={GoodCatalogs.ClothStyle} />} />
      <Route path={`${path}/catalog/c82a839e-7169-4568-8513-fe2444ac8d6`} children={<SharingComponent MainCreator={GoodCatalogs.Foods} />} />
      <Route path={`${path}/catalog/86048137-d4fe-4ef3-b1bb-6913cc0f7676`} children={<SharingComponent MainCreator={GoodCatalogs.HomeApplianceAnd3C} />} />
      <Route path={`${path}/catalog/44a154ba-abb5-4c7b-bfe1-fc3688f362a0`} children={<SharingComponent MainCreator={GoodCatalogs.SexToys} />} />
      <Route path={`${path}/categories`} children={<SharingComponent MainCreator={GoodCatalogs.GoodsCategories} />} />
    </Switch>
  )
}

export default GoodsRouter


