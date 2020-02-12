import React, { Component } from "react";
import Reactotron from "reactotron-react-js";

import api from "../../services/api";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./styles.css";

export default class Main extends Component {
  state = {
    cepSearch: "",
    cepInfo: {}
  };

  handleChangeCep = event => {
    this.setState({ cepSearch: event.target.value });
    //Reactotron.log(this.state.cepSearch);
  };

  handleSearchCep = async () => {
    const { cepSearch } = this.state;
    const response = await api.get(`/${cepSearch}/json/`);

    if (response.data) {
      this.setState({ cepInfo: response.data, cepSearch: "" });
    }
    //Reactotron.log(this.state.cepInfo);
  };

  render() {
    const { cepSearch, cepInfo } = this.state;

    return (
      <div className="cep-search">
        <Form>
          <Form.Group controlId="pesquisaCep">
            <Form.Label>CEP</Form.Label>

            <Form.Control
              type="text"
              placeholder="Informe um CEP"
              onChange={this.handleChangeCep}
              value={cepSearch}
            />
          </Form.Group>

          <Button variant="primary" onClick={this.handleSearchCep}>
            Pesquisar
          </Button>

          <div className="cep-result">
            <article key={cepInfo.cep}>
              <strong>{cepInfo.cep}</strong>
              <p>
                {cepInfo.logradouro} <br />
                Complento: {cepInfo.complemento} <br />
                Bairro: {cepInfo.bairro} <br />
                Cidade: {cepInfo.localidade} <br />
                UF: {cepInfo.uf} <br />
                Código do IBGE: {cepInfo.ibge} <br />
              </p>
            </article>
          </div>
        </Form>
      </div>
    );
  }
}
