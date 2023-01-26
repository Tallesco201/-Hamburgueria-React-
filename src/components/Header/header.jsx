import React from "react";
import { Headerr } from "./styleHeader";

function Header({ lanches, setLanchesFiltrados, setLanchePesquisado }) {
  function dadosImput(event) {
    setLanchePesquisado(event.target.value);
    setLanchesFiltrados(
      lanches.filter(
        (item) =>
          item.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.category.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }

  function naoCarregarAPagina(event) {
    event.preventDefault();
  }
  return (
    <Headerr>
      <>
        <img src="assets/logo.png" alt="Logo BUrguer Kenzie" />
      </>

      <form>
        <input type="text" placeholder="Pesquise aqui" onChange={dadosImput} />
        <button onClick={(e) => naoCarregarAPagina(e)}>Pesquisar</button>
      </form>
    </Headerr>
  );
}

export default Header;
