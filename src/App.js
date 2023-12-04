import Grid from "@mui/material/Grid";
import "./App.css";
import MyForm from "./components/MyForm";
import MyTable from "./components/MyTable";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <MyForm />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <MyTable />
          </Grid>
        </Grid>
      </Provider>
    </>
  );
}

export default App;
