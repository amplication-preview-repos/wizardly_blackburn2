import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProyectoList } from "./proyecto/ProyectoList";
import { ProyectoCreate } from "./proyecto/ProyectoCreate";
import { ProyectoEdit } from "./proyecto/ProyectoEdit";
import { ProyectoShow } from "./proyecto/ProyectoShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { FreelancerList } from "./freelancer/FreelancerList";
import { FreelancerCreate } from "./freelancer/FreelancerCreate";
import { FreelancerEdit } from "./freelancer/FreelancerEdit";
import { FreelancerShow } from "./freelancer/FreelancerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"ProjectService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Proyecto"
          list={ProyectoList}
          edit={ProyectoEdit}
          create={ProyectoCreate}
          show={ProyectoShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Freelancer"
          list={FreelancerList}
          edit={FreelancerEdit}
          create={FreelancerCreate}
          show={FreelancerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
