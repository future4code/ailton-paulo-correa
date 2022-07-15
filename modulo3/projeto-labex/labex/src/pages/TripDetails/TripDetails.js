import React, { useEffect, useState } from "react";
import {
  TripDetailsContainer,
  Button,
  TitleTD,
  BoxDetail,
  BoxCandidates,
  DropCandidates,
  Show,
  TitleCandidate,
  Show2,
  Box,
  ButtonDecide,
  Candidate,
} from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";
import { decideCandidate, getApi } from "../../services/api";
import Loading from "../../components/Loading";

export default function TripDetails() {
  const [trip, setTrip] = useState({});
  const [load, setLoad] = useState(false);
  const [dropA, setDropA] = useState(false);
  const [dropC, setDropC] = useState(false);
  const [dateConvert, setDateConvert] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    setLoad(true);
    token === null && goToPage(navigate, "login/");
    const getTrips = async () => {
      const res = await getApi(`trip/${params.id}`, token);
      setTrip(res.trip);
      trip || goToPage(navigate, "admin/trips/list/");
      setLoad(false);
    };
    token && getTrips();
  }, []);

  useEffect(() => {
    trip.date && convertDate();
  }, [trip.date]);

  const convertDate = () => {
    if (trip.date.includes("-")) {
      setDateConvert(trip.date.split("-"));
    } else {
      setDateConvert(trip.date.split("/"));
    }
  };
  const showBox = (value1, value2, set1, set2) => {
    if (value2 && !value1) {
      set1(!value1);
      set2(!value2);
    } else {
      set1(!value1);
    }
  };
  const onClickDecide = async (id, decide) => {
    await decideCandidate(
      `trips/${params.id}/candidates/${id}/decide`,
      token,
      decide
    );
    const res = await getApi(`trip/${params.id}`, token);
    setTrip(res.trip);
  };
  return (
    <>
      {load && (
        <TripDetailsContainer>
          <Loading />
        </TripDetailsContainer>
      )}
      {!load && trip && (
        <TripDetailsContainer>
          <Button onClick={() => goToPage(navigate, "admin/trips/list/")}>
            Voltar
          </Button>
          <TitleTD>Detalhes da viagem {trip.name}</TitleTD>
          <BoxDetail>
            <p>{"Nome: " + trip.name}</p>
            <p>{"Planeta: " + trip.planet}</p>
            <p>{`Data: ${dateConvert[2]}/${dateConvert[1]}/${dateConvert[0]}`}</p>
            <p>{"Duração da viagem: " + trip.durationInDays + " Dias"}</p>
            <p>{"Descrição da viagem: " + trip.description}</p>
            <BoxCandidates>
              <DropCandidates>
                <TitleCandidate>Candidatos Pendentes</TitleCandidate>
                <Show
                  onClick={() => showBox(dropC, dropA, setDropC, setDropA)}
                  drop={dropC}
                >
                  {">"}
                </Show>
              </DropCandidates>
              {dropC && (
                <Box>
                  {trip.candidates?.map((item) => {
                    return (
                      <Candidate key={item.id}>
                        <p key={item.id}>{` • ${item.name}`}</p>
                        <ButtonDecide
                          onClick={() =>
                            onClickDecide(item.id, { approve: true })
                          }
                        >
                          Aprovar
                        </ButtonDecide>
                        <ButtonDecide
                          onClick={() =>
                            onClickDecide(item.id, { approve: false })
                          }
                        >
                          Não Aprovar
                        </ButtonDecide>
                      </Candidate>
                    );
                  })}
                  {trip.candidates.length === 0 && (
                    <p>Sem candidatos pendentes</p>
                  )}
                </Box>
              )}
            </BoxCandidates>
            <BoxCandidates>
              <DropCandidates>
                <TitleCandidate>Candidatos Aprovados</TitleCandidate>
                <Show2
                  onClick={() => showBox(dropA, dropC, setDropA, setDropC)}
                  drop={dropA}
                >
                  {">"}
                </Show2>
              </DropCandidates>
              {dropA && (
                <Box>
                  {trip.approved?.map((item) => {
                    return (
                      <Candidate>
                        <p key={item.id}>{` ${item.name}`}</p>
                      </Candidate>
                    );
                  })}
                  {trip.approved.length === 0 && (
                    <p>Sem candidatos aprovados</p>
                  )}
                </Box>
              )}
            </BoxCandidates>
          </BoxDetail>
        </TripDetailsContainer>
      )}
    </>
  );
}
