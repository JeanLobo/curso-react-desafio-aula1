import React, { memo } from 'react';

import './styles.css';

function CepResults({ cepInfo }) {
  return (
    <div className="cep-result">
      <article key={cepInfo.cep}>
        <h2>
          <strong>{cepInfo.cep}</strong>
        </h2>
        <p>
          <h4>
            <strong>{cepInfo.logradouro} </strong>
          </h4>
          <br />
          Complento: {cepInfo.complemento} <br />
          Bairro: {cepInfo.bairro} <br />
          Cidade: {cepInfo.localidade} <br />
          UF: {cepInfo.uf} <br />
          Código do IBGE: {cepInfo.ibge} <br />
        </p>
      </article>
    </div>
  );
}

export default memo(CepResults);
