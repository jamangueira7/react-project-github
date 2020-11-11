import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import LogoImg from '../../assets/Logo.svg';

import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => (
  <>
    <img src={LogoImg} alt="Gitub Explorer" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/1902749?s=460&u=382acdf7478c6499d9b4321e68523d17b699e802&v=4"
          alt="João Mangueira"
        />
        <div>
          <strong>jamangueira7</strong>
          <p>fafjasdlfjasdlfja sdlfjflajfali sjfliafjlasdfjlfjlias djfliasdlifjalfjdsali</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/1902749?s=460&u=382acdf7478c6499d9b4321e68523d17b699e802&v=4"
          alt="João Mangueira"
        />
        <div>
          <strong>jamangueira7</strong>
          <p>fafjasdlfjasdlfja sdlfjflajfali sjfliafjlasdfjlfjlias djfliasdlifjalfjdsali</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/1902749?s=460&u=382acdf7478c6499d9b4321e68523d17b699e802&v=4"
          alt="João Mangueira"
        />
        <div>
          <strong>jamangueira7</strong>
          <p>fafjasdlfjasdlfja sdlfjflajfali sjfliafjlasdfjlfjlias djfliasdlifjalfjdsali</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>

  </>
);

export default Dashboard;
