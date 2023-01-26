import "./App.css";

import { useEffect, useState } from "react";
import Card from "./components/Card/card";
import Header from "./components/Header/header";
import Cart from "./components/Cart/cart";

function App() {
  const [lanches, setLanches] = useState([]);
  const [lanchesCarrinho, setLanchesCarrinho] = useState([]);
  const [LanchesFiltrados, setLanchesFiltrados] = useState([]);
  const [lanchePesquisado, setLanchePesquisado] = useState("");
  const [pesquisaAtivo, setPesquisaAtivo] = useState(false);

  function adicionarAoCarrinho(produto) {
    setLanchesCarrinho([...lanchesCarrinho, produto]);
  }

  function deletarItemCarrinho(produto) {
    setLanchesCarrinho(lanchesCarrinho.filter((item) => item !== produto));
  }

  function deletarTodositens() {
    setLanchesCarrinho([]);
  }

  function setValorInputParaVazio() {
    setPesquisaAtivo(false);
    setLanchePesquisado("");
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setLanches(response);
        setLanchesFiltrados(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Header
        lanches={lanches}
        setLanchesFiltrados={setLanchesFiltrados}
        setLanchePesquisado={setLanchePesquisado}
        lanchePesquisado={lanchePesquisado}
        setPesquisaAtivo={setPesquisaAtivo}
      />

      {/* {pesquisaAtivo && lanchePesquisado && (
        <div className="resultadosPara">
          <h2>
            Resultados para: <span>{lanchePesquisado}</span>
          </h2>

          <button onClick={() => setValorInputParaVazio()}>
            Limpar pesquisa
          </button>
        </div>
      )} */}
      <main>
        {lanchePesquisado.length !== 0 ? (
          <>
            <h2 className="h2">
              Resultado para:<p className="p">{lanchePesquisado}</p>
            </h2>
            <div className=" containerGeral">
              <Card
                adicionarAoCarrinho={adicionarAoCarrinho}
                LanchesFiltrados={LanchesFiltrados}
                lanches={lanches}
                pesquisaAtivo={pesquisaAtivo}
                lanchePesquisado={lanchePesquisado}
                setValorInputParaVazio={setValorInputParaVazio}
              />
              <Cart
                deletarItemCarrinho={deletarItemCarrinho}
                lanchesCarrinho={lanchesCarrinho}
                deletarTodositens={deletarTodositens}
              />
            </div>
          </>
        ) : (
          <div className=" containerGeral">
            <Card
              adicionarAoCarrinho={adicionarAoCarrinho}
              LanchesFiltrados={LanchesFiltrados}
              lanches={lanches}
              pesquisaAtivo={pesquisaAtivo}
              lanchePesquisado={lanchePesquisado}
              setValorInputParaVazio={setValorInputParaVazio}
            />
            <Cart
              deletarItemCarrinho={deletarItemCarrinho}
              lanchesCarrinho={lanchesCarrinho}
              deletarTodositens={deletarTodositens}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
