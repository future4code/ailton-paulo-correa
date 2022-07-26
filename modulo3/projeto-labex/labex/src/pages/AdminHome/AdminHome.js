import React, { useEffect, useState } from "react";
import {
  AdminHomeContainer,
  BoxCardAdmin,
  Button,
  Header,
  LineDiv,
  TitleAdmin,
} from "./styled";
import CardAdmin from "../../components/CardAdmin";
import { goToPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { getApi } from "../../services/api";
import Loading from "../../components/Loading"

export default function AdminHome() {
  const [trips, setTrips] = useState([]);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoad(true);
    const token = localStorage.getItem("token");
    token || goToPage(navigate, "login/");
    const getTrips = async () => {
      const res = await getApi("trips");
      setTrips(res.trips);
      setLoad(false);
    };
    token && getTrips();
  }, []);
  return (
    <AdminHomeContainer>
      <Header>
        <TitleAdmin>Administrativo</TitleAdmin>
        <Button onClick={() => goToPage(navigate, "")}>Voltar</Button>
        <Button onClick={() => goToPage(navigate, "admin/trips/create/")}>
          Criar viagem
        </Button>
        <Button
          onClick={() => {
            window.localStorage.setItem("token", "");
            goToPage(navigate, "login/");
          }}
        >
          Logout
        </Button>
      </Header>
      <LineDiv />
      <BoxCardAdmin>
        {load && <Loading/>}        
        {!load && trips?.map((item) => {
          return (
            <CardAdmin
              setTrips={setTrips}
              key={item.id}
              name={item.name}
              id={item.id}
            />
          );
        })}
      </BoxCardAdmin>
    </AdminHomeContainer>
  );
}
