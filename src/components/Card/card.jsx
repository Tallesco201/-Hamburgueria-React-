import { DivCard, DivContainer, DivContainerImg, DivInfo } from "./styleCard";

export default function Card({
  adicionarAoCarrinho,
  LanchesFiltrados,
  lanchePesquisado,
}) {
  return (
    <>
      <DivContainer>
        {LanchesFiltrados.map((lanch) => (
          <DivCard key={lanch.id}>
            <DivContainerImg>
              <img src={lanch.img} alt="imagem" />
            </DivContainerImg>
            <DivInfo>
              <h3>{lanch.name}</h3>
              <span>{lanch.category}</span>
              <p>R$ {lanch.price}</p>
              <button onClick={() => adicionarAoCarrinho(lanch)}>
                Adicionar
              </button>
            </DivInfo>
          </DivCard>
        ))}
      </DivContainer>
    </>
  );
}
